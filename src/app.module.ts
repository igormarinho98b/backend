import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MyFinanceModule } from './infra/database/my-finance/my-finance.module';
import { DatabaseModule } from './infra/database.module';
import { usersProviders } from './infra/database/my-finance/users.provider';
import { UsersService } from './infra/database/my-finance/users.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';




@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    MyFinanceModule,
  ],
  controllers: [AppController],
  providers: [AppService,...usersProviders,UsersService],
})
export class AppModule {}
