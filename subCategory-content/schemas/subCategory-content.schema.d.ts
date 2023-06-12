import mongoose from 'mongoose';
export type SubCategoryContentDocument = mongoose.HydratedDocument<SubCategoryContent>;
export declare class SubCategoryContent {
    title: string;
    likeCount: number;
    subCategoryId: string;
    content: string;
    get html(): string;
}
export declare const SubCategoryContentSchema: mongoose.Schema<SubCategoryContent, mongoose.Model<SubCategoryContent, any, any, any, mongoose.Document<unknown, any, SubCategoryContent> & Omit<SubCategoryContent & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, SubCategoryContent, mongoose.Document<unknown, {}, mongoose.FlatRecord<SubCategoryContent>> & Omit<mongoose.FlatRecord<SubCategoryContent> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
