import React, { ReactElement, FC, useState, useEffect } from "react";
import MovieItem from "./MovieItem/MovieItem";
import { ListWrapper } from "./MovieList.styles";
import posterImg from "../../assets/pulp-fiction.jpg";
import lordOfTheRingsImg from "../../assets/lordOfTheRings.jpg";
import fightClubImg from "../../assets/fightClub.jpg";
import samsaraImg from "../../assets/samsara.jpeg";
import { FileWatcherEventKind } from "typescript";

interface MovieListProps {
  filterBy?: string;
}
const movieList: {
  id: string;
  movieTitle: string;
  releaseDate: string;
  movieUrl: string;
  overview: string;
  runTime: string;
  genre: string[];
  imgUrl: string;
}[] = [
  {
    id: "0",
    movieTitle: "PulpFiction",
    releaseDate: "01-01-2004",
    genre: ["Crime"],
    imgUrl: posterImg,
    movieUrl: "movieUrl",
    overview: "overview",
    runTime: "runTime",
  },
  {
    id: "1",
    movieTitle: "PulpFiction",
    releaseDate: "01-01-2004",
    genre: ["Action", "Adventure"],
    imgUrl: posterImg,
    movieUrl: "movieUrl",
    overview: "overview",
    runTime: "runTime",
  },
  {
    id: "2",
    movieTitle: "PulpFiction",
    releaseDate: "01-01-2004",
    genre: ["Action", "Adventure"],
    imgUrl: posterImg,
    movieUrl: "movieUrl",
    overview: "overview",
    runTime: "runTime",
  },
  {
    id: "3",
    movieTitle: "Samsara",
    releaseDate: "01-01-2014",
    genre: ["Documentary"],
    imgUrl: samsaraImg,
    movieUrl: "movieUrl",
    overview: "overview",
    runTime: "runTime",
  },
  {
    id: "4",
    movieTitle: "Fight Club",
    releaseDate: "15-10-1999",
    genre: ["Action"],
    imgUrl: fightClubImg,
    movieUrl: "movieUrl",
    overview: "overview",
    runTime: "runTime",
  },
  {
    id: "5",
    movieTitle: "The Lord of the Rings: Fellowship of the ring",
    releaseDate: "10-12-2001",
    genre: ["Fantasy", "Adventure"],
    imgUrl: lordOfTheRingsImg,
    movieUrl: "movieUrl",
    overview: "overview",
    runTime: "runTime",
  },
];
export const MovieList: FC<MovieListProps> = ({ filterBy }): ReactElement => {
  const [movies, setMovies] = useState(movieList);

  movieList.map((mov) => mov.genre.forEach((item) => item === filterBy));
  useEffect(() => {
    if (filterBy === "all" || !filterBy) return setMovies(movieList);

    let moviesFiltered: any = [];
    movieList.forEach((mov) => {
      for (let x = 0; x < mov.genre.length; x++) {
        mov.genre[x].toLocaleLowerCase() === filterBy &&
          moviesFiltered.push(mov);
      }
    });
    return setMovies(moviesFiltered);
  }, [filterBy, movieList]);
  return (
    <ListWrapper>
      {movies && movies.map((item) => <MovieItem key={item.id} movie={item} />)}
    </ListWrapper>
  );
};
