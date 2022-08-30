import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthConfig } from './auth.config';
import { AuthController } from './auth.controller';
import { UsersService } from '../infra/database/my-finance/users.service';
import { usersProviders } from '../infra/database/my-finance/users.provider';

@Module({
  providers: [AuthService, AuthConfig],
  controllers: [AuthController],
})
export class AuthModule {}
