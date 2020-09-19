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
        <S.Head className="mb-5">
          <h1>SELEÇÃO x</h1>
          <Search procura="Procurar por aluno" />
        </S.Head>

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
