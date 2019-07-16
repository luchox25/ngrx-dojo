import { moviesState } from './movies/core/movies-contracts';

export interface IAppState {
  movies: moviesState;
}
