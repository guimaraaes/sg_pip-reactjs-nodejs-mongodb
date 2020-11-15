import React from "react";
import FormInfo from "../../components/FormInfo";
import Header from "../../components/Header/index";
import api from "../../services/api";
import * as S from "./styles";

class NewProcess extends React.Component {
  constructor(props) {
    super(props);

    this.id = this.props.location.pathname.split("/")[2];
    this.state = {
      title: "",
      inprogress: true,
    };
    this.process = 0;
    this.Save = this.Save.bind(this);
    this.Edit = this.Edit.bind(this);

    this.loadProcess();
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  }

  handleChange = (e) => this.setState(e);
  componentDidUpdate() {
    if (this.props.onChange) {
      this.props.onChange(this.state);
    }
  }

  async Save() {
    await api.post("/process", {
      aid_id: this.state.aid_id,
      aid_name: this.state.aid_name,
      aid_quantity: this.state.aid_quantity,
      title: this.state.title,
      inprogress: true,
      date_begin: this.state.date_begin,
      date_end: this.state.date_end,
    });
  }

  async loadProcess() {
    await api.get(`/process/` + this.id).then((response) => {
      this.setState({
        aid_id: response.data.aid_id,
        aid_name: response.data.aid_name,
        aid_quantity: response.data.aid_quantity,
        title: response.data.title,
        inprogress: true,
        date_begin: response.data.date_begin,
        date_end: response.data.date_end,
        process: response.data,
      });
    });
  }

  async Edit() {
    await api.put("/process/" + this.id, {
      aid_id: this.state.aid_id,
      aid_name: this.state.aid_name,
      aid_quantity: this.state.aid_quantity,
      title: this.state.title,
      inprogress: true,
      date_begin: this.state.date_begin,
      date_end: this.state.date_end,
    });
  }
  render() {
    return (
      <>
        <Header />
        <S.Container>
          {this.state.title ? (
            <>
              <FormInfo
                id={this.id}
                aid_name={this.state.aid_name}
                aid_quantity={this.state.aid_quantity}
                title={this.state.title}
                inprogress={this.state.inprogress}
                date_begin={this.state.date_begin}
                date_end={this.state.date_end}
                onChange={this.handleChange}
                Save={this.Save}
                Edit={this.Edit}
              />
            </>
          ) : null}
        </S.Container>
      </>
    );
  }
}

export default NewProcess;
