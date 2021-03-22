import React, { ReactElement, FC } from "react";
import MovieItem from "./MovieItem/MovieItem";
import { ListWrapper } from "./MovieList.styles";
import posterImg from "../../assets/pulp-fiction.jpg";

export const MovieList: FC = (): ReactElement => {
  const movieList: {
    id: number;
    movieTitle: string;
    releaseDate: number;
    genre: string[];
    url: string;
  }[] = [
    {
      id: 0,
      movieTitle: "PulpFiction",
      releaseDate: 2004,
      genre: ["Action", "Adventure"],
      url: posterImg,
    },
    {
      id: 1,
      movieTitle: "PulpFiction",
      releaseDate: 2004,
      genre: ["Action", "Adventure"],
      url: posterImg,
    },
    {
      id: 2,
      movieTitle: "PulpFiction",
      releaseDate: 2004,
      genre: ["Action", "Adventure"],
      url: posterImg,
    },
    {
      id: 3,
      movieTitle: "PulpFiction",
      releaseDate: 2004,
      genre: ["Action", "Adventure"],
      url: posterImg,
    },
    {
      id: 4,
      movieTitle: "PulpFiction",
      releaseDate: 2004,
      genre: ["Action", "Adventure"],
      url: posterImg,
    },
    {
      id: 5,
      movieTitle: "PulpFiction",
      releaseDate: 2004,
      genre: ["Action", "Adventure"],
      url: posterImg,
    },
  ];
  return (
    <ListWrapper>
      {movieList.map((item) => (
        <MovieItem key={item.id} movie={item} />
      ))}
    </ListWrapper>
  );
};
