import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { RecipesService } from '../recipes/recipes.service';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(private recipesService: RecipesService) {}

  // Run every 6 hours
 @Cron(CronExpression.EVERY_6_HOURS)
  async handleCron() {
    const randomIds = [4704, 3020, 1023]; //  Example recipe IDs
    this.logger.log('Running scheduled fetch from Tasty API');

    for (const id of randomIds) {
      await this.recipesService.fetchRecipeTips(id); 
    }

    this.logger.log('Fetched recipes successfully');
  }
}
