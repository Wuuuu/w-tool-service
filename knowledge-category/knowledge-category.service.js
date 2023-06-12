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
exports.KnowledgeCategoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let KnowledgeCategoryService = exports.KnowledgeCategoryService = class KnowledgeCategoryService {
    constructor(knowledgeCategoryModel, knowledgeSubCategoryModel) {
        this.knowledgeCategoryModel = knowledgeCategoryModel;
        this.knowledgeSubCategoryModel = knowledgeSubCategoryModel;
    }
    async create(createKnowledgeCategoryDto) {
        const { collectionName } = createKnowledgeCategoryDto;
        const currentCollection = await this.knowledgeCategoryModel.findOne({
            collectionName,
        });
        if (currentCollection) {
            throw new common_1.HttpException('知识合集已存在', common_1.HttpStatus.BAD_REQUEST);
        }
        const createCollection = await this.knowledgeCategoryModel.create(createKnowledgeCategoryDto);
        return createCollection;
    }
    async findAll(page, limit) {
        const selectStr = 'collectionName coverUrl createdTime updatedTime likeCount summary _id';
        const data = await this.knowledgeCategoryModel
            .find()
            .populate('subCategories')
            .skip((page - 1) * limit)
            .limit(limit)
            .exec();
        console.log('data', data);
        const total = await this.knowledgeCategoryModel.countDocuments().exec();
        return {
            data,
            current: page,
            pageSize: limit,
            total,
        };
    }
    findOne(id) {
        return `This action returns a #${id} knowledgeCategory`;
    }
    async update(id, updateKnowledgeCategoryDto) {
        await this.knowledgeCategoryModel.findByIdAndUpdate(id, {
            $set: updateKnowledgeCategoryDto,
        }, {
            new: true,
        });
        return '更新成功';
    }
    async remove(id) {
        const delObj = await this.knowledgeCategoryModel.findByIdAndRemove({
            _id: id,
        });
        if (!delObj) {
            throw new common_1.HttpException('数据不存在', common_1.HttpStatus.BAD_REQUEST);
        }
        return '删除成功';
    }
};
exports.KnowledgeCategoryService = KnowledgeCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('KnowledgeCategory')),
    __param(1, (0, mongoose_2.InjectModel)('KnowledgeSubCategory')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], KnowledgeCategoryService);
//# sourceMappingURL=knowledge-category.service.js.map