import { Controller, Get, Query } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { RecipeDto } from '../common/dto/recipe.dto';

@ApiTags('Recipes')
@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  @ApiOkResponse({ type: [RecipeDto], description: 'List of all saved recipes' })
  async getAll() {
    return this.recipesService.getAllRecipes();
  }
}
