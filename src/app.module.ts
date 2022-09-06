import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataBaseConfig } from './infra/database/database.config';
import { CategoriesModule } from './categories/categories.module';
import { IncomeHistoryModule } from './income-history/income-history.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dataBaseConfig),
    CategoriesModule,
    IncomeHistoryModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
