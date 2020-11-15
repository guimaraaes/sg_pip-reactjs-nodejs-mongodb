import React from "react";
import { Button, Form, FormControl, Image, Row } from "react-bootstrap";
import add from "../../assets/add.png";
import edit from "../../assets/edit.png";
import lupa from "../../assets/lupa.png";
import lupauser from "../../assets/lupauser.png";

class Head extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search_process: false,
      search_student: false,
      title_process_search: this.props.title_process_search,
      name_student_search: this.props.name_student_search,
      process: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.props.onChange(this.state);
    });
    this.state.title_process_search
      ? (this.state.title = "SELEÇÃO")
      : (this.state.title = "DISCENTE");
  };
  onKeyUp(event) {
    // window.location.href = "as";
    this.props.hist.push(
      this.props.loc + "&name_student_search=" + this.state.name_student_search
    );
    this.props.hist.go();
    var key = event.which || event.keyCode;
    if (event.keyCode == 13) {
      // alert("Enter clicked!!!");
      // window.location.href = "as";
      this.props.hist.push(
        this.props.loc +
          "&name_student_search=" +
          this.state.name_student_search
      );
      this.props.hist.go();
    }
  }
  render() {
    return (
      <>
        <h1>sg PIP</h1>

        <Row>
          {this.props.action == "new" ? (
            <>
              {this.state.search_process ? (
                <>
                  <Form inline>
                    <FormControl
                      class="mb-4"
                      type="text"
                      name="title_process_search"
                      value={this.state.title_process_search}
                      onChange={this.handleChange}
                      placeholder="Procurar por processo"
                      className="mr-sm-2"
                    />
                  </Form>
                </>
              ) : null}
              <Button
                className="mr-3"
                onClick={() =>
                  this.setState({
                    search_process: !this.state.search_process,
                    search_student: false,
                    name_student_search: "",
                  })
                }
              >
                <Image src={lupa}></Image>
              </Button>
            </>
          ) : (
            <>
              {this.state.search_student ? (
                <>
                  <Form inline>
                    <FormControl
                      onPressEnter={this.onKeyUp}
                      class="mb-4"
                      type="text"
                      name="name_student_search"
                      value={this.state.name_student_search}
                      onChange={this.handleChange}
                      placeholder="Procurar por estudante"
                      className="mr-sm-2"
                      href="s"
                      // onClick={() => (window.location.href = "as")}
                    />
                  </Form>
                </>
              ) : null}
              <Button
                className="mr-3"
                onClick={() =>
                  this.setState({
                    search_student: !this.state.search_student,
                    search_process: false,
                    title_process_search: "",
                  })
                }
              >
                <Image src={lupauser}></Image>
              </Button>
            </>
          )}

          {this.props.action == "new" ? (
            <Button>
              <a href="/new-process">
                cadastrar <Image src={add}></Image>
              </a>
            </Button>
          ) : (
            <Button>
              <a href={"/new-process/?_id=" + this.props.id}>
                editar <Image src={edit}></Image>
              </a>
            </Button>
          )}
        </Row>
      </>
    );
  }
}

export default Head;
