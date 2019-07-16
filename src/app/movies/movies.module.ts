import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MoviesContainerComponent } from "./movies-container/movies-container.component";
import { SearchMoviesComponent } from "./search-movies/search-movies.component";
import { ListMoviesComponent } from "./list-movies/list-movies.component";

@NgModule({
  declarations: [
    MoviesContainerComponent,
    SearchMoviesComponent,
    ListMoviesComponent
  ],
  imports: [CommonModule],
  exports: [
    MoviesContainerComponent,
    SearchMoviesComponent,
    ListMoviesComponent
  ]
})
export class MoviesModule {}
