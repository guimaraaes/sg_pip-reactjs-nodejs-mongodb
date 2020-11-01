import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  backgroun: red;
  padding: 40px;
`;

export const GroupStudentsContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  flex-wrap: wrap;
`;
export const Head = styled.div`
  display: flex;
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
