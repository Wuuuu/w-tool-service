import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { marked } from 'marked';
import mongoose from 'mongoose';

export type SubCategoryContentDocument =
  mongoose.HydratedDocument<SubCategoryContent>;

@Schema({
  timestamps: { createdAt: 'createdTime', updatedAt: 'updatedTime' },
  collection: 'subCategory_content',
  versionKey: false,
})
export class SubCategoryContent {
  @Prop({ maxlength: 50 })
  title: string;

  @Prop()
  likeCount: number;

  @Prop({ type: 'ObjectId', ref: 'KnowledgeSubCategory' })
  // subCategoryId: KnowledgeSubCategory['subCategoryId'];
  subCategoryId: string;

  // 存储 Markdown 文本
  @Prop()
  content: string;

  // 预处理 Markdown 文本，转换为 HTML 格式
  get html() {
    return marked(this.content);
  }
}

export const SubCategoryContentSchema =
  SchemaFactory.createForClass(SubCategoryContent);
