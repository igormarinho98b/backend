import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyFinanceModule } from './infra/database/my-finance/my-finance.module';
import { typeOrmConfig } from './infra/database/typeorm/typeorm.config';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    MyFinanceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
