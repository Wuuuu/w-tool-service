import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type CatDocument = mongoose.HydratedDocument<Cat>;

@Schema()
export class Cat {
  @Prop({
    type: mongoose.Schema.Types.UUID,
  })
  catId: string;

  @Prop({ maxlength: 5 })
  name: string;

  @Prop()
  age: number;

  @Prop({ maxlength: 20 })
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
