import { Module } from '@nestjs/common';
import { SubCategoryContentService } from './sub-category-content.service';
import { SubCategoryContentController } from './sub-category-content.controller';

@Module({
  controllers: [SubCategoryContentController],
  providers: [SubCategoryContentService]
})
export class SubCategoryContentModule {}
