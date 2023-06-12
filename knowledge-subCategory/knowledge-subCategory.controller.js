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
exports.KnowledgeSubCategoryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const knowledge_subCategory_service_1 = require("./knowledge-subCategory.service");
const create_subCategory_dto_1 = require("./dto/create-subCategory.dto");
const update_subCategory_dto_1 = require("./dto/update-subCategory.dto");
let KnowledgeSubCategoryController = exports.KnowledgeSubCategoryController = class KnowledgeSubCategoryController {
    constructor(knowledgeSubCategoryService) {
        this.knowledgeSubCategoryService = knowledgeSubCategoryService;
    }
    create(createKnowledgePointDto) {
        return this.knowledgeSubCategoryService.create(createKnowledgePointDto);
    }
    findAll(id) {
        return this.knowledgeSubCategoryService.findAll(id);
    }
    update(id, updateKnowledgePointDto) {
        return this.knowledgeSubCategoryService.update(id, updateKnowledgePointDto);
    }
    remove(id) {
        return this.knowledgeSubCategoryService.remove(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '新增合集子类别' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_subCategory_dto_1.CreateKnowledgeSubCategoryDto]),
    __metadata("design:returntype", void 0)
], KnowledgeSubCategoryController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '获取合集子类别列表' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], KnowledgeSubCategoryController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '更新合集子类别内容' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_subCategory_dto_1.UpdateKnowledgeSubCategoryDto]),
    __metadata("design:returntype", void 0)
], KnowledgeSubCategoryController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '删除指定合集子类别' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], KnowledgeSubCategoryController.prototype, "remove", null);
exports.KnowledgeSubCategoryController = KnowledgeSubCategoryController = __decorate([
    (0, swagger_1.ApiTags)('知识合集子类别'),
    (0, common_1.Controller)('knowledge-subCategory'),
    __metadata("design:paramtypes", [knowledge_subCategory_service_1.KnowledgeSubCategoryService])
], KnowledgeSubCategoryController);
//# sourceMappingURL=knowledge-subCategory.controller.js.map