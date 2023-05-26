import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthGuard } from './auth.guard';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from '../user/user.module';
import { User, UserSchema } from '../user/schemas/user.schema';

const jwtModule = JwtModule.registerAsync({
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    // global: true,
    secret: configService.get('JWT_SECRET'),
    signOptions: { expiresIn: '1h' },
  }),
});
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    UserModule,
    jwtModule,
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
    LocalStrategy,
    JwtStrategy,
  ],
  exports: [AuthService],
})
export class AuthModule {}
