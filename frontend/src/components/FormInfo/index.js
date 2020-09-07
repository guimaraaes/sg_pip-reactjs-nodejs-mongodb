import React, { useState } from "react";
import { Col, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import calendar from "../../assets/calendar.png";
import add from "../../assets/add.png";
import remove from "../../assets/remove.png";
import * as S from "./styles";
import InputMask from "react-input-mask";
import moment from "moment";

class FormInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data_inicio: null,
      data_fim: null,

      count: 0,
      bolsa_se: [],
      bolsa: [null],

      quantidade_se: [],
      quantidade: [null],

      data_inicio_bolsa_se: [],
      data_inicio_bolsa: [null],

      data_fim_bolsa_se: [],
      data_fim_bolsa: [null],
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
            noValidate
            validated={this.validated}
            onSubmit={this.handleSubmit}
          >
            <Form.Group>
              <InputGroup className="inputCalendar">
                <FormControl
                  placeholder="dd-mm-aaaa"
                  name="data_inicio"
                  type="date"
                  min={moment().format("YYYY-MM-DD")}
                  onChange={this.handleChange}
                />

                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2">até</InputGroup.Text>
                </InputGroup.Append>
                <FormControl
                  placeholder="dd-mm-aaaa"
                  name="data_fim"
                  type="date"
                  min={moment(this.state.data_inicio).format("YYYY-MM-DD")}
                  onChange={this.handleChange}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group>
              <Form.Label>TÍTULO DA SELEÇÃO</Form.Label>
              <FormControl placeholder="Insira o título" />
            </Form.Group>
            <Form.Label>BOLSAS OFERTADAS</Form.Label>

            {this.state.data_fim ? (
              <>
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
                        name="data_inicio_bolsa"
                        type="date"
                        min={moment(this.state.data_inicio).format(
                          "YYYY-MM-DD"
                        )}
                        max={moment(this.state.data_fim).format("YYYY-MM-DD")}
                        value={this.state.data_inicio_bolsa}
                        onChange={this.handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <InputGroup.Text id="basic-addon2">até</InputGroup.Text>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <FormControl
                        name="data_fim_bolsa"
                        type="date"
                        min={moment(this.state.data_inicio).format(
                          "YYYY-MM-DD"
                        )}
                        max={moment(this.state.data_fim).format("YYYY-MM-DD")}
                        value={this.state.data_fim_bolsa}
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
                            bolsa_se: this.state.bolsa_se.concat(
                              this.state.bolsa
                            ),
                            quantidade_se: this.state.quantidade_se.concat(
                              this.state.quantidade
                            ),
                            data_inicio_bolsa_se: this.state.data_inicio_bolsa_se.concat(
                              this.state.data_inicio_bolsa
                            ),
                            data_fim_bolsa_se: this.state.data_fim_bolsa_se.concat(
                              this.state.data_fim_bolsa
                            ),
                          })
                        }
                      >
                        <img src={add}></img>
                      </Button>
                    </Form.Group>
                  </Form.Row>
                </InputGroup>
              </>
            ) : null}

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
                        placeholder={moment(
                          this.state.data_inicio_bolsa_se[index]
                        ).format("L")}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <InputGroup.Text id="basic-addon2">até</InputGroup.Text>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <FormControl
                        placeholder={moment(
                          this.state.data_fim_bolsa_se[index]
                        ).format("L")}
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
                            data_inicio_bolsa_se: this.state.data_inicio_bolsa_se.filter(
                              (e, i) => i !== index
                            ),
                            data_fim_bolsa_se: this.state.data_fim_bolsa_se.filter(
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
