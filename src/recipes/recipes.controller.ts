import { Controller, Get } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Recipes')
@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  getAllRecipes() {
    return this.recipesService.findAll();
  }
}