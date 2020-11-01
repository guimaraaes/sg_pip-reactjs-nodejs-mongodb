import React from "react";
import { Row } from "react-bootstrap";
import Pagination from "react-js-pagination";
import GroupStudents from "../../components/GroupStudents";
import Head from "../../components/Head/index";
import Header from "../../components/Header/index";
import api from "../../services/api";
import * as S from "./styles";

class Process extends React.Component {
  constructor(props) {
    super(props);
    this.params = new URLSearchParams(this.props.location.search);
    this.id = this.params.get("_id");
    this.p = Number(this.params.get("page"));
    this.state = {
      page: this.p === 0 ? 1 : this.p,
      process: [],
    };
    this.loadProcess();
  }
  handlePageChange(pageNumber) {
    this.setState({ page: pageNumber });
    this.props.history.push(this.props.location.search + "&page=" + pageNumber);
    this.props.history.go();
  }

  async loadProcess() {
    await api.get(`/process/` + this.id).then((respose) => {
      this.setState({ process: respose.data });
    });
  }
  render() {
    return (
      <>
        <Header />
        <S.Container>
          <S.Head className="mb-5">
            <Head title={this.state.process.title} action="new"></Head>
          </S.Head>
          <GroupStudents
            color="#5CB85C"
            colorHead="#449D44"
            procura="Procurar por aluno"
            href={"/student-request?_id=" + 1}
            students={1}
          />
          {this.state.process.selected_studentes_name}
          {/* {JSON.parse(this.state.process.selected_studentes_name).map((i) => {
            return (
              <>
                <a class="list-group-item btn ">{i}</a>1
              </>
            );
          })} */}
          <S.Head>
            <Pagination
              activePage={this.state.page}
              itemsCountPerPage={8}
              totalItemsCount={11}
              pageRangeDisplayed={2}
              onChange={this.handlePageChange.bind(this)}
              itemClass="page-item"
              linkClass="page-link"
            />
            <Row>
              Data de início: {this.state.process.date_begin} - Data fim:
              {this.state.process.date_end}
            </Row>
          </S.Head>
        </S.Container>
      </>
    );
  }
}
export default Process;
