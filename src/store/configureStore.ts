import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { MoviesState, MovieDetailsInterface } from "./reducers/interfaces";

import rootReducer from "./reducers";

export interface AppState {
  movies: MoviesState;
  movieDetails: MovieDetailsInterface;
}

const initialState: AppState = {
  movies: {
    moviesLoading: false,
    moviesError: "",
    moviesData: [],
    filter: "all",
    sortBy: "release date",
    sortDescending: true,
    movieForm: {},
  },
  movieDetails: {
    movieLoading: false,
    movieError: "",
    movieData: {
      id: 1,
      title: "",
      tagline: "",
      vote_average: 1,
      vote_count: 1,
      release_date: "",
      poster_path: "",
      overview: "",
      budget: 1,
      revenue: 1,
      genres: ["", ""],
      runtime: 1,
    },
  },
};

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   typeof store,
//   null,
//   Action<string>
// >;
