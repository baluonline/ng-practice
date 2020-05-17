import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.services';


@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    constructor(private shoppingListServices: ShoppingListService){}
    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is simply a test',
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Fries', 2)
            ]
        ),
        new Recipe('Another Test Recipe',
            'This is simply a test',
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('Buns', 1),
                new Ingredient('Meat', 2)
            ]

        )
    ];

    getRecipes() {
        return this.recipes.slice();

    }

    addIngredientsToShoppingList(Ingredients: Ingredient[]){
        this.shoppingListServices.addIngredients(Ingredients);
    }
}