import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
require ('dotenv').config()

@Module({
  providers: [AuthService, AuthResolver, LocalStrategy, JwtStrategy],
  imports: [UserModule, JwtModule.register({
    signOptions: {expiresIn: '360d'},
    secret: process.env.JWT_SECRET
  })]
})
export class AuthModule {}
