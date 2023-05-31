import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class KnowledgeCateGoryInfoDto {
  @ApiProperty({ description: '合集名字' })
  @IsNotEmpty()
  readonly collectionName: string;

  @ApiProperty({ description: '封面图' })
  readonly coverUrl: string;

  @ApiProperty({ description: '合集概要' })
  readonly summary: string;
}
