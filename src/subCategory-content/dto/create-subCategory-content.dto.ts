import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateSubCategoryContentDto {
  @ApiProperty({ description: '问答项标题' })
  @IsNotEmpty({ message: '请传入问答项标题' })
  title: string;

  @ApiProperty({ description: '子类别Id' })
  @IsNotEmpty({ message: '请传入子类别Id' })
  subCategoryId: string;

  @ApiProperty({ description: '问答项内容' })
  @IsNotEmpty({ message: '请传入问答项内容' })
  content: string;
}
