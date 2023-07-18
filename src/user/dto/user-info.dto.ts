import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UserInfoDto {
  @ApiProperty({ description: '用户名' })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ description: '用户昵称' })
  readonly nickname: string;

  @ApiProperty({ description: '用户头像' })
  readonly avatarUrl: string;

  @ApiProperty({ description: '用户角色' })
  readonly access: string;
}
