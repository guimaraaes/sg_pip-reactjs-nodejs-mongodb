import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  width: 1000px;

  margin-top: 100px;
  FormControl {
    width: 50%;
  }

  InputGroup {
    width: 600px;
  }

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
