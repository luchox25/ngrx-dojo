import { moviesState } from "../../core/movies-contracts";
import { MoviesActions, EMoviesActions } from "../actions/movies.actions"

export const moviesInitialState: moviesState = {
  loading: false,
  movies: []
};

export function moviesReducer(state = moviesInitialState, action: MoviesActions): moviesState {
  switch(action.type) {
    case EMoviesActions.SearchMovies: {
      let newState: moviesState = {
        ...state,
        loading: true
      };
      return newState;
    }
    case EMoviesActions.SearchMoviesSuccess: {
      let newState: moviesState = {
        loading: false,
        movies: [ ...action.payload ]
      };
      return newState;
    }
  }
};
