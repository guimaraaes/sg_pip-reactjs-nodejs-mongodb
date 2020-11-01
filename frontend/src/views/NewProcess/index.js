import React from "react";
import FormInfo from "../../components/FormInfo";
import Header from "../../components/Header/index";
import * as S from "./styles";

class NewProcess extends React.Component {
  render() {
    return (
      <>
        <Header />
        <S.Container>
          <FormInfo />
        </S.Container>
      </>
    );
  }
}

export default NewProcess;
