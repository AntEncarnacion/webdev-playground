import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Rice',
      'Delicious Rice!',
      'https://upload.wikimedia.org/wikipedia/commons/5/5e/Jeera-rice.JPG',
      [new Ingredient('Rice', 1), new Ingredient('Water', 20)]
    ),
    new Recipe(
      'Rice2',
      'Delicious Rice2!',
      'https://upload.wikimedia.org/wikipedia/commons/5/5e/Jeera-rice.JPG',
      [new Ingredient('Rice', 1), new Ingredient('Water', 20)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
