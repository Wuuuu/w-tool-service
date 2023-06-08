import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { SubCategoryContent } from 'src/subCategory-content/schemas/subCategory-content.schema';

export class CreateKnowledgeSubCategoryDto {
  @ApiProperty({ description: '子合集名称' })
  @IsNotEmpty({ message: '请传入子合集名称' })
  subCategoryName: string;

  @ApiProperty({ description: '当前合集Id' })
  @IsNotEmpty({ message: '请传入合集Id' })
  categoryId: string;

  @ApiProperty({ description: '子类别问答列表' })
  list: SubCategoryContent[];
}
