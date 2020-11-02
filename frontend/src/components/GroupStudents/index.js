import React from "react";
import * as S from "./styles";

class GroupStudents extends React.Component {
  constructor(props) {
    super(props);
    this.color = "#5CB85C";
  }
  render() {
    return (
      <>
        <S.Container>
          <div class="card" style={{ width: "70%" }}>
            <div class="card-header Head"></div>
            <ul class="list-group list-group-flush">
              {this.props.students.map((i) => {
                return (
                  <>
                    <S.A color={i.status_coordinator ? "#5CB85C" : "#D9534F"}>
                      <a
                        class="list-group-item btn "
                        href={"/student-request/?_id=" + i._id}
                        color={this.color}
                      >
                        {i.name}
                      </a>
                    </S.A>
                  </>
                );
              })}
            </ul>
          </div>
        </S.Container>
      </>
    );
  }
}

export default GroupStudents;
