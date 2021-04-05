import Request from "./request";
import { Movie } from "../models/Movie";

export const getMovies = () => {
  return Request.get("movies");
};
export const getMovie = (data: { id: number }) => {
  return Request.get(`movies/${data.id}`);
};
export const editMovie = (data: { movie: Movie }) => {
  return Request.put(`movies`, data.movie);
};
export const deleteMovie = (data: { id: number }) => {
  return Request.delete(`movies/${data.id}`);
};
export const addMovie = (data: { movie: Movie }) => {
  return Request.post(`movies`, data.movie);
};
