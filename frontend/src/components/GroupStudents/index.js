import React from "react";
import * as S from "./styles";

class GroupStudents extends React.Component {
  render() {
    return (
      <>
        <S.Container color={this.props.color}>
          <div class="card" style={{ width: "70%" }}>
            <div class="card-header Head"></div>
            <ul class="list-group list-group-flush">
              {/* {this.props.students.map((i) => {
                return (
                  <>
                    <a
                      class="list-group-item btn "
                      href={this.props.href + "?1"}
                      color={this.props.color}
                    >
                      {i}
                    </a>
                  </>
                );
              })} */}
              {this.props.students}
              <a
                class="list-group-item btn "
                href={this.props.href}
                color={"#D9534F"}
              >
                MATRICULA NOMEss
              </a>
            </ul>
          </div>
        </S.Container>
      </>
    );
  }
}

export default GroupStudents;
