"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowledgeSubCategoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let KnowledgeSubCategoryService = exports.KnowledgeSubCategoryService = class KnowledgeSubCategoryService {
    constructor(knowledgeSubCategoryModel, knowledgeCategory) {
        this.knowledgeSubCategoryModel = knowledgeSubCategoryModel;
        this.knowledgeCategory = knowledgeCategory;
    }
    async create(createKnowledgeSubCategoryDto) {
        const subCategory = new this.knowledgeSubCategoryModel(createKnowledgeSubCategoryDto);
        const existSubCategory = await this.knowledgeSubCategoryModel.findOne({
            subCategoryName: subCategory.subCategoryName,
        });
        if (existSubCategory) {
            throw new common_1.HttpException('子类别已经存在', common_1.HttpStatus.BAD_REQUEST);
        }
        await this.knowledgeSubCategoryModel.create(subCategory);
        return '添加成功';
    }
    async findAll(id) {
        const subCategoriesList = await this.knowledgeSubCategoryModel.aggregate([
            {
                $lookup: {
                    from: 'subCategory-content',
                    localField: 'subCategoryId',
                    foreignField: 'subCategoryId',
                    as: 'list',
                },
            },
            {
                $match: {
                    categoryId: new mongoose_2.default.Types.ObjectId(id),
                },
            },
        ]);
        return subCategoriesList;
    }
    findOne() {
        return 'findOne';
    }
    async update(id, updateKnowledgeSubCategoryDto) {
        const updatedSubCategory = await this.knowledgeSubCategoryModel
            .findByIdAndUpdate(id, updateKnowledgeSubCategoryDto, { new: true })
            .exec();
        console.log('updatedSubCategory:', updatedSubCategory);
        return updatedSubCategory;
    }
    async remove(id) {
        const exitSubCategoryData = await this.knowledgeSubCategoryModel.findOneAndRemove({
            subCategoryId: id,
        });
        if (!exitSubCategoryData) {
            throw new common_1.HttpException('数据不存在', common_1.HttpStatus.BAD_REQUEST);
        }
        return '删除成功';
    }
    async removeItem(_id) {
        const exitSubCategoryData = await this.knowledgeSubCategoryModel.findByIdAndRemove({ _id });
        if (!exitSubCategoryData) {
            throw new common_1.HttpException('数据不存在', common_1.HttpStatus.BAD_REQUEST);
        }
        return '删除成功';
    }
};
exports.KnowledgeSubCategoryService = KnowledgeSubCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('KnowledgeSubCategory')),
    __param(1, (0, mongoose_1.InjectModel)('KnowledgeCategory')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], KnowledgeSubCategoryService);
//# sourceMappingURL=knowledge-subCategory.service.js.map