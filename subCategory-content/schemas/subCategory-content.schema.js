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
exports.SubCategoryContentSchema = exports.SubCategoryContent = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const marked_1 = require("marked");
let SubCategoryContent = exports.SubCategoryContent = class SubCategoryContent {
    get html() {
        return (0, marked_1.marked)(this.content);
    }
};
__decorate([
    (0, mongoose_1.Prop)({ maxlength: 50 }),
    __metadata("design:type", String)
], SubCategoryContent.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], SubCategoryContent.prototype, "likeCount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'ObjectId', ref: 'KnowledgeSubCategory' }),
    __metadata("design:type", String)
], SubCategoryContent.prototype, "subCategoryId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], SubCategoryContent.prototype, "content", void 0);
exports.SubCategoryContent = SubCategoryContent = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: { createdAt: 'createdTime', updatedAt: 'updatedTime' },
        collection: 'subCategory-content',
        versionKey: false,
    })
], SubCategoryContent);
exports.SubCategoryContentSchema = mongoose_1.SchemaFactory.createForClass(SubCategoryContent);
//# sourceMappingURL=subCategory-content.schema.js.map