import React from "react";
import Header from "../../components/Header/index";
import CardProcess from "../../components/CardProcess";
import Search from "../../components/Search";
import * as S from "./styles";
import Statistics from "../../components/Statistics";
import ListSelectStudents from "../../components/ListSelectStudents";
import { Button } from "react-bootstrap";

function OldProcess() {
  return (
    <>
      <Header />
      <S.Container>
        <h1>SELEÇÕES 2020.x</h1>

        <ListSelectStudents />
        <ListSelectStudents />
        <ListSelectStudents />
        <ListSelectStudents />
      </S.Container>
    </>
  );
}

export default OldProcess;
