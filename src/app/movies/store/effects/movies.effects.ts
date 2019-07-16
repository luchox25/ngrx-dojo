import { Injectable } from '@angular/core';
import { MoviesService } from '../../core/movies.service';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { SearchMovies, EMoviesActions, SearchMoviesSuccess } from '../actions/movies.actions';
import { moviesResponse } from '../../core/movies-contracts';

@Injectable()
export class MoviesEffects {
  @Effect()
  searchMovies$ = this.actions$.pipe(
    ofType<SearchMovies>(EMoviesActions.SearchMovies),
    switchMap((params) => this.moviesService.searchMovies(params.payload)),
    switchMap((response: moviesResponse) =>
      of(new SearchMoviesSuccess(response.Search))
    )
  );

  constructor(
    private moviesService: MoviesService,
    private actions$: Actions
  ) {}
}
