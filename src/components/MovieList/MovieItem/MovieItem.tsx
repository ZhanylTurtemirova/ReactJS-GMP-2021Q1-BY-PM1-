import React, { ReactElement, FC } from "react";
import {
  MovieWrapper,
  MoviePoster,
  MovieDescription,
  MovieTilte,
  Title,
  Genre,
  MovieDate,
} from "./MovieItem.styles";

export const MovieItem: FC<{
  img: string;
  title: string;
  genre: string[];
  date: number;
}> = ({ img, title, genre, date }): ReactElement => {
  return (
    <MovieWrapper>
      <MoviePoster src={img} />
      <MovieDescription>
        <MovieTilte>
          <Title>{title}</Title>
          <Genre>{genre.join(" & ")}</Genre>
        </MovieTilte>
        <MovieDate>
          <span>{date}</span>
        </MovieDate>
      </MovieDescription>
    </MovieWrapper>
  );
};

export default MovieItem;
