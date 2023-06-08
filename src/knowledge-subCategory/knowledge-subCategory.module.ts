import { Module } from '@nestjs/common';
import { KnowledgeSubCategoryService } from './knowledge-subCategory.service';
import { KnowledgeSubCategoryController } from './knowledge-subCategory.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { KnowledgeSubCategorySchema } from './schemas/knowledge-subCategory.schema';
import { KnowledgeCategoryModule } from '../knowledge-category/knowledge-category.module';
import { KnowledgeCategorySchema } from '../knowledge-category/schemas/knowledge-category.schema';
import { SubCategoryContentSchema } from '../subCategory-content/schemas/subCategory-content.schema';
import { SubCategoryContentModule } from '../subCategory-content/subCategory-content.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'KnowledgeSubCategory', schema: KnowledgeSubCategorySchema },
      { name: 'KnowledgeCategory', schema: KnowledgeCategorySchema },
      { name: 'SubCategoryContent', schema: SubCategoryContentSchema },
    ]),
    KnowledgeCategoryModule,
    SubCategoryContentModule,
  ],
  controllers: [KnowledgeSubCategoryController],
  providers: [KnowledgeSubCategoryService],
  exports: [KnowledgeSubCategoryService],
})
export class KnowledgeSubCategryModule {}
