import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 100px;

  img {
    width: 35px;
    height: 35px;
    padding: 2px;
  }

  .inputCalendar {
    width: 50%;
    margin: 5px;
    margin-left: auto;
  }

  .upload-button {
    border-color: none;
    background: none;
  }
`;
