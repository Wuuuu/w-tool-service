import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateSubCategoryContentDto {
  @ApiProperty({ description: '内容标题' })
  @IsNotEmpty({ message: '请传入内容标题' })
  title: string;

  @ApiProperty({ description: '内容' })
  @IsNotEmpty({ message: '请传入内容' })
  content: string;

  @ApiProperty({ description: '子类别Id' })
  @IsNotEmpty({ message: '请传入子类别Id' })
  subCategoryId: string;

  likeCount: number;
}
