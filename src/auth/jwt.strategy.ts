import { ExtractJwt, Strategy } from 'passport-jwt';
import { Model } from 'mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/user/schemas/user.schema';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate(user: User) {
    const existUser = await this.authService.getUser(user.id);
    if (!existUser) {
      throw new UnauthorizedException('token不正确');
    }
    return existUser;
  }
}
