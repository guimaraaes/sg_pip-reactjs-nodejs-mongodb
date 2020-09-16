import React from "react";
import Header from "../../components/Header/index";
import CardProcess from "../../components/CardProcess";
import Search from "../../components/Search";
import * as S from "./styles";
import { Pagination } from "react-bootstrap";

function Home() {
  const b = [1, 10, 100];
  const a = [1, 10, 100, 1000, 10000];

  return (
    <>
      <Header />

      <S.Container>
        <S.Head>
          <h1 class="m-5">SELEÇÕES </h1>
          <Search procura="Procurar por seleção" />
        </S.Head>

        {/* <S.SearchStyle>
          <h4>EMITIR COMPROVANTE</h4>
          <Search procura="Procurar por matricula" />
        </S.SearchStyle> */}

        <S.CardProcessStyle>
          {b.map((i) => {
            return <CardProcess href="/process" />;
          })}

          {a.map((i) => {
            return <CardProcess href="/old-process" />;
          })}
        </S.CardProcessStyle>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </S.Container>
    </>
  );
}

export default Home;
