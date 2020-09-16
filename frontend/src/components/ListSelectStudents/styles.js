import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  display: flex;

  align-items: center;

  div {
    background: ${(props) => props.color};
  }
  li {
    &:hover {
      background: ${(props) => props.color};
    }
  }
`;
