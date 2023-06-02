import { PartialType } from '@nestjs/swagger';
import { CreateKnowledgeSubCategoryDto } from './create-subCategory.dto';

export class UpdateKnowledgeSubCategoryDto extends PartialType(
  CreateKnowledgeSubCategoryDto,
) {}
