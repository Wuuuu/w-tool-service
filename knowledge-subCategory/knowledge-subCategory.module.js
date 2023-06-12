"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowledgeSubCategryModule = void 0;
const common_1 = require("@nestjs/common");
const knowledge_subCategory_service_1 = require("./knowledge-subCategory.service");
const knowledge_subCategory_controller_1 = require("./knowledge-subCategory.controller");
const mongoose_1 = require("@nestjs/mongoose");
const knowledge_subCategory_schema_1 = require("./schemas/knowledge-subCategory.schema");
const knowledge_category_module_1 = require("../knowledge-category/knowledge-category.module");
const knowledge_category_schema_1 = require("../knowledge-category/schemas/knowledge-category.schema");
const subCategory_content_schema_1 = require("../subCategory-content/schemas/subCategory-content.schema");
const subCategory_content_module_1 = require("../subCategory-content/subCategory-content.module");
let KnowledgeSubCategryModule = exports.KnowledgeSubCategryModule = class KnowledgeSubCategryModule {
};
exports.KnowledgeSubCategryModule = KnowledgeSubCategryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'KnowledgeSubCategory', schema: knowledge_subCategory_schema_1.KnowledgeSubCategorySchema },
                { name: 'KnowledgeCategory', schema: knowledge_category_schema_1.KnowledgeCategorySchema },
                { name: 'SubCategoryContent', schema: subCategory_content_schema_1.SubCategoryContentSchema },
            ]),
            knowledge_category_module_1.KnowledgeCategoryModule,
            subCategory_content_module_1.SubCategoryContentModule,
        ],
        controllers: [knowledge_subCategory_controller_1.KnowledgeSubCategoryController],
        providers: [knowledge_subCategory_service_1.KnowledgeSubCategoryService],
        exports: [knowledge_subCategory_service_1.KnowledgeSubCategoryService],
    })
], KnowledgeSubCategryModule);
//# sourceMappingURL=knowledge-subCategory.module.js.map