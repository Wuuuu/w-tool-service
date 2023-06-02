import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { KnowledgeSubCategory } from '../../knowledge-subCategory/schamas/knowledge-subCategory.schema';

export type KnowledgeCategoryDocument =
  mongoose.HydratedDocument<KnowledgeCategory>;

@Schema({
  timestamps: { createdAt: 'createdTime', updatedAt: 'updatedTime' },
  collection: 'knowledge_category',
})
export class KnowledgeCategory extends Document {
  // @Prop({ type: String, unique: true })
  // id: string;

  @Prop({ maxlength: 50 })
  collectionName: string;

  @Prop()
  coverUrl: string;

  @Prop({ Type: String })
  summary: string;

  @Prop()
  desc: string;

  @Prop()
  likeCount: number;

  @Prop({ type: [Object], ref: 'KnowledgeSubCategory' })
  subCategories: KnowledgeSubCategory[];
}

export const KnowledgeCategorySchema =
  SchemaFactory.createForClass(KnowledgeCategory);
