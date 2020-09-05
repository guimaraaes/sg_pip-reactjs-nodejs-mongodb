import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  width: 1000px;
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

  .Button {
    margin-left: auto;
  }

  .upload-button {
    border-color: none;
    background: none;
  }
`;
