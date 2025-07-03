import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { RecipesService } from '../recipes/recipes.service';

@Injectable()
export class TasksService {
  constructor(private readonly recipesService: RecipesService) {}

  @Cron('*/30 * * * * *') // runs every 10 seconds
  async handleCron() {
    await this.fetchFromFlavorit();
  }

  async fetchFromFlavorit() {
    return this.recipesService.fetchAndStoreRecipes();
  }
}