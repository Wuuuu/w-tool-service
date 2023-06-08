import { PartialType } from '@nestjs/swagger';
import { CreateSubCategoryContentDto } from './create-subCategory-content.dto';

export class UpdateSubCategoryContentDto extends PartialType(
  CreateSubCategoryContentDto,
) {}
