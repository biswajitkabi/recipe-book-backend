import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  recipeId: number;

  @Column()
  title: string;

  @Column('text', { array: true })
  tips: string[];

  @CreateDateColumn()
  createdAt: Date;
}