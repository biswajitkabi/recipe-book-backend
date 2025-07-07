import { Controller, Get, UseGuards } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';

@ApiTags('Recipes')
@ApiBearerAuth() 
@Controller('courses')
@UseGuards(AuthGuard)
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  @ApiOperation({ summary: 'Get your course details (JWT Auth required)' }) 
  getAllRecipes() {
    return this.recipesService.findAll();
  }
}
