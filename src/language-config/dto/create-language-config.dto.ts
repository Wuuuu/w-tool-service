import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateLanguageConfigDto {
  @ApiProperty({ description: '项目名称' })
  @IsNotEmpty({ message: '请输入项目名称' })
  projectName: string;

  @ApiProperty({ description: '项目类型' })
  @IsNotEmpty({ message: '请输入项目类型' })
  projectType: string;

  @ApiProperty({ description: '封面图' })
  @IsNotEmpty({ message: '请上传封面图' })
  coverUrl: string;

  @ApiProperty({ description: '项目描述' })
  description: string;
}
