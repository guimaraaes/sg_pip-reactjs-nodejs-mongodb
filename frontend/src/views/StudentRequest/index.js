import React from "react";
import FormSubmited from "../../components/FormSubmited";
import Header from "../../components/Header/index";
import api from "../../services/api";
import * as S from "./styles";

class StudentRequest extends React.Component {
  constructor(props) {
    super(props);
    this.id_process = this.props.location.pathname.split("/")[2];
    this.id_studentrequest = this.props.location.pathname.split("/")[3];

    this.state = {
      //student_request
      p_name: "",
      name: "",
      // status_coordinator: false,
      // status_coordinator_description: "",
      // aid_name: [],
      // parent_name: [],
      // parent_date_born: [],
      // parent_rent: [],
      // parent_profession: [],
      // motivation: "",
      // quiz: [],
      // documents: [],
    };
    this.loadProcess();
    this.loadStudentRequest();
  }
  handleChange = (e) => this.setState(e);

  componentDidUpdate() {
    if (this.props.onChange) {
      this.props.onChange(this.state);
    }
    // this.loadStudentRequest();
  }

  async loadProcess() {
    await api.get(`/process/` + this.id_process).then((response) => {
      this.setState({
        aid_name: response.data.aid_name,
        aid_quantity: response.data.aid_quantity,
        title: response.data.title,
      });
    });
  }

  async loadStudentRequest() {
    await api
      .get(`/student_request/` + this.id_studentrequest)
      .then((response) => {
        this.setState({
          name: response.data.name,
          status_coordinator: response.data.status_coordinator,
          status_coordinator_description:
            response.data.status_coordinator_description,
          aid_name_selected: response.data.aid_name,
          parent_name: response.data.parent_name,
          parent_date_born: response.data.parent_date_born,
          parent_rent: response.data.parent_rent,
          parent_profession: response.data.parent_profession,
          motivation: response.data.motivation,
          quiz: response.data.quiz,
          documents: response.data.documents,
        });
      });
  }
  render() {
    return (
      <>
        <Header />
        <S.Container>
          {/* {this.state.motivation} */}
          {/* {this.id_studentrequest}
          {this.state.name} */}

          {this.state.name ? (
            <>
              <FormSubmited
                id={this.id}
                aid_name={this.state.aid_name}
                aid_quantity={this.state.aid_quantity}
                title={this.state.title}
                name={this.state.name}
                status_coordinator={this.state.status_coordinator}
                status_coordinator_description={
                  this.state.status_coordinator_description
                }
                aid_name={this.state.aid_name}
                parent_name={this.state.parent_name}
                parent_date_born={this.state.parent_date_born}
                parent_rent={this.state.parent_rent}
                parent_profession={this.state.parent_profession}
                motivation={this.state.motivation}
                quiz={this.state.quiz}
                documents={this.state.documents}
                onChange={this.handleChange}
              />
            </>
          ) : null}
        </S.Container>
      </>
    );
  }
}

export default StudentRequest;
