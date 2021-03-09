import styled from "styled-components";

export const MovieWrapper = styled.span`
  width: 300px;
  margin-bottom: 20px;
`;
export const MoviePoster = styled.img`
  width: 300px;
  height: 450px;
  object-fit: cover;
`;
export const MovieDescription = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const MovieTilte = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Title = styled.span`
  font-size: 16px;
  padding-bottom: 5px;

  color: var(--mainWhite);
`;
export const Genre = styled.div`
  font-size: 14px;
  color: var(--secondaryGrey);
`;
export const MovieDate = styled.div`
  & span {
    font-size: 16px;
    padding: 3px;
    border: 2px solid var(--secondaryGrey);
    border-radius: 4px;
  }
`;
