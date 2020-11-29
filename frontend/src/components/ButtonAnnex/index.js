import React from "react";
import { Button } from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

class ButtonAnnex extends React.Component {
  constructor(props) {
    super(props);
    this.value = this.props.value - 1;
    this.Upload = this.props.Upload.bind(this);
    this.handleChange = this.props.handleChange.bind(this);
    this.FileChange = this.props.FileChange.bind(this);
  }

  render() {
    return (
      <>
        {this.props.documents[this.value] ? (
          <>
            <Button
              value={this.value}
              variant="danger"
              onClick={() => {
                confirmAlert({
                  title: "Exclusão permanente",
                  message: "Deseja excluir o documento?",
                  buttons: [
                    {
                      label: "Sim",
                      onClick: () => {
                        this.props.documents[this.value] = null;
                        this.props.handleChange(this.props.documents);
                      },
                    },
                    {
                      label: "Não",
                    },
                  ],
                });
              }}
            >
              Remover
            </Button>
            <a
              target="_blank"
              href={
                "http://localhost:9000/student_request/image/" +
                this.props.documents[this.value]
              }
            >
              Visualizar
            </a>
          </>
        ) : (
          <>
            <Button value={this.value} onClick={this.props.Upload}>
              Cadastrar
            </Button>
            <input type="file" name="file" onChange={this.props.FileChange} />
          </>
        )}
      </>
    );
  }
}

export default ButtonAnnex;
