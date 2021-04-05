import * as actionTypes from "../actions/types";
import { movieDetailsInitialState } from "./state";
import { MovieDetailsInterface } from "./interfaces";

export const movieDetailsReducer = (
  state = movieDetailsInitialState,
  action: { type: string; payload: any; error: any }
): MovieDetailsInterface => {
  switch (action.type) {
    case actionTypes.GET_MOVIE_LOADING: {
      return {
        ...state,
        movieLoading: true,
      };
    }
    case actionTypes.GET_MOVIE_ERROR: {
      return {
        ...state,
        movieError: action.error,
        movieLoading: false,
      };
    }
    case actionTypes.GET_MOVIE: {
      return {
        ...state,
        movieData: action.payload,
        movieLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};
