import React, { ReactElement, FC } from "react";
import MovieItem from "./MovieItem/MovieItem";
import { ListWrapper } from "./MovieList.styles";
import posterImg from "../../assets/pulp-fiction.jpg";

export const MovieList: FC = (): ReactElement => {
  const movieList: {
    id: number;
    movieTitle: string;
    date: number;
    genre: string[];
    url: string;
  }[] = [
    {
      id: 0,
      movieTitle: "PulpFiction",
      date: 2004,
      genre: ["Action", "Adventure"],
      url: posterImg,
    },
    {
      id: 1,
      movieTitle: "PulpFiction",
      date: 2004,
      genre: ["Action", "Adventure"],
      url: posterImg,
    },
    {
      id: 2,
      movieTitle: "PulpFiction",
      date: 2004,
      genre: ["Action", "Adventure"],
      url: posterImg,
    },
    {
      id: 3,
      movieTitle: "PulpFiction",
      date: 2004,
      genre: ["Action", "Adventure"],
      url: posterImg,
    },
    {
      id: 4,
      movieTitle: "PulpFiction",
      date: 2004,
      genre: ["Action", "Adventure"],
      url: posterImg,
    },
    {
      id: 5,
      movieTitle: "PulpFiction",
      date: 2004,
      genre: ["Action", "Adventure"],
      url: posterImg,
    },
  ];
  return (
    <ListWrapper>
      {movieList.map((item) => (
        <MovieItem
          key={item.id}
          movieTitle={item.movieTitle}
          date={item.date}
          genre={item.genre}
          img={item.url}
        />
      ))}
    </ListWrapper>
  );
};
