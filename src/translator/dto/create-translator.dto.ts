import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTranslatorDto {
  @ApiProperty({ description: '翻译文案' })
  @IsNotEmpty({ message: '请输入翻译文案' })
  translatText: string;

  @ApiProperty({ description: '传入翻译原语言' })
  @IsNotEmpty({ message: '请传入翻译原语言' })
  detectedSourceLang: string;

  @ApiProperty({ type: [String], description: '请传入目标语言' })
  @IsNotEmpty({ message: '请传入目标语言' })
  targetLang: string[];
}
