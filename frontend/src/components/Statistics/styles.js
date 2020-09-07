import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  margin: 10px;
  display: flex;
  align-items: flex-end;
  padding-right: 100px;
  div {
    background: ${(props) => props.color};
  }
  li {
    &:hover {
      background: ${(props) => props.color};
    }
  }
`;
