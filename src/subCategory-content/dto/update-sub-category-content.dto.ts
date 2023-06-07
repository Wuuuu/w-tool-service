import { PartialType } from '@nestjs/swagger';
import { CreateSubCategoryContentDto } from './create-sub-category-content.dto';

export class UpdateSubCategoryContentDto extends PartialType(CreateSubCategoryContentDto) {}
