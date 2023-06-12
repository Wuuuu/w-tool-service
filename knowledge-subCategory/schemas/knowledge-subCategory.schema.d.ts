import mongoose from 'mongoose';
import { KnowledgeCategory } from 'src/knowledge-category/schemas/knowledge-category.schema';
import { SubCategoryContent } from 'src/subCategory-content/schemas/subCategory-content.schema';
export type KnowledgeSubCategoryDocument = mongoose.HydratedDocument<KnowledgeSubCategory>;
export declare class KnowledgeSubCategory {
    subCategoryId: mongoose.Types.ObjectId;
    subCategoryName: string;
    categoryId: KnowledgeCategory['_id'];
    list: SubCategoryContent[];
}
export declare const KnowledgeSubCategorySchema: mongoose.Schema<KnowledgeSubCategory, mongoose.Model<KnowledgeSubCategory, any, any, any, mongoose.Document<unknown, any, KnowledgeSubCategory> & Omit<KnowledgeSubCategory & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, KnowledgeSubCategory, mongoose.Document<unknown, {}, mongoose.FlatRecord<KnowledgeSubCategory>> & Omit<mongoose.FlatRecord<KnowledgeSubCategory> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
