import React from "react";
import PropTypes, { string } from "prop-types";
import {
  MovieWrapper,
  MoviePoster,
  MovieDescription,
  MovieTilte,
  Title,
  Genre,
  MovieDate,
} from "./MovieItem.styles";

interface MovieItemInterface {
  img: string;
  title: string;
  genre: string[];
  date: number;
}
export default class MovieItem extends React.Component<MovieItemInterface> {
  static propTypes: {
    img: PropTypes.Requireable<string>;
    title: PropTypes.Requireable<string>;
    genre: PropTypes.Requireable<(string | null | undefined)[]>;
    date: PropTypes.Requireable<number>;
  };
  render(): React.ReactElement {
    const { img, title, genre, date } = this.props;
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
  }
}

// @ts-ignore
MovieItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  genre: PropTypes.arrayOf(string),
  date: PropTypes.number,
};
