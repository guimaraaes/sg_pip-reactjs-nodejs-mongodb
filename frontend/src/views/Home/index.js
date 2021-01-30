import React from "react";
import { Row } from "react-bootstrap";
import Pagination from "react-js-pagination";
import Head from "../../components/Head/index";
import Header from "../../components/Header/index";
import Processes from "../../components/Processes";
import api from "../../services/api";
import * as S from "./styles";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.params = new URLSearchParams(this.props.location.search);
    this.p = Number(this.params.get("page"));
    this.student_mode = 0;
    this.state = {
      page: this.p === 0 ? 1 : this.p,
      processes: [],
      processesinfo: [],
      students: [],
      studentinfo: [],
      info: [],
      title_process_search: "",
      name_student_search: "",
    };
    this.url = "";
    this.t = String(this.params.get("title_process_search"));
    this.t != "null"
      ? (this.state.title_process_search = this.t)
      : (this.state.title_process_search = "");

    this.n = String(this.params.get("name_student_search"));
    this.n != "null"
      ? (this.state.name_student_search = this.n)
      : (this.state.name_student_search = "");

    this.state.name_student_search
      ? this.loadStudentsInfo()
      : this.loadProcessesInfo();
    // this.loadProcessesInfo();
    this.loadProcesses();
    // this.loadStudents();
  }

  handleChange = (e) => this.setState(e);

  componentDidUpdate() {
    if (this.props.onChange) {
      this.props.onChange(this.state);
      this.loadProcesses();
    }
  }

  handlePageChange(pageNumber) {
    this.setState({ page: pageNumber });
    this.state.title_process_search
      ? this.props.history.push(
          "/?title_process_search=" +
            this.state.title_process_search +
            "&page=" +
            pageNumber
        )
      : this.props.history.push("/?page=" + pageNumber);

    this.props.history.go();
  }

  // componentDidUpdate() {
  //   this.state.name_student_search ? this.loadStudents() : this.loadProcesses();
  // }

  async loadProcesses() {
    this.state.title_process_search
      ? (this.url =
          `/process/result_search/` +
          this.state.title_process_search +
          "/?page=" +
          this.state.page)
      : (this.url = `/process?page=` + this.state.page);
    await api.get(this.url).then((response) => {
      this.setState({ processes: response.data });
    });
  }

  async loadProcessesInfo() {
    await api
      .get(`/process/process_info/` + this.state.title_process_search)
      .then((respose) => {
        this.setState({ info: respose.data });
      });
  }

  render() {
    return (
      <>
        <Header />
        <S.Container>
          <S.Head>
            <Head
              student_mode={this.student_mode}
              title_process_search={this.state.title_process_search}
              name_student_search={this.state.name_student_search}
              action="new"
              onChange={this.handleChange}
            ></Head>
          </S.Head>
          <S.ProcessStudents>
            <Processes
              student_mode={this.student_mode}
              processes={this.state.processes}
              onChange={this.handleChange}
            ></Processes>
          </S.ProcessStudents>
          <S.Head>
            <Pagination
              activePage={this.state.page}
              itemsCountPerPage={8}
              totalItemsCount={this.state.info.total}
              pageRangeDisplayed={2}
              onChange={this.handlePageChange.bind(this)}
              itemClass="page-item"
              linkClass="page-link"
            />

            <Row>
              Total : {this.state.info.total} - Total ativos:
              {this.state.info.total_active}
            </Row>
          </S.Head>
        </S.Container>
      </>
    );
  }
}

export default Home;
