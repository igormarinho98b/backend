import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {config} from 'dotenv'

config()

export const dataBaseConfig: TypeOrmModuleOptions = {
  type: 'mariadb',
  host:process.env.MYSQL_HOST,
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB_NAME,
  entities: [
      __dirname + '/../**/*.entity{.ts,.js}',
  ],
  synchronize: true,
  logging: true
}

    
     

  
  
