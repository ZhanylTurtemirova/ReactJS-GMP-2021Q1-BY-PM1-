import * as actionTypes from "./types";

import { Movie } from "../../core/models/Movie";
import { getMovie } from "../../core/api/api";

export const requestGetMovieLoading = () => ({
  type: actionTypes.GET_MOVIE_LOADING,
});

export const requestGetMovieError = (error: string) => ({
  type: actionTypes.GET_MOVIE_ERROR,
  error,
});

export const requestGetMovie = (payload: Movie) => ({
  type: actionTypes.GET_MOVIE,
  payload,
});

//Get movie by id
export const requestGetMovieById = (id: number) => (
  dispatch: any
): Promise<void> => {
  dispatch(requestGetMovieLoading());

  return getMovie(id)
    .then((response: { data: any }) => {
      dispatch(requestGetMovie(response.data));
    })
    .catch((error: any) => {
      dispatch(requestGetMovieError(error));
    });
};
