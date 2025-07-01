import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from './recipe.entity';
import axios from 'axios';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private recipeRepo: Repository<Recipe>,
  ) {}

  async fetchRecipeTips(recipeId: number) {
    const res = await axios.get('https://tasty-co1.p.rapidapi.com/tips/list', {
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': process.env.RAPIDAPI_HOST,
      },
      params: { recipeId },
    });

    const tips = res.data?.tips?.map((t) => t.content) || [];

    const recipe = this.recipeRepo.create({
      recipeId,
      title: `Recipe ${recipeId}`,
      tips,
    });

    return this.recipeRepo.save(recipe);
  }

  async getAllRecipes(): Promise<Recipe[]> {
    return this.recipeRepo.find({ order: { createdAt: 'DESC' } });
  }
}