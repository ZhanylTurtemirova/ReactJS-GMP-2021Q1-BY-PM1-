import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import {
  MovieWrapper,
  MoviePoster,
  MovieDescription,
  MovieTilte,
  Title,
  Genre,
  MovieDate,
  MovieMenu,
  MovieMenuWrapper,
  MovieMenuIcon,
  MenuItems,
  MenuItem,
} from "./MovieItem.styles";
import menuImg from "../../../assets/menu.png";

interface MovieItemInterface {
  img: string;
  movieTitle: string;
  genre: string[];
  date: number;
}
export default class MovieItem extends React.Component<MovieItemInterface> {
  static propTypes: {
    img: PropTypes.Requireable<string>;
    movieTitle: PropTypes.Requireable<string>;
    genre: PropTypes.Requireable<(string | null | undefined)[]>;
    date: PropTypes.Requireable<number>;
  };
  state = {
    isMenuShown: false,
  };
  render(): React.ReactElement {
    const { img, movieTitle, genre, date } = this.props;
    const { isMenuShown } = this.state;
    return (
      <MovieWrapper>
        <MovieMenuWrapper>
          <MovieMenu onClick={() => this.setState({ isMenuShown: true })}>
            <MovieMenuIcon src={menuImg} />
            <MenuItems isMenuShown={isMenuShown}>
              <MenuItem onClick={()=>}>Edit</MenuItem>
              <MenuItem>Delete</MenuItem>
            </MenuItems>
          </MovieMenu>
        </MovieMenuWrapper>
        <MoviePoster src={img} />
        <MovieDescription>
          <MovieTilte>
            <Title>{movieTitle}</Title>
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
  movieTitle: PropTypes.string,
  genre: PropTypes.arrayOf(string),
  date: PropTypes.number,
};
