import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthConfig } from './auth.config';
import { AuthController } from './auth.controller';
import { MyFinanceHttpModule } from '../infra/database/my-finances/my-finances-http.module';
import { UsersService } from '../infra/database/my-finances/services/users.service';

@Module({
  imports: [MyFinanceHttpModule],
  providers: [AuthService, AuthConfig, UsersService],
  controllers: [AuthController],
})
export class AuthModule {}
