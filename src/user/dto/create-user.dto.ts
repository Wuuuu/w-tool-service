import { IsNotEmpty } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty({ message: '请输入用户名' })
  readonly username: string;

  readonly nickname: string;

  @IsNotEmpty({ message: '请输入密码' })
  readonly password: string;

  readonly role: string;
}
