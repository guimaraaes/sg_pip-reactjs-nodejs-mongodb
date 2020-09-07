import React from "react";
import Header from "../../components/Header/index";
import Statistics from "../../components/Statistics";
import FormInfo from "../../components/FormInfo";
import * as S from "./styles";
import GroupStudents from "../../components/GroupStudents";

function Process(props) {
  return (
    <>
      <Header />

      <S.Container>
        <h1 class="m-5">SELEÇÃO x</h1>
        <S.GroupStudentsContainer>
          <Statistics />

          <GroupStudents
            color="#D9534F"
            colorHead="#CB2E25"
            procura="Procurar por aluno"
            href="/student-request"
          />
          <GroupStudents
            color="#5CB85C"
            colorHead="#449D44"
            procura="Procurar por aluno"
            href="/student-request"
          />
          <GroupStudents
            color="#1C7CD5"
            colorHead="#01549B"
            procura="Procurar por aluno"
            href="/student-request"
          />
          <GroupStudents
            color="#818A91"
            colorHead="#55595C"
            procura="Procurar por aluno"
            href="/student-request"
          />
        </S.GroupStudentsContainer>
      </S.Container>
    </>
  );
}

export default Process;
