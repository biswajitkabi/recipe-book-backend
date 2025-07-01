import { Controller, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post('run-now')
  runCronManually() {
    return this.tasksService.handleCron();
  }
}
