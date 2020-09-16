import React from "react";
import { Dropdown, DropdownButton, Table, Button } from "react-bootstrap";
import Search from "../Search";
import * as S from "./styles";
import alert from "../../assets/alert.png";

class GroupStudents extends React.Component {
  render() {
    return (
      <>
        <S.Container color={this.props.color} colorHead={this.props.colorHead}>
          <div class="card" style={{ width: "50%" }}>
            <div class="card-header Head">
              ALUNOS TIPO DE CADASTRO{" "}
              {this.props.alert ? (
                <button>
                  {" "}
                  <img src={alert}></img>{" "}
                </button>
              ) : null}
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
