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
exports.KnowledgeCategoryController = void 0;
const common_1 = require("@nestjs/common");
const knowledge_category_service_1 = require("./knowledge-category.service");
const create_knowledge_category_dto_1 = require("./dto/create-knowledge-category.dto");
const update_knowledge_category_dto_1 = require("./dto/update-knowledge-category.dto");
const knowledge_category_info_dto_1 = require("./dto/knowledge-category-info.dto");
const swagger_1 = require("@nestjs/swagger");
let KnowledgeCategoryController = exports.KnowledgeCategoryController = class KnowledgeCategoryController {
    constructor(knowledgeCategoryService) {
        this.knowledgeCategoryService = knowledgeCategoryService;
    }
    create(createKnowledgeCategoryDto) {
        return this.knowledgeCategoryService.create(createKnowledgeCategoryDto);
    }
    findAll(current = 1, pageSize = 10) {
        return this.knowledgeCategoryService.findAll(current, pageSize);
    }
    findOne(id) {
        return this.knowledgeCategoryService.findOne(+id);
    }
    update(id, updateKnowledgeCategoryDto) {
        return this.knowledgeCategoryService.update(id, updateKnowledgeCategoryDto);
    }
    remove(id) {
        return this.knowledgeCategoryService.remove(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '新建知识合集类别' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: knowledge_category_info_dto_1.KnowledgeCateGoryInfoDto }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_knowledge_category_dto_1.CreateKnowledgeCategoryDto]),
    __metadata("design:returntype", void 0)
], KnowledgeCategoryController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '知识所有合集' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('list'),
    __param(0, (0, common_1.Query)('current')),
    __param(1, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], KnowledgeCategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], KnowledgeCategoryController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '更新某个合集' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_knowledge_category_dto_1.UpdateKnowledgeCategoryDto]),
    __metadata("design:returntype", void 0)
], KnowledgeCategoryController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '删除某个合集' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], KnowledgeCategoryController.prototype, "remove", null);
exports.KnowledgeCategoryController = KnowledgeCategoryController = __decorate([
    (0, swagger_1.ApiTags)('知识集合类别'),
    (0, common_1.Controller)('knowledge-category'),
    __metadata("design:paramtypes", [knowledge_category_service_1.KnowledgeCategoryService])
], KnowledgeCategoryController);
//# sourceMappingURL=knowledge-category.controller.js.map