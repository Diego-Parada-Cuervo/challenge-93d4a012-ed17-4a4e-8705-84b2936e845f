import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ExampleService } from '../services/example.service';
import { ExampleModel } from '../models/example.model';

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get()
  async findAll(): Promise<ExampleModel[]> {
    return this.exampleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ExampleModel> {
    return this.exampleService.findOne(id);
  }

  @Post()
  async create(@Body('name') name: string): Promise<ExampleModel> {
    return this.exampleService.create(name);
  }

  @Post(':id')
  async update(
    @Param('id') id: number,
    @Body('name') name: string,
  ): Promise<ExampleModel> {
    return this.exampleService.update(id, name);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.exampleService.delete(id);
  }
}