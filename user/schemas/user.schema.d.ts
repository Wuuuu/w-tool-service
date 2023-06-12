import * as mongoose from 'mongoose';
export type UserDocument = mongoose.HydratedDocument<User>;
export declare class User {
    id: string;
    username: string;
    nickname: string;
    password: string;
    avatar: string;
    email: string;
    openid: string;
    access: string;
    constructor(partial: Partial<User>);
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, mongoose.Document<unknown, any, User> & Omit<User & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, mongoose.Document<unknown, {}, mongoose.FlatRecord<User>> & Omit<mongoose.FlatRecord<User> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
