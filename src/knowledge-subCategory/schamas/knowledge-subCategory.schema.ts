import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { KnowledgeCategory } from 'src/knowledge-category/schemas/knowledge-category.schema';
import { SubCategoryContent } from './subCategory-content.schema';

export type KnowledgeSubCategoryDocument =
  mongoose.HydratedDocument<KnowledgeSubCategory>;

@Schema({
  timestamps: { createdAt: 'createdTime', updatedAt: 'updatedTime' },
  collection: 'knowledge_subCategory',
})
export class KnowledgeSubCategory {
  @Prop({ type: 'ObjectId' })
  _id: string;

  @Prop({ maxlength: 30 })
  subCategoryName: string;

  @Prop({ type: 'ObjectId', ref: 'KnowledgeCategory' })
  categoryId: KnowledgeCategory['_id'];

  // 存储 Markdown 文本
  @Prop()
  list: SubCategoryContent[];
}

export const KnowledgeSubCategorySchema =
  SchemaFactory.createForClass(KnowledgeSubCategory);
