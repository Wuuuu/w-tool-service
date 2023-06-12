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
exports.SubCategoryContentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let SubCategoryContentService = exports.SubCategoryContentService = class SubCategoryContentService {
    constructor(subCategoryContentModel) {
        this.subCategoryContentModel = subCategoryContentModel;
    }
    async create(createSubCategoryContentDto) {
        const subCategoryItem = new this.subCategoryContentModel(createSubCategoryContentDto);
        console.log('subCategory', subCategoryItem);
        const existSubCategory = await this.subCategoryContentModel.findOne({
            title: subCategoryItem.title,
        });
        if (existSubCategory) {
            throw new common_1.HttpException('问答项已经存在', common_1.HttpStatus.BAD_REQUEST);
        }
        await this.subCategoryContentModel.create(subCategoryItem);
        return '新增成功';
    }
    findAll() {
        return `This action returns all subCategoryContent`;
    }
    findOne(id) {
        return `This action returns a #${id} subCategoryContent`;
    }
    async update(id, updateSubCategoryContentDto) {
        const res = await this.subCategoryContentModel
            .findByIdAndUpdate(id, {
            $set: updateSubCategoryContentDto,
        }, { new: true })
            .exec();
        return '更新成功';
    }
    remove(id) {
        return `This action removes a #${id} subCategoryContent`;
    }
};
exports.SubCategoryContentService = SubCategoryContentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('SubCategoryContent')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SubCategoryContentService);
//# sourceMappingURL=subCategory-content.service.js.map