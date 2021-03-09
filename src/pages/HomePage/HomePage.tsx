import React from "react";
import SearchBanner from "../../components/SearchBanner";
import SortMenu from "../../components/SortMenu";
import MenuList from "../../components/MovieList";
import Footer from "../../components/Footer";
import ErrorBoundary from "../../components/ErrorBoundary";

export default function HomePage() {
  return (
    <>
      <ErrorBoundary hasError={false}>
        <SearchBanner />
        <SortMenu />
        <MenuList />
      </ErrorBoundary>
      <Footer />
    </>
  );
}
