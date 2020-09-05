import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  margin: 10px;
  display: flex;
  align-items: flex-end;
  div {
    background: ${(props) => props.colorHead};
    font-weight: bold;
  }

  a {
    &:hover {
      background: ${(props) => props.color};
    }
  }
`;
