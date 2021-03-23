import React from "react";
import SearchBanner from "../../components/SearchBanner";
import SortMenu from "../../components/SortMenu";
import MenuList from "../../components/MovieList";
import Footer from "../../components/Footer";
import ErrorBoundary from "../../components/ErrorBoundary";

interface HomePageProps {
  filterBy: string;
}
interface HomePageState {
  filterBy: string;
}
export default class HomePage extends React.Component<
  HomePageProps,
  HomePageState
> {
  state = {
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
          <SearchBanner />
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
