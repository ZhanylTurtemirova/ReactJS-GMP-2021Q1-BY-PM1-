import { Movie } from "../../core/models/Movie";

export interface MoviesState {
  moviesLoading: boolean;
  moviesError: string;
  moviesData: Movie[];
  filter: string;
  sortDescending: boolean;
  sortBy: string;
  // movieForm: Record<string, any>;
  [name: string]: any;
}

export interface MovieDetailsInterface {
  movieLoading: boolean;
  movieError: string;
  movieData: Movie;
}
