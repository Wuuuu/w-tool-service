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
exports.KnowledgeSubCategorySchema = exports.KnowledgeSubCategory = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let KnowledgeSubCategory = exports.KnowledgeSubCategory = class KnowledgeSubCategory {
};
__decorate([
    (0, mongoose_1.Prop)({ type: 'ObjectId', auto: true }),
    __metadata("design:type", mongoose_2.default.Types.ObjectId)
], KnowledgeSubCategory.prototype, "subCategoryId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ maxlength: 30 }),
    __metadata("design:type", String)
], KnowledgeSubCategory.prototype, "subCategoryName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'ObjectId', ref: 'KnowledgeCategory' }),
    __metadata("design:type", Object)
], KnowledgeSubCategory.prototype, "categoryId", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: 'ObjectId', ref: 'SubCategoryContent' }]),
    __metadata("design:type", Array)
], KnowledgeSubCategory.prototype, "list", void 0);
exports.KnowledgeSubCategory = KnowledgeSubCategory = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: { createdAt: 'createdTime', updatedAt: 'updatedTime' },
        versionKey: false,
        collection: 'knowledge_subCategory',
    })
], KnowledgeSubCategory);
exports.KnowledgeSubCategorySchema = mongoose_1.SchemaFactory.createForClass(KnowledgeSubCategory);
//# sourceMappingURL=knowledge-subCategory.schema.js.map