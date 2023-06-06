import { Module } from '@nestjs/common';
import { KnowledgeSubCategoryService } from './knowledge-subCategory.service';
import { KnowledgeSubCategoryController } from './knowledge-subCategory.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { KnowledgeSubCategorySchema } from './schamas/knowledge-subCategory.schema';
import { KnowledgeCategoryModule } from '../knowledge-category/knowledge-category.module';
import { KnowledgeCategorySchema } from '../knowledge-category/schemas/knowledge-category.schema';
import { SubCategoryContentSchema } from './schamas/subCategory-content.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'KnowledgeSubCategory', schema: KnowledgeSubCategorySchema },
      { name: 'KnowledgeCategory', schema: KnowledgeCategorySchema },
      // { name: 'SubCategoryContent', schema: SubCategoryContentSchema },
    ]),
    KnowledgeCategoryModule,
  ],
  controllers: [KnowledgeSubCategoryController],
  providers: [KnowledgeSubCategoryService],
  exports: [KnowledgeSubCategoryService],
})
export class KnowledgeSubCategryModule {}
