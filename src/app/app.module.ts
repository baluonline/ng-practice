import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ReceipeListComponent } from './recipes/receipe-list/receipe-list.component';
import { ReceipeDetailComponent } from './recipes/receipe-detail/receipe-detail.component';
import { RecepeItemComponent } from './recipes/receipe-list/recepe-item/recepe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { Shopping0editComponent } from './shopping-list/shopping0edit/shopping0edit.component';
import { DirectivesComponent } from './directives/directives.component';
import { BasicHighlightDirective } from './directives/basic-highlight/basic-highlight.directive';
import { BetterHighlighter } from './directives/better-hightlight/better-highlight.directive';
import { UnlessDirective } from './directives/app-unless.directive';
import { DropDownDirective } from './shared/dropdown.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ReceipeListComponent,
    ReceipeDetailComponent,
    RecepeItemComponent,
    ShoppingListComponent,
    Shopping0editComponent,
    DirectivesComponent,
    BasicHighlightDirective,
    BetterHighlighter,
    UnlessDirective,
    DropDownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
