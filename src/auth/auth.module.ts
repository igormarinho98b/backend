import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthConfig } from './auth.config';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  providers: [AuthService, AuthConfig, UserService],
  controllers: [AuthController],
})
export class AuthModule {}
