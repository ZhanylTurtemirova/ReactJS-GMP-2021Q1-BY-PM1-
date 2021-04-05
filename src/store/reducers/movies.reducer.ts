import * as actionTypes from "../actions/types";
import { moviesInitialState } from "./state";
import { MoviesState } from "./interfaces";

export const moviesReducer = (
  state = moviesInitialState,
  action: { type: string; payload: any; error: any }
): MoviesState => {
  switch (action.type) {
    case actionTypes.GET_MOVIES_LOADING: {
      return {
        ...state,
        moviesLoading: true,
      };
    }
    case actionTypes.GET_MOVIES_ERROR: {
      return {
        ...state,
        moviesError: action.error,
        moviesLoading: false,
      };
    }
    case actionTypes.GET_MOVIES: {
      return {
        ...state,
        moviesData: action.payload.data,
        moviesLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};
