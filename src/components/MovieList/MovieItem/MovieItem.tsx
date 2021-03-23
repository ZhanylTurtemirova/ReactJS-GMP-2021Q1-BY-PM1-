import React, { FC, ReactElement, useState } from "react";
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

const MovieItem: FC<React.PropsWithChildren<MovieItemInterface>> = ({
  movie,
  movie: { imgUrl, movieTitle, genre, releaseDate },
}): ReactElement => {
  const [isMenuShown, setIsMenuShown] = useState<boolean>(false);
  const [isEditShown, setIsEditShown] = useState<boolean>(false);
  const [isDeleteShown, setIsDeleteShown] = useState<boolean>(false);

  return (
    <>
      <MovieWrapper>
        <MovieMenuWrapper>
          <MovieMenu onClick={() => setIsMenuShown(true)}>
            <MovieMenuIcon src={menuImg} />
            <MenuItems isMenuShown={isMenuShown}>
              <MenuItem onClick={() => setIsEditShown(true)}>Edit</MenuItem>
              <MenuItem onClick={() => setIsDeleteShown(true)}>Delete</MenuItem>
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
          onClose={() => setIsDeleteShown(false)}
        />
      )}
      {isEditShown && (
        <EditMovie
          isShowed={isEditShown}
          movie={{ ...movie, genre: genre.join(" & ") }}
          onClose={() => setIsEditShown(false)}
        />
      )}
    </>
  );
};
export default MovieItem;
