import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: 100px;
  img {
    width: 35px;
    height: 35px;
    margin: 2px;
  }

  .inputCalendar {
    width: 50%;
    margin-left: auto;
  }

  .upload-button {
    border-color: none;
    background: none;
  }

  .Button {
    margin-left: auto;
  }

  .buttonAdd {
    background: none;
    border: none;
    box-shadow: none;
    display: flex;
    width: 55px;
    height: 35px;
    align-items: center;
  }
`;
