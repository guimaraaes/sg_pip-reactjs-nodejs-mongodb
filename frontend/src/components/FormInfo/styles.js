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
    width: 500px;
    margin: 5px;
    margin-left: auto;
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
