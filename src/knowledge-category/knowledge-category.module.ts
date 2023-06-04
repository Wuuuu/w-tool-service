import { Module } from '@nestjs/common';
import { KnowledgeCategoryService } from './knowledge-category.service';
import { KnowledgeCategoryController } from './knowledge-category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { KnowledgeCategorySchema } from './schemas/knowledge-category.schema';
import { KnowledgeSubCategorySchema } from '../knowledge-subCategory/schamas/knowledge-subCategory.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'KnowledgeCategory', schema: KnowledgeCategorySchema },
      { name: 'KnowledgeSubCategory', schema: KnowledgeSubCategorySchema },
    ]),
  ],
  controllers: [KnowledgeCategoryController],
  providers: [KnowledgeCategoryService],
  exports: [KnowledgeCategoryService],
})
export class KnowledgeCategoryModule {}
