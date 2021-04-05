import { combineReducers } from "redux";

import { moviesReducer } from "./movies.reducer";
import { movieDetailsReducer } from "./movie.reducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  movieDetails: movieDetailsReducer,
});

export default rootReducer;
