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
      file: 1,
      aid_name_selected: "",
      // status_coordinator: false,
      // status_coordinator_description: "",
      // aid_name: [],
      // parent_name: [],
      // parent_date_born: [],
      // parent_rent: [],
      // parent_profession: [],
      // motivation: "",
      //grupo_familiar, moradia_campus, programa_social, bpc, doença_cronica, ensino médio, escolaridade, atividade remunerada
      documentsparent: [],
      parent_name: [],
      documents: [null, null, null, null, null, null, null, null],
      quiz: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      // documents: [],
    };
    // this.state.parent_name = [];

    this.Edit = this.Edit.bind(this);
    this.Upload = this.Upload.bind(this);
    this.onChange = this.onChange.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.state.parent_name = [];
    // this.state.parent_date_born = [];
    this.loadProcess();
    this.loadStudentRequest();
  }

  handleChange = (e) => this.setState(e);

  componentDidUpdate() {
    if (this.props.onChange) {
      this.props.onChange(this.state);
    }
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
          aid_name_selected: response.data.aid_name_selected,
          parent_name: response.data.parent_name,
          parent_date_born: response.data.parent_date_born,
          parent_rent: response.data.parent_rent,
          parent_profession: response.data.parent_profession,
          // documentsparent: response.data.documentsparent,
          motivation: response.data.motivation,
          quiz: String(response.data.quiz)
            .split(",")
            .map((i) => {
              return Number(i);
            }),

          documents: String(response.data.documents).split(","),
        });
      });
  }

  async Edit() {
    await api.put(`/student_request/` + this.id_studentrequest, {
      name: "Francisca Silva",
      id_process: this.id_process,
      status_coordinator: this.state.status_coordinator,
      status_coordinator_description: this.state.status_coordinator_description,
      aid_name_selected: this.state.aid_name_selected,
      parent_name: this.state.parent_name,
      parent_date_born: this.state.parent_date_born,
      parent_rent: this.state.parent_rent,
      parent_profession: this.state.parent_profession,
      documentsparent: this.state.documentsparent,
      motivation: this.state.motivation,
      quiz: this.state.quiz,
      documents: this.state.documents,
    });
  }
  onChange = (e) => {
    // alert(e.target.files);
    this.setState({ file: e.target.files[0] });
  };
  async Upload(e) {
    const formData = new FormData();
    formData.append("file", this.state.file);
    const position = e.target.value;
    const name = e.target.name;
    alert(e.target.name);
    // alert(e.target.value);
    // this.file = String(e.target.files[0].name);
    // this.setState({ file: e.target.files[0].name });
    await api.post("/student_request/upload", formData, {}).then((response) => {
      // alert(response.data.filename);
      if (name == "documents")
        this.state.documents[position] = response.data.filename;
      else this.state.documentsparent[position] = response.data.filename;

      this.setState({
        filename: response.data.filename,
      });
    });
  }

  render() {
    return (
      <>
        {/* {this.state.parent_name.length}
        {this.state.parent_name.length == 0
          ? ((this.state.parent_name = []), (this.state.parent_date_born = []))
          : null} */}
        <Header />
        {/* {this.state.name} */}
        {/* {this.id_studentrequest ? this.loadStudentRequest() : null} */}
        {/* aqqqqq{this.state.documentsparent.map((i) => i)} */}
        <S.Container>
          {this.state.name ? (
            <>
              <FormSubmited
                id={this.id}
                file={this.state.file}
                aid_name_selected={this.state.aid_name_selected}
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
                documentsparent={this.state.documentsparent}
                onChange={this.handleChange}
                Edit={this.Edit}
                Upload={this.Upload}
              />
            </>
          ) : null}
        </S.Container>
      </>
    );
  }
}

export default StudentRequest;
