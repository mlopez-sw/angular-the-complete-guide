import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  //   recipeSelected = new EventEmitter<Recipe>();
  recipeSelected = new Subject<Recipe>();
  recipeChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {
    // this.recipes = new Array(
    //   new Recipe(
    //     'Nombre 1',
    //     'Descripcion 1',
    //     'https://source.unsplash.com/featured/?cooking,recipe',
    //     [new Ingredient('meat', 2), new Ingredient('fries', 5)]
    //   ),
    //   new Recipe(
    //     'Nombre 2',
    //     'Descripcion 2',
    //     'https://source.unsplash.com/featured/?cooking',
    //     [new Ingredient('meat', 5), new Ingredient('potatoes', 1)]
    //   ),
    //   new Recipe(
    //     'Nombre 3',
    //     'Descripcion 3',
    //     'https://source.unsplash.com/featured/?recipe',
    //     [new Ingredient('milk', 2), new Ingredient('eggs', 6)]
    //   )
    // );
  }

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  addIngridientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index].description = recipe.description;
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
  deleteIngredient(index: number) {}
}
