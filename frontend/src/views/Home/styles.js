import styled from "styled-components";

export const SearchStyle = styled.div`
  display: flex;

  justify-content: flex-end;
`;

export const Head = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;

  justify-content: space-between;
  Button {
    background: none;
    border: none;
  }
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  a {
    color: black;
  }
`;

export const Container = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  padding: 40px;
`;

export const ProcessStudents = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: 380px;
`;
