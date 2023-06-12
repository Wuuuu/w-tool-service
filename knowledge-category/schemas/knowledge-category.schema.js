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
exports.KnowledgeCategorySchema = exports.KnowledgeCategory = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let KnowledgeCategory = exports.KnowledgeCategory = class KnowledgeCategory extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({ type: 'ObjectId' }),
    __metadata("design:type", String)
], KnowledgeCategory.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ maxlength: 50 }),
    __metadata("design:type", String)
], KnowledgeCategory.prototype, "collectionName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], KnowledgeCategory.prototype, "coverUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({ Type: String }),
    __metadata("design:type", String)
], KnowledgeCategory.prototype, "summary", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], KnowledgeCategory.prototype, "desc", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], KnowledgeCategory.prototype, "likeCount", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'KnowledgeSubCategory' }]),
    __metadata("design:type", Array)
], KnowledgeCategory.prototype, "subCategories", void 0);
exports.KnowledgeCategory = KnowledgeCategory = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: { createdAt: 'createdTime', updatedAt: 'updatedTime' },
        collection: 'knowledge_category',
    })
], KnowledgeCategory);
exports.KnowledgeCategorySchema = mongoose_1.SchemaFactory.createForClass(KnowledgeCategory);
//# sourceMappingURL=knowledge-category.schema.js.map