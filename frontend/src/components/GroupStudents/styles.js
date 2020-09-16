import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  div {
    background: ${(props) => props.colorHead};
    font-weight: bold;

    .Head {
      display: flex;
      align-items: baseline;

      justify-content: space-between;
    }
  }
  button {
    border: none;
    background: none;
    &:hover {
      background: ${(props) => props.color};
    }
  }
  a {
    &:hover {
      background: ${(props) => props.color};
    }
  }
`;
