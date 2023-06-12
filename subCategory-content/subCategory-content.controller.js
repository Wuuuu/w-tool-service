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
exports.SubCategoryContentController = void 0;
const common_1 = require("@nestjs/common");
const subCategory_content_service_1 = require("./subCategory-content.service");
const create_subCategory_content_dto_1 = require("./dto/create-subCategory-content.dto");
const update_subCategory_content_dto_1 = require("./dto/update-subCategory-content.dto");
const swagger_1 = require("@nestjs/swagger");
let SubCategoryContentController = exports.SubCategoryContentController = class SubCategoryContentController {
    constructor(subCategoryContentService) {
        this.subCategoryContentService = subCategoryContentService;
    }
    create(createSubCategoryContentDto) {
        return this.subCategoryContentService.create(createSubCategoryContentDto);
    }
    findAll() {
        return this.subCategoryContentService.findAll();
    }
    findOne(id) {
        return this.subCategoryContentService.findOne(+id);
    }
    update(id, updateSubCategoryContentDto) {
        return this.subCategoryContentService.update(id, updateSubCategoryContentDto);
    }
    remove(id) {
        return this.subCategoryContentService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '新增问答' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_subCategory_content_dto_1.CreateSubCategoryContentDto]),
    __metadata("design:returntype", void 0)
], SubCategoryContentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SubCategoryContentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SubCategoryContentController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '更新问答列表项' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_subCategory_content_dto_1.UpdateSubCategoryContentDto]),
    __metadata("design:returntype", void 0)
], SubCategoryContentController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '删除问答列表项' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SubCategoryContentController.prototype, "remove", null);
exports.SubCategoryContentController = SubCategoryContentController = __decorate([
    (0, swagger_1.ApiTags)('子类别里问答展示列表'),
    (0, common_1.Controller)('subCategory-list'),
    __metadata("design:paramtypes", [subCategory_content_service_1.SubCategoryContentService])
], SubCategoryContentController);
//# sourceMappingURL=subCategory-content.controller.js.map