import React from "react";
import Header from "../../components/Header/index";
import Statistics from "../../components/Statistics";
import Search from "../../components/Search";
import FormInfo from "../../components/FormInfo";
import * as S from "./styles";
import GroupStudents from "../../components/GroupStudents";

function Process(props) {
  return (
    <>
      <Header />

      <S.Container>
        <h1 class="">SELEÇÃO x</h1>
        <S.SearchStyle>
          <Search procura="Procurar por aluno" />
        </S.SearchStyle>

        <GroupStudents
          color="#D9534F"
          colorHead="#CB2E25"
          procura="Procurar por aluno"
          href="/student-request"
          alert="true"
        />
        <GroupStudents
          color="#5CB85C"
          colorHead="#449D44"
          procura="Procurar por aluno"
          href="/student-request"
        />
      </S.Container>
    </>
  );
}

export default Process;
