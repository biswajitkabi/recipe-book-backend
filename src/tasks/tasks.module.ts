import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './tasks.service';
import { RecipesModule } from '../recipes/recipes.module';
import { TasksController } from './tasks.controller';

@Module({
  imports: [ScheduleModule.forRoot(), RecipesModule],
  providers: [TasksService],
  controllers: [TasksController],
})
export class TasksModule {}
