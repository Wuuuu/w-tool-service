import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: { createdAt: 'createdTime', updatedAt: 'updatedTime' },
  collection: 'collection_type',
})
export class CollectionType extends Document {
  @Prop()
  label: string;

  @Prop()
  value: string;
}

export const CollectionTypeSchema =
  SchemaFactory.createForClass(CollectionType);
