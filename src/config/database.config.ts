import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: process.env.DATABASE_TYPE as any,
  database: process.env.DATABASE_NAME,
  entities: [__dirname + '/../**/*.model{.ts,.js}'],
  synchronize: true,
};