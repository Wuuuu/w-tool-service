import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class ListItem extends Document {
  @Prop()
  languageField: string;

  @Prop()
  desc: string;

  @Prop()
  coverUrl: string;

  @Prop()
  en: string;
}

export const LanguageConfigListItemSchema =
  SchemaFactory.createForClass(ListItem);
