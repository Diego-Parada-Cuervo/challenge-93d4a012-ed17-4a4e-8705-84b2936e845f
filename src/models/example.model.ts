import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ExampleModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}