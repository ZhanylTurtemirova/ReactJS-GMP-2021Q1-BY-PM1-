import * as actionTypes from "./types";

import { Movie } from "../../core/models/Movie";
import { getMovies } from "../../core/api/api";

export const requestGetMoviesLoading = () => ({
  type: actionTypes.GET_MOVIE_LOADING,
});

export const requestGetMoviesError = (error: string) => ({
  type: actionTypes.GET_MOVIE_ERROR,
  error,
});

export const requestGetMovies = (payload: Movie) => ({
  type: actionTypes.GET_MOVIE,
  payload,
});

//Get movie by id
export const requestGetMoviesList = () => (dispatch: any): Promise<void> => {
  dispatch(requestGetMoviesLoading());

  return getMovies()
    .then((response: { data: any }) => {
      dispatch(requestGetMovies(response.data));
    })
    .catch((error: any) => {
      dispatch(requestGetMoviesError(error));
    });
};
