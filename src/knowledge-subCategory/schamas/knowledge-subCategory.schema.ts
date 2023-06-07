import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { KnowledgeCategory } from 'src/knowledge-category/schemas/knowledge-category.schema';
import { SubCategoryContent } from 'src/subCategory-content/schemas/subCategory-content.schema';

export type KnowledgeSubCategoryDocument =
  mongoose.HydratedDocument<KnowledgeSubCategory>;

@Schema({
  timestamps: { createdAt: 'createdTime', updatedAt: 'updatedTime' },
  versionKey: false,
  // _id: false,
  collection: 'knowledge_subCategory',
})
export class KnowledgeSubCategory {
  @Prop({ type: 'ObjectId', auto: true })
  subCategoryId: mongoose.Types.ObjectId;

  @Prop({ maxlength: 30 })
  subCategoryName: string;

  @Prop({ type: 'ObjectId', ref: 'KnowledgeCategory' })
  categoryId: KnowledgeCategory['_id'];

  // 存储 Markdown 文本
  @Prop()
  list: SubCategoryContent[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'KnowledgeCategory' })
  parentId: mongoose.Types.ObjectId;
}

export const KnowledgeSubCategorySchema =
  SchemaFactory.createForClass(KnowledgeSubCategory);
