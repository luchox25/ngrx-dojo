import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [MoviesContainerComponent, SearchMoviesComponent, ListMoviesComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
  ]
})
export class MoviesModule { }
