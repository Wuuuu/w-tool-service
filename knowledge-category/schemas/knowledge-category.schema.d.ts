import mongoose, { Document } from 'mongoose';
import { KnowledgeSubCategory } from '../../knowledge-subCategory/schemas/knowledge-subCategory.schema';
export type KnowledgeCategoryDocument = mongoose.HydratedDocument<KnowledgeCategory>;
export declare class KnowledgeCategory extends Document {
    _id: string;
    collectionName: string;
    coverUrl: string;
    summary: string;
    desc: string;
    likeCount: number;
    subCategories: KnowledgeSubCategory[];
}
export declare const KnowledgeCategorySchema: mongoose.Schema<KnowledgeCategory, mongoose.Model<KnowledgeCategory, any, any, any, mongoose.Document<unknown, any, KnowledgeCategory> & Omit<KnowledgeCategory & Required<{
    _id: string;
}>, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, KnowledgeCategory, mongoose.Document<unknown, {}, mongoose.FlatRecord<KnowledgeCategory>> & Omit<mongoose.FlatRecord<KnowledgeCategory> & Required<{
    _id: string;
}>, never>>;
