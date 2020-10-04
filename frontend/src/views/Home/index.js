import React from "react";
import Header from "../../components/Header/index";
import CardProcess from "../../components/CardProcess";
import Search from "../../components/Search";
import * as S from "./styles";
import { Pagination } from "react-bootstrap";

function Home() {
  const b = [1, 10, 100];
  const a = [1, 10, 100];

  return (
    <>
      <Header />

      <S.Container>
        <S.Head>
          <h1>SELEÇÕES </h1>
          <Search procura="Procurar por seleção" />
        </S.Head>

        {/* <S.SearchStyle>
          <h4>EMITIR COMPROVANTE</h4>
          <Search procura="Procurar por matricula" />
        </S.SearchStyle> */}

        <S.CardProcessStyle className="m-3">
          {b.map((i) => {
            return <CardProcess href="/process" />;
          })}

          {a.map((i) => {
            return <CardProcess href="/old-process" />;
          })}
        </S.CardProcessStyle>
        <Pagination className="ml-5">
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>

          <Pagination.Item active>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </S.Container>
    </>
  );
}

export default Home;
