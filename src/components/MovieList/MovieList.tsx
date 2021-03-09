import React, { ReactElement, FC } from "react";
import MovieItem from "./MovieItem/MovieItem";
import { ListWrapper } from "./MovieList.styles";
import posterImg from "../../assets/pulp-fiction.jpg";

export const MovieList: FC = (): ReactElement => {
  const movieList: {
    id: number;
    title: string;
    date: number;
    genre: string[];
    url: string;
  }[] = [
    {
      id: 0,
      title: "PulpFiction",
      date: 2004,
      genre: ["Action", "Adventure"],
      url: posterImg,
    },
    {
      id: 1,
      title: "PulpFiction",
      date: 2004,
      genre: ["Action", "Adventure"],
      url: posterImg,
    },
    {
      id: 2,
      title: "PulpFiction",
      date: 2004,
      genre: ["Action", "Adventure"],
      url: posterImg,
    },
    {
      id: 3,
      title: "PulpFiction",
      date: 2004,
      genre: ["Action", "Adventure"],
      url: posterImg,
    },
    {
      id: 4,
      title: "PulpFiction",
      date: 2004,
      genre: ["Action", "Adventure"],
      url: posterImg,
    },
    {
      id: 5,
      title: "PulpFiction",
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
          title={item.title}
          date={item.date}
          genre={item.genre}
          img={item.url}
        />
      ))}
    </ListWrapper>
  );
};
