import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { KnowledgeSubCategory } from '../../knowledge-subCategory/schemas/knowledge-subCategory.schema';

export type KnowledgeCategoryDocument =
  mongoose.HydratedDocument<KnowledgeCategory>;

@Schema({
  timestamps: { createdAt: 'createdTime', updatedAt: 'updatedTime' },
  collection: 'knowledge_category',
})
export class KnowledgeCategory extends Document {
  @Prop({ type: 'ObjectId' })
  _id: string;

  @Prop({ maxlength: 50 })
  collectionName: string;

  @Prop()
  collectionType: string;

  @Prop()
  coverUrl: string;

  @Prop({ Type: String })
  summary: string;

  @Prop()
  desc: string;

  @Prop()
  likeCount: number;

  // @Prop({ type: [Object], ref: 'KnowledgeSubCategory' })
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'KnowledgeSubCategory' }])
  subCategories: KnowledgeSubCategory[];
}

export const KnowledgeCategorySchema =
  SchemaFactory.createForClass(KnowledgeCategory);
