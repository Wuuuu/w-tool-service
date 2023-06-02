import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateKnowledgeSubCategoryDto {
  @ApiProperty({ description: '子合集名称' })
  @IsNotEmpty({ message: '请传入子合集名称' })
  subCategoryName: string;

  @ApiProperty({ description: '当前合集Id' })
  @IsNotEmpty({ message: '请传入合集Id' })
  categoryId: string;
}
