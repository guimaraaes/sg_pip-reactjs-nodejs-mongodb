import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  flex-direction: column;
  align-items: space-around;

  padding: 40px;
`;
export const CardProcessStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const Col = styled.div`
  display: flex;

  flex-direction: row;
  align-items: space-around;
`;
export const SearchStyle = styled.div`
  display: flex;

  justify-content: flex-end;
`;
export const Head = styled.div`
  display: flex;
  align-items: baseline;
  
  justify-content: space-between;
  button {
    background-color: none;
    border: none;
  }
  @media screen and ( max-width: 700px ) {
    display: flex; 
    flex-direction: column;
    align-items: center;
  }
`;