import React from "react";
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
import EditMovie from "../../EditMovie";
import DeleteMovie from "../../DeleteMovie";

interface MovieItemInterface {
  movie: {
    id: string;
    movieUrl: string;
    overview: string;
    runTime: string;
    movieTitle: string;
    genre: string[];
    releaseDate: string;
    imgUrl: string;
  };
}
export default class MovieItem extends React.Component<MovieItemInterface> {
  state = {
    isMenuShown: false,
    isEditShown: false,
    isDeleteShown: false,
  };
  render(): React.ReactElement {
    const {
      movie,
      movie: { imgUrl, movieTitle, genre, releaseDate },
    } = this.props;
    const { isMenuShown, isEditShown, isDeleteShown } = this.state;
    return (
      <>
        <MovieWrapper>
          <MovieMenuWrapper>
            <MovieMenu onClick={() => this.setState({ isMenuShown: true })}>
              <MovieMenuIcon src={menuImg} />
              <MenuItems isMenuShown={isMenuShown}>
                <MenuItem onClick={() => this.setState({ isEditShown: true })}>
                  Edit
                </MenuItem>
                <MenuItem
                  onClick={() => this.setState({ isDeleteShown: true })}
                >
                  Delete
                </MenuItem>
              </MenuItems>
            </MovieMenu>
          </MovieMenuWrapper>
          <MoviePoster src={imgUrl} />
          <MovieDescription>
            <MovieTilte>
              <Title>{movieTitle}</Title>
              <Genre>{genre.join(" & ")}</Genre>
            </MovieTilte>
            <MovieDate>
              <span>{releaseDate}</span>
            </MovieDate>
          </MovieDescription>
        </MovieWrapper>
        {isDeleteShown && (
          <DeleteMovie
            isShowed={isDeleteShown}
            movieId={movie.id}
            onClose={() => {
              this.setState({ isDeleteShown: false });
            }}
          />
        )}
        {isEditShown && (
          <EditMovie
            isShowed={isEditShown}
            movie={{ ...movie, genre: genre.join(" & ") }}
            onClose={() => {
              this.setState({ isEditShown: false });
            }}
          />
        )}
      </>
    );
  }
}
