import React, { useState } from "react";
import { Col, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import calendar from "../../assets/calendar.png";
import add from "../../assets/add.png";
import remove from "../../assets/remove.png";
import * as S from "./styles";
import InputMask from "react-input-mask";

class FormInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      bolsa_se: ["s", "a"],
      bolsa: [null],

      quantidade_se: ["s", "a"],
      quantidade: [null],

      data_inicio_se: ["s", "a"],
      data_inicio: [null],

      data_fim_se: ["s", "a"],
      data_fim: [null],
    };

    this.moradiaFamiliarCampus = null;
    this.validated = 1;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      [event.target.name]: value,
    });
  }

  render() {
    return (
      <>
        <S.Container>
          <Form
            fluid="md"
            noValidate
            validated={this.validated}
            onSubmit={this.handleSubmit}
          >
            <Form.Group>
              <InputGroup className="inputCalendar">
                <img src={calendar} alt="calendar"></img>
                <FormControl
                  placeholder="dd-mm-aaaa"
                  as={InputMask}
                  mask="99/99/9999"
                />
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2">até</InputGroup.Text>
                </InputGroup.Append>
                <FormControl
                  placeholder="dd-mm-aaaa"
                  as={InputMask}
                  mask="99/99/9999"
                />
              </InputGroup>
            </Form.Group>

            <Form.Group>
              <Form.Label>TÍTULO DA SELEÇÃO</Form.Label>
              <FormControl placeholder="Insira o título" />
            </Form.Group>
            <Form.Label>BOLSAS OFERTADAS</Form.Label>
            <InputGroup className="mb-3">
              <Form.Row>
                <Form.Group as={Col}>
                  <FormControl
                    placeholder="tipo bolsa"
                    name="bolsa"
                    value={this.state.bolsa}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <FormControl
                    as={InputMask}
                    placeholder="quantidade"
                    name="quantidade"
                    mask="99"
                    value={this.state.quantidade}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <FormControl
                    placeholder="data ínicio"
                    as={InputMask}
                    name="data_inicio"
                    mask="99/99/9999"
                    value={this.state.data_inicio}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <FormControl
                    placeholder="data_fim"
                    as={InputMask}
                    name="data_fim"
                    mask="99/99/9999"
                    value={this.state.fim}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Button
                    className="buttonAdd"
                    onClick={() =>
                      this.setState({
                        count: this.state.count + 1,
                        bolsa_se: this.state.bolsa_se.concat(this.state.bolsa),
                        quantidade_se: this.state.quantidade_se.concat(
                          this.state.quantidade
                        ),
                        data_inicio_se: this.state.data_inicio_se.concat(
                          this.state.data_inicio
                        ),
                        data_fim_se: this.state.data_fim_se.concat(
                          this.state.data_fim
                        ),
                      })
                    }
                  >
                    <img src={add}></img>
                  </Button>
                </Form.Group>
              </Form.Row>
            </InputGroup>
            {this.state.bolsa_se.map((currElement, index) => {
              return (
                <InputGroup className="mb-3">
                  <Form.Row>
                    <Form.Group as={Col}>
                      <FormControl placeholder={currElement} disabled />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <FormControl
                        placeholder={this.state.quantidade_se[index]}
                        disabled
                      />
                    </Form.Group>

                    <Form.Group as={Col}>
                      <FormControl
                        placeholder={this.state.data_inicio_se[index]}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <FormControl
                        placeholder={this.state.data_fim_se[index]}
                        disabled
                      />
                    </Form.Group>

                    <Form.Group as={Col}>
                      <Button
                        className="buttonAdd"
                        onClick={() =>
                          this.setState({
                            count: this.state.count - 1,

                            bolsa_se: this.state.bolsa_se.filter(
                              (e, i) => i !== index
                            ),
                            quantidade_se: this.state.quantidade_se.filter(
                              (e, i) => i !== index
                            ),
                            data_inicio_se: this.state.data_inicio_se.filter(
                              (e, i) => i !== index
                            ),
                            data_fim_se: this.state.data_fim_se.filter(
                              (e, i) => i !== index
                            ),
                          })
                        }
                      >
                        <img src={remove}></img>
                      </Button>
                    </Form.Group>
                  </Form.Row>
                </InputGroup>
              );
            })}
          </Form>
          <Button className="Button" variant="primary">
            CADASTRAR
          </Button>
        </S.Container>
      </>
    );
  }
}

export default FormInfo;
