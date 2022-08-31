import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataBaseConfig } from './infra/database.config';
import { MyFinanceModule } from './infra/database/my-finance/my-finance.module';


@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dataBaseConfig),
    MyFinanceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
