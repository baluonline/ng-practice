import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.mode';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes:Recipe[] = [
    new Recipe("A Cake recipe","This is simply test recipe","https://i.pinimg.com/564x/cd/bb/54/cdbb54224e75f0dd56aba2d8ea054975.jpg"),
    new Recipe("A Cheese cake recipe","This is simply test recipe","https://i.pinimg.com/564x/cd/bb/54/cdbb54224e75f0dd56aba2d8ea054975.jpg"),
    new Recipe("A Pan cake recipe","This is simply test recipe","https://i.pinimg.com/564x/cd/bb/54/cdbb54224e75f0dd56aba2d8ea054975.jpg")
  ];
  constructor(

  ) { }

  ngOnInit(): void {
  }
  onRecipeSelected(receipe: Recipe){
    this.recipeWasSelected.emit(receipe);
  }

}
