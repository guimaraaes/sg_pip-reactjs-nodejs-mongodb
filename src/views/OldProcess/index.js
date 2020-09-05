import React from "react";
import Header from "../../components/Header/index";
import CardProcess from "../../components/CardProcess";
import Search from "../../components/Search";
import * as S from "./styles";
import Statistics from "../../components/Statistics";
import ListSelectStudents from "../../components/ListSelectStudents";

function OldProcess() {
  return (
    <>
      <Header />

      <S.Container>
        <h1 class="m-5">SELEÇÕES 2020.x</h1>
        <S.CardProcessStyle>
          <S.Col>
            <Statistics />
            <div>
              <h4>EMITIR COMPROVANTE</h4>
              <Search procura="Procurar por matricula" />
            </div>
          </S.Col>
          <S.Col>
            <ListSelectStudents />
            <ListSelectStudents />
            <ListSelectStudents />
            <ListSelectStudents />
          </S.Col>
        </S.CardProcessStyle>
      </S.Container>
    </>
  );
}

export default OldProcess;
