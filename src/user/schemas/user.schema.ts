import { Exclude } from 'class-transformer';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';

export type UserDocument = mongoose.HydratedDocument<User>;

@Schema({
  timestamps: { createdAt: 'created_time', updatedAt: 'updated_time' },
  collection: 'User',
}) // timestamps: true Mongoose会自动生成createdAt、updatedAt两个字段, 并将两个字段自定义名字
export class User {
  @Prop()
  id: string;

  @Prop({ maxlength: 100, nullable: true })
  username: string;

  @Prop({ maxlength: 100 })
  nickname: string;

  @Exclude()
  @Prop()
  password: string;

  @Prop()
  avatarUrl: string;

  @Prop({ nullable: true })
  email: string;

  @Prop()
  openid: string;

  @Prop({ enum: ['root', 'admin', 'guest'], default: 'guest' })
  access: string;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}

export const UserSchema = SchemaFactory.createForClass(User);

// 在调用create时，给password加密
UserSchema.pre('save', function (next) {
  if (this.password) this.password = bcrypt.hashSync(this.password, 10);
  next();
});
