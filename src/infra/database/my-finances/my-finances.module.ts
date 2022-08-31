import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "./entities/users.entity";


@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  exports: [TypeOrmModule]
})
export class MyFinanceModule {}