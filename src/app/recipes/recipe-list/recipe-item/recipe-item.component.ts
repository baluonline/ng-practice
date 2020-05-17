import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.services';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
 
  constructor(private recipeServices: RecipeService) { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeServices.recipeSelected.emit(this.recipe);
  }

}