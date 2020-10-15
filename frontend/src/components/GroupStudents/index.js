import React from "react";
import { Dropdown, DropdownButton, Table, Button } from "react-bootstrap";
import Search from "../Search";
import * as S from "./styles";

class GroupStudents extends React.Component {
  render() {
    return (
      <>
        <S.Container color={this.props.color} >
          <div class="card" style={{ width: "70%" }}>
            <div class="card-header Head">
                
            </div>
            <ul class="list-group list-group-flush">
            <a
                class="list-group-item btn "
                href={this.props.href + "?1"}
                color={this.props.color}
              >
                MATRICULA NOME
              </a>
              <a
                class="list-group-item btn "
                href={this.props.href}
                color={this.props.color}
              >
                MATRICULA NOME
              </a>
              <a
                class="list-group-item btn "
                href={this.props.href}
                color={this.props.color}
              >
                MATRICULA NOME
              </a>
              <a
                class="list-group-item btn "
                href={this.props.href}
              >
                MATRICULA NOME
              </a>
              <a
                class="list-group-item btn "
                href={this.props.href}
                color={"#D9534F"}
              >
                MATRICULA NOME
              </a>
            </ul>
          </div>
        </S.Container>
      </>
    );
  }
}

export default GroupStudents;
