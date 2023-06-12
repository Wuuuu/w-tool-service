"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowledgeCategoryModule = void 0;
const common_1 = require("@nestjs/common");
const knowledge_category_service_1 = require("./knowledge-category.service");
const knowledge_category_controller_1 = require("./knowledge-category.controller");
const mongoose_1 = require("@nestjs/mongoose");
const knowledge_category_schema_1 = require("./schemas/knowledge-category.schema");
const knowledge_subCategory_schema_1 = require("../knowledge-subCategory/schemas/knowledge-subCategory.schema");
let KnowledgeCategoryModule = exports.KnowledgeCategoryModule = class KnowledgeCategoryModule {
};
exports.KnowledgeCategoryModule = KnowledgeCategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'KnowledgeCategory', schema: knowledge_category_schema_1.KnowledgeCategorySchema },
                { name: 'KnowledgeSubCategory', schema: knowledge_subCategory_schema_1.KnowledgeSubCategorySchema },
            ]),
        ],
        controllers: [knowledge_category_controller_1.KnowledgeCategoryController],
        providers: [knowledge_category_service_1.KnowledgeCategoryService],
        exports: [knowledge_category_service_1.KnowledgeCategoryService],
    })
], KnowledgeCategoryModule);
//# sourceMappingURL=knowledge-category.module.js.map