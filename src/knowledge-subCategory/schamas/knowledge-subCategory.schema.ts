import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { KnowledgePointItem } from './knowledge-subCategory-item.schema';
import mongoose from 'mongoose';
import { KnowledgeCategory } from 'src/knowledge-category/schemas/knowledge-category.schema';

export type KnowledgeSubCategoryDocument =
  mongoose.HydratedDocument<KnowledgeSubCategory>;

@Schema({
  timestamps: { createdAt: 'createdTime', updatedAt: 'updatedTime' },
  collection: 'knowledge_subCategory',
})
export class KnowledgeSubCategory {
  @Prop({ maxlength: 30 })
  subCategoryName: string;

  @Prop({ type: 'ObjectId', ref: 'KnowledgeCategory' })
  categoryId: KnowledgeCategory['_id'];

  @Prop({ type: [Object] })
  list: KnowledgePointItem[];
}

export const KnowledgeSubCategorySchema =
  SchemaFactory.createForClass(KnowledgeSubCategory);
