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
      students: [],
      processesinfo: [],
    };
    this.loadProcess();
    this.loadStudents();
    this.loadProcessesInfo();
  }
  handlePageChange(pageNumber) {
    this.setState({ page: pageNumber });
    this.props.history.push("/process/?_id=" + this.id + "&page=" + pageNumber);
    this.props.history.go();
  }

  async loadProcess() {
    await api.get(`/process/` + this.id).then((respose) => {
      this.setState({ process: respose.data });
    });
  }

  async loadStudents() {
    await api
      .get(
        `/student_request/student_on_process/` +
          this.id +
          "?page=" +
          this.state.page
      )
      .then((respose) => {
        this.setState({ students: respose.data });
      });
  }
  async loadProcessesInfo() {
    await api
      .get(`student_request/student_on_process/process_info/` + this.id)
      .then((respose) => {
        this.setState({ processesinfo: respose.data });
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
            procura="Procurar por aluno"
            students={this.state.students}
          />
          {/* {this.state.students.name} */}
          {/* {this.state.students.map((i) => {
            return (
              <>
                <a class="list-group-item btn ">{i.name}</a>
              </>
            );
          })} */}
          <S.Head>
            <Pagination
              activePage={this.state.page}
              itemsCountPerPage={5}
              totalItemsCount={this.state.processesinfo.total}
              pageRangeDisplayed={3}
              onChange={this.handlePageChange.bind(this)}
              itemClass="page-item"
              linkClass="page-link"
            />
            <Row>
              Data de início: {this.state.process.date_begin} - Data fim:
              {this.state.process.date_end}
              <br />
              Total estudantes: {this.state.processesinfo.total} - Total para
              analisar: {this.state.processesinfo.total_active}
            </Row>
          </S.Head>
        </S.Container>
      </>
    );
  }
}
export default Process;
