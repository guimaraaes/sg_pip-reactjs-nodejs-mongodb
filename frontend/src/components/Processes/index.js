import React from "react";
import CardProcess from "../CardProcess";
import * as S from "./styles";

class Processes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <S.CardProcessStyle className="m-3">
          {this.props.processes.map((i) => {
            return (
              <CardProcess
                href={
                  this.props.student_mode
                    ? "/student-request/" + i._id
                    : i.inprogress
                    ? "/process/" + i._id
                    : "/old-process/?" + i._id
                }
                // href={
                //   i.inprogress ? "/process/" + i._id : "/old-process/?" + i._id
                // }
                title={i.title}
                date_end={i.date_end}
                total_aid={i.aid_name.length}
                color={i.inprogress ? "#5CB85C" : ""}
              />
            );
          })}
        </S.CardProcessStyle>
      </>
    );
  }
}

export default Processes;
