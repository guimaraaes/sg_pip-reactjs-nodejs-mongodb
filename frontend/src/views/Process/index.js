import React from "react";
import { Row } from "react-bootstrap";
import Pagination from "react-js-pagination";
import GroupStudents from "../../components/GroupStudents/index";
import Head from "../../components/Head/index";
import Header from "../../components/Header/index";
import api from "../../services/api";
import * as S from "./styles";

class Process extends React.Component {
  constructor(props) {
    super(props);
    this.params = new URLSearchParams(this.props.location.search);
    this.id = this.props.location.pathname.split("/")[2];
    // this.id = "5f9de9380de4fe00cf9f050c";
    this.p = Number(this.params.get("page"));
    this.state = {
      page: this.p === 0 ? 1 : this.p,
      process: [],
      students: [],
      info: [],
      name_student_search: "",
    };

    this.n = String(this.params.get("name_student_search"));
    this.n != "null"
      ? (this.state.name_student_search = this.n)
      : (this.state.name_student_search = "");

    this.url = "";
    this.loadProcess();
    this.loadStudents();
    this.loadStudentsInfo();
  }
  handleChange = (e) => this.setState(e);

  componentDidUpdate() {
    if (this.props.onChange) {
      this.props.onChange(this.state);
    }
    this.loadStudents();
  }
  handlePageChange(pageNumber) {
    this.setState({ page: pageNumber });
    // this.props.history.push("/process/" + this.id + "&page=" + pageNumber);

    this.state.name_student_search != ""
      ? this.props.history.push(
          "/process/" +
            this.id +
            "/?name_student_search=" +
            this.state.name_student_search +
            "&page=" +
            pageNumber
        )
      : this.props.history.push("/process/" + this.id + "/?page=" + pageNumber);

    this.props.history.go();
    this.loadStudentsInfo();
    // this.props.history.go();
  }

  async loadProcess() {
    await api.get(`/process/` + this.id).then((respose) => {
      this.setState({ process: respose.data });
    });
  }

  async loadStudents() {
    this.state.name_student_search != ""
      ? (this.url =
          `/student_request/students_on_process/` +
          this.id +
          "/search/" +
          this.state.name_student_search)
      : (this.url =
          `/student_request/students_on_process/` +
          this.id +
          "?page=" +
          this.state.page);
    await api.get(this.url).then((respose) => {
      this.setState({ students: respose.data });
    });
  }
  async loadStudentsInfo() {
    await api
      .get(
        `student_request/student_info/` +
          this.id +
          "/" +
          this.state.name_student_search
      )
      .then((respose) => {
        this.setState({ info: respose.data });
      });
  }

  // handleChange = (e) => this.setState(e);

  render() {
    return (
      <>
        <Header />
        <S.Container>
          <S.Head className="mb-5">
            <Head
              title={this.state.process.title}
              name_student_search={this.state.name_student_search}
              action="edit"
              id={this.id}
              onChange={this.handleChange}
              hist={this.props.history}
              loc={this.props.location.pathname}
            ></Head>
          </S.Head>
          <S.GroupStudentsContainer>
            <GroupStudents
              procura="Procurar por aluno"
              id_process={this.state.process._id}
              students={this.state.students}
            />
          </S.GroupStudentsContainer>
          <S.Head>
            <Pagination
              activePage={this.state.page}
              itemsCountPerPage={5}
              totalItemsCount={this.state.info.total}
              pageRangeDisplayed={3}
              onChange={this.handlePageChange.bind(this)}
              itemClass="page-item"
              linkClass="page-link"
            />
            <Row>
              Data de início: {this.state.process.date_begin} - Data fim:
              {this.state.process.date_end}
              <br />
              Total: {this.state.info.total} - Total ativo:
              {this.state.info.total_active}
            </Row>
          </S.Head>
        </S.Container>
      </>
    );
  }
}
export default Process;
