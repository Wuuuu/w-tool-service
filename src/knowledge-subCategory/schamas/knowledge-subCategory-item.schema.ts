import { Prop, Schema } from '@nestjs/mongoose';

@Schema({
  timestamps: { createdAt: 'createdTime', updatedAt: 'updatedTime' },
})
export class KnowledgePointItem {
  @Prop({ maxlength: 30 })
  title: string;

  @Prop({ type: String })
  contentHtml: string;

  @Prop()
  isUseful: boolean;

  @Prop()
  hasMeet: boolean;
}
