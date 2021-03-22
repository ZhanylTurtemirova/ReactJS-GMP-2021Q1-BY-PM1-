import React, { ReactElement, FC, useState } from "react";
import { StyledForm, ButtonsWrapper } from "./EditMovie.styles";
import Input from "../Input";
import Button from "../Button";
import Select from "../Select";
import Modal from "../Modal";

type EditMovieProps = {
  movie: {
    id: string;
    movieTitle: string;
    releaseDate: string;
    movieUrl: string;
    genre: string;
    overview: string;
    runTime: string;
  };
  onClose: () => void;
  isShowed: boolean;
};

const Options: string[] = ["Action", "Adventure", "Horror"];
export const EditMovie: FC<EditMovieProps> = ({
  onClose: handleClose,
  isShowed,
  movie,
}): ReactElement => {
  const [movieTitle, setTitle] = useState<string>(movie.movieTitle);
  const [releaseDate, setReleaseDate] = useState<string>(movie.releaseDate);
  const [movieUrl, setMovieUrl] = useState<string>(movie.movieUrl);
  const [genre, setGenre] = useState<string>(movie.genre);
  const [overview, setOverview] = useState<string>(movie.overview);
  const [runTime, setRuntime] = useState<string>(movie.runTime);
  return (
    <Modal isHidden={isShowed} onClose={handleClose} title="Edit Movie">
      <StyledForm>
        <Input
          label="title"
          type="text"
          value={movieTitle}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={"Add Title"}
        />
        <Input
          label="release date"
          type="date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
          placeholder={"Select Data"}
        />
        <Input
          label="Movie url"
          type="string"
          value={movieUrl}
          onChange={(e) => setMovieUrl(e.target.value)}
          placeholder={"Movie URL here"}
        />
        <Select
          name="genre"
          value={genre}
          options={Options}
          onChange={(e) => setGenre(e.target.value)}
          label={"Select Genre"}
        />
        <Input
          label="Overview"
          type="string"
          value={overview}
          onChange={(e) => setOverview(e.target.value)}
          placeholder={"Overview here"}
        />
        <Input
          label="Runtime"
          type="number"
          value={runTime}
          onChange={(e) => setRuntime(e.target.value)}
          placeholder={"Runtime here"}
        />
        <ButtonsWrapper>
          <Button text="Reset" />
          <Button isFilled text="Save Changes" />
        </ButtonsWrapper>
      </StyledForm>
    </Modal>
  );
};
