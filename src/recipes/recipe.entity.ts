import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  course_id: number;

  @Column()
  @ApiProperty()
  course_name: string;

  @Column()
  course_institution: string;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: Date;
}