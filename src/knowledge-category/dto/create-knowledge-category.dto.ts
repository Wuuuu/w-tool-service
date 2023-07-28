import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateKnowledgeCategoryDto {
  @ApiProperty({ description: '合集名字' })
  @IsNotEmpty({ message: '请输入合集' })
  collectionName: string;

  @ApiProperty({ description: '合集类型' })
  @IsNotEmpty({ message: '请选择合集类型' })
  collectionType: string;

  @ApiProperty({ description: '封面图' })
  @IsNotEmpty({ message: '请上传封面图' })
  coverUrl: string;

  @ApiProperty({ description: '合集概要' })
  summary: string;
}
