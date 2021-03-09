import React from "react";
import SearchBanner from "../../components/SearchBanner";
import SortMenu from "../../components/SortMenu";
import MenuList from "../../components/MovieList";

export default function HomePage() {
  return (
    <div>
      <SearchBanner />
      <SortMenu />
      <MenuList />
    </div>
  );
}
