import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { IAppState } from "src/app/app.state";
import { SearchMovies } from "../store/actions/movies.actions";
import { Observable } from "rxjs";
import { movie } from "../core/movies-contracts";
import { getList, getLoading } from '../store/selectors/movies.selector';

@Component({
  selector: "app-movies-container",
  templateUrl: "./movies-container.component.html",
  styleUrls: ["./movies-container.component.scss"]
})
export class MoviesContainerComponent implements OnInit {

  moviesList$: Observable<movie[]>;
  isLoading$: Observable<boolean>;

  constructor(private _store: Store<IAppState>) {
    this.moviesList$ = this._store.pipe(select(getList));
    this.isLoading$ = this._store.pipe(select(getLoading));
  }

  ngOnInit() {
    this._store.dispatch(new SearchMovies("destiny"));
  }

  searchMovie(searchText: string) {
    this._store.dispatch(new SearchMovies(searchText));
  }

}
