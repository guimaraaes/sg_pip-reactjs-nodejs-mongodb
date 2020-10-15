import React from "react";
import Header from "../../components/Header/index";
import Statistics from "../../components/Statistics";
import Search from "../../components/Search";
import FormInfo from "../../components/FormInfo";
import * as S from "./styles";
import GroupStudents from "../../components/GroupStudents";
import { Pagination, Row } from "react-bootstrap";
import alert from "../../assets/alert.png";
import lupa from "../../assets/lupa.png";
import edit from "../../assets/edit.png";


class Process extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      a: false,
    };

  }


  render() {
    return (
      <>

        <Header />

        <S.Container>
          <S.Head className="mb-5">
            <h1>SELEÇÃO x</h1>
            <Row>
              {this.state.a ? <Search procura="Procurar por seleção" /> : null}

              <button onClick={() => this.setState({ a: !this.state.a })}>
                <img src={lupa}></img>
              </button>

              <button class="ml-3">
                <img src={alert}></img>
              </button>
              <button class="ml-3">
                <a href='/new-process'> editar <img src={edit}></img> </a>
              </button>
            </Row>
          </S.Head>


          <GroupStudents
            color="#5CB85C"
            colorHead="#449D44"
            procura="Procurar por aluno"
            href="/student-request"
          />
          <S.Head>
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
            <Row>Data de início: - Data fim: </Row>
          </S.Head>
        </S.Container>
      </>
    );
  }
}
export default Process;
