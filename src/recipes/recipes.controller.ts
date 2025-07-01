import { Controller, Get, Query } from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get('fetch')
  async fetchRecipe(@Query('id') recipeId: number) {
    return this.recipesService.fetchRecipeTips(recipeId);
  }

  @Get()
  async getAll() {
    return this.recipesService.getAllRecipes();
  }
}
