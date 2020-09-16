import React, { useState } from "react";
import {
  Col,
  Button,
  Form,
  InputGroup,
  FormControl,
  Container,
  Row,
} from "react-bootstrap";
import calendar from "../../assets/calendar.png";
import add from "../../assets/add.png";
import remove from "../../assets/remove.png";
import * as S from "./styles";
import InputMask from "react-input-mask";
import moment from "moment";
import CurrencyInput from "react-currency-input";

class FormInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data_inicio: null,
      data_fim: null,

      count: 0,
      bolsa_se: [],
      bolsa: null,

      quantidade_se: [],
      quantidade: null,

      data_inicio_bolsa_se: [],
      data_inicio_bolsa: null,

      data_fim_bolsa_se: [],
      data_fim_bolsa: null,
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
              <InputGroup className="inputCalendar m-0 p-0" md={5} as={Col}>
                {/* <Col md={3}> */}
                <FormControl
                  placeholder="dd-mm-aaaa"
                  name="data_inicio"
                  type="date"
                  min={moment().format("YYYY-MM-DD")}
                  onChange={this.handleChange}
                  required
                />
                {/* </Col> */}
                <InputGroup.Text>até</InputGroup.Text>
                {/* <Col md={3}> */}
                <FormControl
                  sm
                  placeholder="dd-mm-aaaa"
                  name="data_fim"
                  type="date"
                  min={moment(this.state.data_inicio).format("YYYY-MM-DD")}
                  onChange={this.handleChange}
                  required
                />
                {/* </Col> */}
              </InputGroup>
            </Form.Group>

            <Form.Group>
              <Form.Label>TÍTULO DA SELEÇÃO</Form.Label>
              <FormControl placeholder="Insira o título" required />
            </Form.Group>
            <Form.Label>BOLSAS OFERTADAS</Form.Label>
            <InputGroup>
              <Form.Group className="p-0 mr-2" md={5} as={Col}>
                <FormControl
                  placeholder="tipo bolsa"
                  type="text"
                  name="bolsa"
                  value={this.state.bolsa}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <CurrencyInput
                  className="form-control"
                  name="quantidade"
                  placeholder="quantidade"
                  precision="0"
                  value={this.state.quantidade}
                  onChangeEvent={this.handleChange}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Button
                  className="buttonAdd"
                  disabled={
                    !!this.state.bolsa && this.state.quantidade ? false : true
                  }
                  onClick={() =>
                    this.setState({
                      count: this.state.count + 1,
                      bolsa_se: this.state.bolsa_se.concat(this.state.bolsa),
                      quantidade_se: this.state.quantidade_se.concat(
                        this.state.quantidade
                      ),
                      data_inicio_bolsa_se: this.state.data_inicio_bolsa_se.concat(
                        this.state.data_inicio_bolsa
                      ),
                      data_fim_bolsa_se: this.state.data_fim_bolsa_se.concat(
                        this.state.data_fim_bolsa
                      ),

                      bolsa: [],
                      quantidade: null,
                      data_inicio_bolsa: [],
                      data_fim_bolsa: [],
                    })
                  }
                >
                  <img src={add}></img>
                </Button>
              </Form.Group>
            </InputGroup>
            {this.state.bolsa_se.map((currElement, index) => {
              return (
                <InputGroup>
                  <Form.Group className="p-0 mr-2" md={5} as={Col}>
                    <FormControl placeholder={currElement} disabled />
                  </Form.Group>
                  <Form.Group>
                    <FormControl
                      placeholder={this.state.quantidade_se[index]}
                      disabled
                    />
                  </Form.Group>

                  <Form.Group>
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
