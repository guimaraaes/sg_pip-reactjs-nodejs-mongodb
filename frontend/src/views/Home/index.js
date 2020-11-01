import React from "react";
import { Row } from "react-bootstrap";
import Pagination from "react-js-pagination";
import CardProcess from "../../components/CardProcess";
import Head from "../../components/Head/index";
import Header from "../../components/Header/index";
// import Pagination_ from "../../components/Pagination";
import api from "../../services/api";
import * as S from "./styles";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.params = new URLSearchParams(this.props.location.search);
    this.p = Number(this.params.get("page"));
    this.state = {
      page: this.p === 0 ? 1 : this.p,
      processes: [],
      processesinfo: [],
    };
    this.loadProcessesInfo();
    this.loadProcesses();
  }
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ page: pageNumber });
    this.props.history.push("/?page=" + pageNumber);
    this.props.history.go();
  }

  async loadProcessesInfo() {
    await api.get(`/process/process_info`).then((respose) => {
      this.setState({ processesinfo: respose.data });
    });
  }

  async loadProcesses() {
    await api.get(`/process?page=` + this.state.page).then((respose) => {
      this.setState({ processes: respose.data });
    });
  }

  render() {
    return (
      <>
        <Header />
        <S.Container>
          <S.Head>
            <Head title="SELEÇÕES" action="edit"></Head>
          </S.Head>
          <S.CardProcessStyle className="m-3">
            {this.state.processes.map((i) => {
              return (
                <CardProcess
                  href={
                    i.inprogress
                      ? "/process?_id=" + i._id
                      : "/old-process?" + i._id
                  }
                  title={i.title}
                  total_students={i.selected_studentes_name.length}
                  total_aid={i.aid_name.length}
                  color={i.inprogress ? "#5CB85C" : ""}
                />
              );
            })}
          </S.CardProcessStyle>

          <S.Head>
            {/* <Pagination_
              page={this.state.page}
              last={this.state.processesinfo.last_page}
            /> */}
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
              Total Processos: {this.state.processesinfo.total} - Total ativos:
              {this.state.processesinfo.total_active}
            </Row>
          </S.Head>
        </S.Container>
      </>
    );
  }
}

export default Home;
