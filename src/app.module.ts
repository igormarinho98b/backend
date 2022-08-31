import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyFinanceModule } from './infra/database/my-finances/my-finances.module';
import { dataBaseConfig } from './infra/database/database.config';


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
