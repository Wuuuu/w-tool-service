import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: { createdAt: 'createdTime', updatedAt: 'updatedTime' },
  collection: 'language_config',
})
export class LanguageConfig extends Document {
  @Prop({ maxlength: 30 })
  projectName: string;

  @Prop()
  projectType: string;

  @Prop()
  coverUrl: string;

  @Prop({ Type: String })
  summary: string;

  @Prop()
  list: [];
}

export const LanguageConfigSchema =
  SchemaFactory.createForClass(LanguageConfig);
