import { MovieDetailsInterface, MoviesState } from "./interfaces";

export const movieDetailsInitialState: MovieDetailsInterface = {
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
};

export const moviesInitialState: MoviesState = {
  moviesLoading: false,
  moviesError: "",
  moviesData: [],
  filter: "all",
  sortBy: "release date",
  sortDescending: true,
};
