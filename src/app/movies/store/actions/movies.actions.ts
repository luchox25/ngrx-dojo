import { Action, Store } from '@ngrx/store';

export enum EMoviesActions {
  SearchMovies = '[Movies actions] Search movies math with api',
  SearchMoviesSuccess = '[Movies actions] Search movies math with api - success'
}

export class SearchMovies implements Action {
  public readonly type = EMoviesActions.SearchMovies;
  constructor(public payload: string) {}
}

export class SearchMoviesSuccess implements Action {
  public readonly type = EMoviesActions.SearchMoviesSuccess;
  constructor(public payload: any[]) {}
}

export type MoviesActions = SearchMovies | SearchMoviesSuccess;

