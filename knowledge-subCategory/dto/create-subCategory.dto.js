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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateKnowledgeSubCategoryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateKnowledgeSubCategoryDto {
}
exports.CreateKnowledgeSubCategoryDto = CreateKnowledgeSubCategoryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '子合集名称' }),
    (0, class_validator_1.IsNotEmpty)({ message: '请传入子合集名称' }),
    __metadata("design:type", String)
], CreateKnowledgeSubCategoryDto.prototype, "subCategoryName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '当前合集Id' }),
    (0, class_validator_1.IsNotEmpty)({ message: '请传入合集Id' }),
    __metadata("design:type", String)
], CreateKnowledgeSubCategoryDto.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '子类别问答列表' }),
    __metadata("design:type", Array)
], CreateKnowledgeSubCategoryDto.prototype, "list", void 0);
//# sourceMappingURL=create-subCategory.dto.js.map