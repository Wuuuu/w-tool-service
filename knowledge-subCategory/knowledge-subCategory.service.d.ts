import { CreateKnowledgeSubCategoryDto } from './dto/create-subCategory.dto';
import { UpdateKnowledgeSubCategoryDto } from './dto/update-subCategory.dto';
import mongoose, { Model } from 'mongoose';
import { KnowledgeSubCategoryDocument } from './schemas/knowledge-subCategory.schema';
import { KnowledgeCategoryDocument } from '../knowledge-category/schemas/knowledge-category.schema';
export declare class KnowledgeSubCategoryService {
    private readonly knowledgeSubCategoryModel;
    private readonly knowledgeCategory;
    constructor(knowledgeSubCategoryModel: Model<KnowledgeSubCategoryDocument>, knowledgeCategory: Model<KnowledgeCategoryDocument>);
    create(createKnowledgeSubCategoryDto: CreateKnowledgeSubCategoryDto): Promise<string>;
    findAll(id: string): Promise<any[]>;
    findOne(): string;
    update(id: string, updateKnowledgeSubCategoryDto: UpdateKnowledgeSubCategoryDto): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, import("./schemas/knowledge-subCategory.schema").KnowledgeSubCategory> & Omit<import("./schemas/knowledge-subCategory.schema").KnowledgeSubCategory & {
        _id: mongoose.Types.ObjectId;
    }, never>> & Omit<mongoose.Document<unknown, {}, import("./schemas/knowledge-subCategory.schema").KnowledgeSubCategory> & Omit<import("./schemas/knowledge-subCategory.schema").KnowledgeSubCategory & {
        _id: mongoose.Types.ObjectId;
    }, never> & Required<{
        _id: mongoose.Types.ObjectId;
    }>, never>>;
    remove(id: string): Promise<string>;
    removeItem(_id: string): Promise<string>;
}
