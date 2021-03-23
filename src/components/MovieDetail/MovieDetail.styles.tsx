import styled from "styled-components";
import BgPoster from "../../assets/posters-bg.jpg";

export const Wrapper = styled.div``;
export const BgWrapper = styled.div`
  background-image: url(${BgPoster});
  width: 100%;
  height: 50vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(5px);
  -webkit-filter: blur(5px);
`;

export const MovieContent = styled.div`
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.6);
  font-weight: bold;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  max-height: 800px;
  z-index: 2;
`;

export const TopWrapper = styled.div`
  width: 90%;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
`;

export const SearchWrapper = styled.div`
  cursor: pointer;
`;

export const SearchIcon = styled.img`
  width: 60px;
  height: 60px;
`;

export const MovieWrapper = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const MoviePoster = styled.img`
  width: 300px;
  height: 450px;
  object-fit: cover;
`;

export const MovieDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MovieTilte = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 32px;
  padding-bottom: 10px;
  color: var(--mainWhite);
`;

export const Rate = styled.div`
  border: 50%;
  padding: 25px;
  border: 2px solid var(--mainWhite);
  text-align: center;
`;

export const MovieSubtitle = styled.span`
  font-size: 16px;
  padding-bottom: 10px;
  color: var(--mainWhite);
`;

export const MovieDateTime = styled.div`
  display: flex;
  color: var(--mainRed);
  font-size: 24px;
  margin-bottom: 25px;
`;

export const Date = styled.div`
  padding-right: 15px;
`;

export const Time = styled.div``;
export const MovieOverview = styled.div``;
