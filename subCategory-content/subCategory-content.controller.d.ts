import { SubCategoryContentService } from './subCategory-content.service';
import { CreateSubCategoryContentDto } from './dto/create-subCategory-content.dto';
import { UpdateSubCategoryContentDto } from './dto/update-subCategory-content.dto';
export declare class SubCategoryContentController {
    private readonly subCategoryContentService;
    constructor(subCategoryContentService: SubCategoryContentService);
    create(createSubCategoryContentDto: CreateSubCategoryContentDto): Promise<string>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSubCategoryContentDto: UpdateSubCategoryContentDto): Promise<string>;
    remove(id: string): string;
}
