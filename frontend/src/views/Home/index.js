import React from "react";
import Header from "../../components/Header/index";
import CardProcess from "../../components/CardProcess";
import Search from "../../components/Search";
import * as S from "./styles";
import { Pagination, Row } from "react-bootstrap";
import lupa from "../../assets/lupa.png";
import add from "../../assets/add.png";


class Home extends React.Component {
  constructor(props) {
    super(props);

    this.a = {
      id: 1,
      title: [],
      inprogress: [],
      date_begin: null,
      date_end: [],
      aid_id: null,
      aid_name: [],
      aid_quantity: [],
      selected_studentes_name: [],
      selected_studentes_aid: null,
    };
    this.state = {
      a: false,
    };

    this.list = [this.a, this.a, this.a]

  }



  render() {
    return (
      <>
        <Header />
        <S.Container>
          <S.Head>
            <h1>SELEÇÕES </h1>
            <Row>

              {this.state.a ? <Search procura="Procurar por seleção" /> : null}

              <button class='mr-3' onClick={() => this.setState({ a: !this.state.a })}>
                <img src={lupa}></img>
              </button>
              <button >
                <a href='/new-process'> cadastrar <img src={add}></img> </a>
              </button>
            </Row>
          </S.Head>

          {/* <S.SearchStyle>
          <h4>EMITIR COMPROVANTE</h4>
          <Search procura="Procurar por matricula" />
        </S.SearchStyle> */}

          <S.CardProcessStyle className="m-3">
            {this.list.map((i) => {
              return <CardProcess href="/process" />;
            })}

            {this.list.map((i) => {
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
}

export default Home;

