import React from "react";
import { Dropdown, DropdownButton, Table, Button } from "react-bootstrap";
import Search from "../Search";
import * as S from "./styles";

class GroupStudents extends React.Component {
  render() {
    return (
      <>
        <S.Container
          className="mb-5"
          color={this.props.color}
          colorHead={this.props.colorHead}
        >
          <Search procura={this.props.procura} />
          <div class="card" style={{ width: "28rem" }}>
            <div className="title" class="card-header">
              ALUNOS TIPO DE CADASTRO
            </div>
            <ul class="list-group list-group-flush">
              <a
                class="list-group-item text-dark btn "
                href={this.props.href}
                color={this.props.procura}
              >
                MATRICULA NOME
              </a>

              <p class="list-group-item text-dark text-center">mais x alunos</p>
            </ul>
          </div>
        </S.Container>
      </>
    );
  }
}

export default GroupStudents;
