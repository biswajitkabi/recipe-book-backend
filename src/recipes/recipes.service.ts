import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from './recipe.entity';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipeRepository: Repository<Recipe>,
  ) {}

  async fetchAndStoreRecipes() {
    try {
      const response = await axios.get('https://collection-for-coursera-courses.p.rapidapi.com/rapidapi/course/get_course.php?page_no=1&course_institution=Yale%20University', {
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': process.env.RAPIDAPI_HOST,
        },
      });

      const recipes = response.data.reviews; // your actual recipe array

      const recipeEntities = recipes.map((item) => {
        const recipe = new Recipe();
        recipe.course_id = Number(item.course_id);
        recipe.course_name = item.course_name;
        recipe.course_institution = item.course_institution;
        return recipe;
      });

      await this.recipeRepository.save(recipeEntities);
      Logger.log(`Stored ${recipeEntities.length} courses`);
    } catch (error) {
      Logger.error('Failed to fetch courses', error);
    }
  }

  async findAll(): Promise<Recipe[]> {
    return this.recipeRepository.find();
  }
}