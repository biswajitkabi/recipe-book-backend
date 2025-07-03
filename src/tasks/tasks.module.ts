import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from '../recipes/recipe.entity';
import { RecipesModule } from '../recipes/recipes.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Recipe]),
    RecipesModule, 
  ],
  providers: [TasksService],
  controllers: [TasksController],
})
export class TasksModule {}
