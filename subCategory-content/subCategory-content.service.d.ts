import { CreateSubCategoryContentDto } from './dto/create-subCategory-content.dto';
import { UpdateSubCategoryContentDto } from './dto/update-subCategory-content.dto';
import { SubCategoryContent } from './schemas/subCategory-content.schema';
import { Model } from 'mongoose';
export declare class SubCategoryContentService {
    private readonly subCategoryContentModel;
    constructor(subCategoryContentModel: Model<SubCategoryContent>);
    create(createSubCategoryContentDto: CreateSubCategoryContentDto): Promise<string>;
    findAll(): string;
    findOne(id: number): string;
    update(id: string, updateSubCategoryContentDto: UpdateSubCategoryContentDto): Promise<string>;
    remove(id: number): string;
}
