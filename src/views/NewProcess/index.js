import React from "react";
import Header from "../../components/Header/index";
import FormInfo from "../../components/FormInfo";
import * as S from "./styles";

function NewProcess() {
  return (
    <>
      <Header />

      <S.Container>
        <FormInfo />
      </S.Container>
    </>
  );
}

export default NewProcess;
