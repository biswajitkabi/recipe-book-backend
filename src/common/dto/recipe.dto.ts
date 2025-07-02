import { ApiProperty } from '@nestjs/swagger';

export class RecipeDto {
  @ApiProperty({ example: 123, description: 'ID from the external API' })
  recipeId: number;

  @ApiProperty({ example: 'Recipe 123', description: 'Title of the recipe' })
  title: string;

  @ApiProperty({
    type: [String],
    example: ['Use olive oil', 'Cook on low flame'],
    description: 'Tips for preparing the recipe',
  })
  tips: string[];

  @ApiProperty({ example: '2025-07-02T18:30:00.000Z', description: 'Creation date' })
  createdAt: Date;
}
