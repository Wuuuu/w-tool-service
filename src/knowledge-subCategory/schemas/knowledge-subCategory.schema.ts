import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { KnowledgeCategory } from 'src/knowledge-category/schemas/knowledge-category.schema';
import { SubCategoryContent } from 'src/subCategory-content/schemas/subCategory-content.schema';

export type KnowledgeSubCategoryDocument =
  mongoose.HydratedDocument<KnowledgeSubCategory>;

@Schema({
  timestamps: { createdAt: 'createdTime', updatedAt: 'updatedTime' },
  versionKey: false,
  collection: 'knowledge_subCategory',
})
export class KnowledgeSubCategory {
  @Prop({ type: 'ObjectId', auto: true })
  subCategoryId: mongoose.Types.ObjectId;

  @Prop({ maxlength: 30 })
  subCategoryName: string;

  @Prop({ type: 'ObjectId', ref: 'SubCategoryContent' })
  categoryId: KnowledgeCategory['_id'];

  @Prop({ type: 'String', ref: 'KnowledgeCategory' })
  data: string;

  @Prop({ ref: 'SubCategoryContent' })
  sTitle: string;

  @Prop([{ type: mongoose.Types.ObjectId, ref: 'SubCategoryContent' }])
  list: SubCategoryContent[];
}

export const KnowledgeSubCategorySchema =
  SchemaFactory.createForClass(KnowledgeSubCategory);
