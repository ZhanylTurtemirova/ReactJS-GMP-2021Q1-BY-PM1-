import React, { ReactElement, FC } from "react";
import {
  SearchWrapper,
  AddButton,
  SearchContent,
  SearchTitle,
  SearchInputWrapper,
  SearchInput,
  SearchButton,
  SearchBgWrapper,
  SearchContentWrapper,
  SearchBannerTop,
  SearchBannerMiddle,
} from "./styles/SearchBanner.styles";
import Logo from "../Logo";

export const SearchBanner: FC = (): ReactElement => (
  <SearchWrapper>
    <SearchBgWrapper />
    <SearchContentWrapper>
      <SearchBannerTop>
        <Logo />
        <AddButton> + Add Movie</AddButton>
      </SearchBannerTop>
      <SearchBannerMiddle>
        <SearchContent>
          <SearchTitle>Find your movie</SearchTitle>
          <SearchInputWrapper>
            <SearchInput placeholder={"What do you want to watch?"} />
            <SearchButton>Search</SearchButton>
          </SearchInputWrapper>
        </SearchContent>
      </SearchBannerMiddle>
    </SearchContentWrapper>
  </SearchWrapper>
);
