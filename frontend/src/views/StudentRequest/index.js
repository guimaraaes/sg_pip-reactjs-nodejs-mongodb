import React from "react";
import FormSubmited from "../../components/FormSubmited";
import Header from "../../components/Header/index";
import * as S from "./styles";

class StudentRequest extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.location.pathname.split("/")[2];

    this.state = {
      student_request: [],
      process: [],
      name_cp: [],
      parentesco_cp: [],
      age_cp: [],
      occupation_cp: [],
      monthly_income_cp: [],

      motivation: "",
    };
  }
  handleChange = (e) => this.setState(e);
  render() {
    return (
      <>
        <Header />
        {this.state.name_cp}

        <S.Container>
          <FormSubmited id={this.id} onChange={this.handleChange} />
        </S.Container>
      </>
    );
  }
}

export default StudentRequest;
