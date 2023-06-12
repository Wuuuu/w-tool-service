/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateKnowledgeCategoryDto } from './dto/create-knowledge-category.dto';
import { UpdateKnowledgeCategoryDto } from './dto/update-knowledge-category.dto';
import { KnowledgeCategory, KnowledgeCategoryDocument } from './schemas/knowledge-category.schema';
import { Model } from 'mongoose';
import { KnowledgeSubCategoryDocument } from 'src/knowledge-subCategory/schemas/knowledge-subCategory.schema';
export declare class KnowledgeCategoryService {
    private readonly knowledgeCategoryModel;
    private knowledgeSubCategoryModel;
    constructor(knowledgeCategoryModel: Model<KnowledgeCategoryDocument>, knowledgeSubCategoryModel: Model<KnowledgeSubCategoryDocument>);
    create(createKnowledgeCategoryDto: CreateKnowledgeCategoryDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, KnowledgeCategory> & Omit<KnowledgeCategory & Required<{
        _id: string;
    }>, never>> & Omit<import("mongoose").Document<unknown, {}, KnowledgeCategory> & Omit<KnowledgeCategory & Required<{
        _id: string;
    }>, never> & Required<{
        _id: string;
    }>, never>>;
    findAll(page: number, limit: number): Promise<{
        data: Omit<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, KnowledgeCategory> & Omit<KnowledgeCategory & Required<{
            _id: string;
        }>, never>> & Omit<import("mongoose").Document<unknown, {}, KnowledgeCategory> & Omit<KnowledgeCategory & Required<{
            _id: string;
        }>, never> & Required<{
            _id: string;
        }>, never>, never>[];
        current: number;
        pageSize: number;
        total: number;
    }>;
    findOne(id: number): string;
    update(id: string, updateKnowledgeCategoryDto: UpdateKnowledgeCategoryDto): Promise<string>;
    remove(id: string): Promise<string>;
}
