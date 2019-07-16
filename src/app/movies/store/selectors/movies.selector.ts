import { createSelector } from '@ngrx/store';
import { IAppState } from '../../../app.state';
import { moviesState } from '../../core/movies-contracts';

const moviesSelector = (state: IAppState) => state.movies;

export const getLoading = createSelector(
  moviesSelector,
  (state: moviesState) => state.loading
);

export const getList = createSelector(
  moviesSelector,
  (state: moviesState) => state.movies
);
