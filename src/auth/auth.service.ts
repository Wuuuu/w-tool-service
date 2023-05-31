import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findUser(username);
    const passwordMatched = await bcrypt.compare(pass, user.password);
    if (user && passwordMatched) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(username, pass) {
    const user = await this.userService.findUser(username);
    const passwordMatched = await bcrypt.compare(pass, user.password);
    if (!passwordMatched) {
      throw new BadRequestException('密码错误！');
    }
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async getUser(username) {
    return await this.userService.findUser(username);
  }
}
