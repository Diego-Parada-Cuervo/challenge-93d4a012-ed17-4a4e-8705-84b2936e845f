import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExampleModel } from '../models/example.model';

@Injectable()
export class ExampleService {
  constructor(
    @InjectRepository(ExampleModel)
    private readonly exampleRepository: Repository<ExampleModel>,
  ) {}

  async findAll(): Promise<ExampleModel[]> {
    return this.exampleRepository.find();
  }

  async findOne(id: number): Promise<ExampleModel> {
    return this.exampleRepository.findOne(id);
  }

  async create(name: string): Promise<ExampleModel> {
    const newExample = this.exampleRepository.create({ name });
    return this.exampleRepository.save(newExample);
  }

  async update(id: number, name: string): Promise<ExampleModel> {
    const example = await this.exampleRepository.findOne(id);
    if (example) {
      example.name = name;
      return this.exampleRepository.save(example);
    }
    return null;
  }

  async delete(id: number): Promise<void> {
    await this.exampleRepository.delete(id);
  }
}