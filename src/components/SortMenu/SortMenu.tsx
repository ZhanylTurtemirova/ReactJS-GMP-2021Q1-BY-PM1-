import React, { ReactElement, FC, useState, useEffect } from "react";
import {
  Menu,
  MenuItem,
  SortItem,
  SortTitle,
  TriangleButton,
  SortWrapper,
  SortDropdown,
  SortMenuWrapper,
  ResultWrapper,
  Wrapper,
  StyledBg,
  TriangleButtonWrapper,
} from "./styles/SortMenu.styles";

export const SortMenu: FC = (): ReactElement => {
  const menuItems: string[] = [
    "all",
    "documentary",
    "comedy",
    "horror",
    "crime",
  ];
  const sortItems: string[] = ["realise date", "rating"];
  const [activeItem, setActiveItem] = useState<string>("all");
  const [sortedOption, setSortedOption] = useState<string>(sortItems[0]);
  const [count, setCount] = useState<number>(0);
  const [isShowed, setIsShowed] = useState<boolean>(false);

  useEffect(() => {}, [isShowed]);

  return (
    <StyledBg>
      <Wrapper>
        <SortMenuWrapper>
          <Menu>
            {menuItems.map((item, index) => (
              <MenuItem
                isActive={Boolean(item === activeItem)}
                onClick={() => setActiveItem(item)}
              >
                {item}
              </MenuItem>
            ))}
          </Menu>
          <SortWrapper>
            <SortTitle>Sort By</SortTitle>
            <SortItem
              onClick={() => {
                console.log(">>>", isShowed);
                setIsShowed(!isShowed);
              }}
            >
              {sortedOption}
            </SortItem>
            <TriangleButtonWrapper
              onClick={() => {
                console.log(">>>", isShowed);
                setIsShowed(!isShowed);
              }}
            >
              <TriangleButton />
            </TriangleButtonWrapper>
            <SortDropdown isShowed={isShowed}>
              {sortItems.map((item) => (
                <SortItem onClick={() => setSortedOption(item)}>
                  {item}
                </SortItem>
              ))}
            </SortDropdown>
          </SortWrapper>
        </SortMenuWrapper>
        <ResultWrapper>{count} movies found </ResultWrapper>
      </Wrapper>
    </StyledBg>
  );
};
