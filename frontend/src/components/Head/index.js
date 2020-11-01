import React from "react";
import { Button, Image, Row } from "react-bootstrap";
import add from "../../assets/add.png";
import edit from "../../assets/edit.png";
import lupa from "../../assets/lupa.png";
import lupauser from "../../assets/lupauser.png";
import Search from "../Search";

class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_process: false,
      search_student: false,
    };
  }
  render() {
    return (
      <>
        <h1>{this.props.title} </h1>
        <Row>
          {this.state.search_process ? (
            <Search procura="Procurar por processo" />
          ) : null}
          <Button
            className="mr-3"
            onClick={() =>
              this.setState({
                search_process: !this.state.search_process,
                search_student: false,
              })
            }
          >
            <Image src={lupa}></Image>
          </Button>

          {this.state.search_student ? (
            <Search procura="Procurar por estudante" />
          ) : null}
          <Button
            className="mr-3"
            onClick={() =>
              this.setState({
                search_student: !this.state.search_student,
                search_process: false,
              })
            }
          >
            <Image src={lupauser}></Image>
          </Button>
          {this.props.action == "edit" ? (
            <Button>
              <a href="/new-process">
                cadastrar <Image src={add}></Image>
              </a>
            </Button>
          ) : (
            <Button>
              <a href="/new-process">
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
