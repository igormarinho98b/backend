import { Module } from '@nestjs/common';
import { MyFinanceController } from './my-finance.controller';
import { MyFinanceModule } from './my-finance.module';
import { UsersService } from './services/users.service';

@Module({
  imports: [MyFinanceModule],
  providers: [UsersService],
  controllers: [MyFinanceController],
  exports: [MyFinanceModule]
  
})
export class MyFinanceHttpModule {}
