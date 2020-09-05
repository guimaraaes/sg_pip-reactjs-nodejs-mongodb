import React from "react";
import Header from "../../components/Header/index";
import CardProcess from "../../components/CardProcess";
import Search from "../../components/Search";
import * as S from "./styles";
import { Link } from "react-router-dom";

function Home() {
  const b = [1, 10, 100];
  const a = [1, 10, 100, 1000, 10000, 1, 10, 100, 1000, 10000];

  return (
    <>
      <Header />
      <S.Container>
        <S.SearchStyle>
          <Search procura="Procurar por seleção" />
        </S.SearchStyle>
        <h1 class="m-5">SELEÇÕES EM ANDAMENTO</h1>
        <S.CardProcessStyle>
          {b.map((i) => {
            return <CardProcess href="/process" />;
          })}
        </S.CardProcessStyle>
        <h1 class="m-5">SELEÇÕES FINALIZADAS</h1>

        <S.CardProcessStyle>
          {a.map((i) => {
            return <CardProcess href="/old-process" />;
          })}
        </S.CardProcessStyle>
      </S.Container>
    </>
  );
}

export default Home;
