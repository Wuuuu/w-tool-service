import { Module } from '@nestjs/common';
import { SubCategoryContentService } from './subCategory-content.service';
import { SubCategoryContentController } from './subCategory-content.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SubCategoryContentSchema } from './schemas/subCategory-content.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'SubCategoryContent',
        schema: SubCategoryContentSchema,
      },
    ]),
  ],
  controllers: [SubCategoryContentController],
  providers: [SubCategoryContentService],
  exports: [SubCategoryContentService],
})
export class SubCategoryContentModule {}
