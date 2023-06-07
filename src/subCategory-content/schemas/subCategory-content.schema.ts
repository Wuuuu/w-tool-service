import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { marked } from 'marked';
import mongoose from 'mongoose';
import { KnowledgeSubCategory } from 'src/knowledge-subCategory/schamas/knowledge-subCategory.schema';

export type SubCategoryContentDocument =
  mongoose.HydratedDocument<SubCategoryContent>;

@Schema({
  timestamps: { createdAt: 'createdTime', updatedAt: 'updatedTime' },
  collection: 'subCategory-content',
})
export class SubCategoryContent {
  @Prop({ maxlength: 50 })
  title: string;

  @Prop()
  likeCount: number;

  // @Prop({ type: 'ObjectId', ref: 'KnowledgeSubCategory' })
  // subCategoryId: KnowledgeSubCategory['_id'];

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

// 在保存或更新文档前，更新指定字段的日期时间
// SubCategoryContentSchema.pre('findByIdAndUpdate', function (next) {
//   const now = new Date();
//   this.updatedTime = now;
//   if (!this.createdTime) {
//     this.createdTime = now;
//   }
//   next();
// });

// 在更新列表字段时，自动添加日期时间信息
// SubCategoryContentSchema.pre('findOneAndUpdate', function () {
//   this.update({}, { $set: { updatedTime: new Date() } });
// });
