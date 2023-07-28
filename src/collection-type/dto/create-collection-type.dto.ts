import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCollectionTypeDto {
  @ApiProperty({ description: '请输入集合类型名字' })
  @IsNotEmpty({ message: '请输入类型名字' })
  label: string;

  @ApiProperty({ description: '请输入集合类型的值' })
  @IsNotEmpty({ message: '请输入类型值' })
  value: string;
}
