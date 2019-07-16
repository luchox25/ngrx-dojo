export interface movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface moviesResponse {
  Search: movie[];
}

export interface moviesState {
  loading: boolean;
  movies: movie[];
}
