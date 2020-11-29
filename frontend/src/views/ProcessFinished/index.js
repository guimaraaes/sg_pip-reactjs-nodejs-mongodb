import React from "react";
import { Row } from "react-bootstrap";
import Header from "../../components/Header/index";
import ListSelectStudents from "../../components/ListSelectStudents";
import * as S from "./styles";

function ProcessFinished() {
  return (
    <>
      <Header />
      <S.Container>
        <S.Head className="mb-5">
          <h1>SELEÇÕES 2020.x</h1>
          <Row>Data de início: - Data fim: </Row>
        </S.Head>
        <ListSelectStudents />
        <ListSelectStudents />
        <ListSelectStudents />
        <ListSelectStudents />
      </S.Container>
    </>
  );
}

export default ProcessFinished;
