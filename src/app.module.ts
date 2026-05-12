import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExampleController } from './controllers/example.controller';
import { ExampleService } from './services/example.service';
import { ExampleModel } from './models/example.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [ExampleModel],
      synchronize: true,
    }),
  ],
  controllers: [ExampleController],
  providers: [ExampleService],
})
export class AppModule {}