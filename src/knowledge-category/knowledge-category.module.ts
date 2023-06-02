import { Module } from '@nestjs/common';
import { KnowledgeCategoryService } from './knowledge-category.service';
import { KnowledgeCategoryController } from './knowledge-category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { KnowledgeCategorySchema } from './schemas/knowledge-category.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'KnowledgeCategory', schema: KnowledgeCategorySchema },
    ]),
  ],
  controllers: [KnowledgeCategoryController],
  providers: [KnowledgeCategoryService],
  exports: [KnowledgeCategoryService],
})
export class KnowledgeCategoryModule {}
