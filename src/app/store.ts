import { IAppState } from "./app.state";
import { ActionReducerMap } from "@ngrx/store";
import { moviesReducer, moviesInitialState } from './movies/store/reducers/movies.reducers';

export const INITIAL_STATE: IAppState = {
  movies: moviesInitialState
};

export const ROOT_REDUCER: ActionReducerMap<IAppState> = {
  movies: moviesReducer
};
