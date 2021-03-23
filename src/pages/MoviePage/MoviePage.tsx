import React from "react";
import MovieDatail from "../../components/MovieDetail";
import SortMenu from "../../components/SortMenu";
import MenuList from "../../components/MovieList";
import Footer from "../../components/Footer";
import ErrorBoundary from "../../components/ErrorBoundary";
import posterImg from "../../assets/pulp-fiction.jpg";

interface MoviePageProps {
  filterBy: string;
}
interface MoviePageState {
  filterBy: string;
  selectedMovie: {
    id: string;
    movieTitle: string;
    releaseDate: string;
    movieUrl: string;
    overview: string;
    runTime: string;
    genre: string[];
    imgUrl: string;
  };
}
export default class MoviePage extends React.Component<
  MoviePageProps,
  MoviePageState
> {
  state = {
    selectedMovie: {
      id: "0",
      movieTitle: "PulpFiction",
      releaseDate: "01-01-2004",
      genre: ["Crime"],
      imgUrl: posterImg,
      movieUrl: "movieUrl",
      overview: "overview",
      runTime: "runTime",
    },
    filterBy: "all",
  };
  componentDidUpdate(prevProps: { filterBy: string }) {
    if (this.props !== prevProps) {
      this.setState({ filterBy: this.props.filterBy });
    }
  }
  render() {
    const { filterBy } = this.state;
    return (
      <>
        <ErrorBoundary hasError={false}>
          <MovieDatail movie={this.state.selectedMovie} />
          <SortMenu
            activeClickProps={(item) => this.setState({ filterBy: item })}
          />
          <MenuList filterBy={filterBy} />
        </ErrorBoundary>
        <Footer />
      </>
    );
  }
}
