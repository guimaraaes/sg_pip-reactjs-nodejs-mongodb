import moment from "moment";
import React from "react";
import { Button, Col, Form, FormControl, InputGroup } from "react-bootstrap";
import CurrencyInput from "react-currency-input";
import add from "../../assets/add.png";
import remove from "../../assets/remove.png";
import api from "../../services/api";
import * as S from "./styles";

class FormInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      aid: null,
      quantity: null,
      count: 0,
      aid_name: [],
      aid_quantity: [],
      title: null,
      inprogress: true,
      date_begin: null,
      date_end: null,
    };

    this.moradiaFamiliarCampus = null;
    this.validated = 1;

    this.handleChange = this.handleChange.bind(this);
    this.Save = this.Save.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      [event.target.name]: value,
    });
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
                  name="date_begin"
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
                  name="date_end"
                  type="date"
                  min={moment(this.state.date_begin).format("YYYY-MM-DD")}
                  onChange={this.handleChange}
                  required
                />
                {/* </Col> */}
              </InputGroup>
            </Form.Group>

            <Form.Group>
              <Form.Label>TÍTULO DA SELEÇÃO</Form.Label>
              <FormControl
                placeholder="Insira o título"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                required
              />
            </Form.Group>
            <Form.Label>BOLSAS OFERTADAS</Form.Label>
            <InputGroup>
              <Form.Group className="p-0 mr-2" md={5} as={Col}>
                <FormControl
                  placeholder="tipo bolsa"
                  type="text"
                  name="aid"
                  value={this.state.aid}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <CurrencyInput
                  className="form-control"
                  name="quantity"
                  placeholder="quantidade"
                  precision="0"
                  value={this.state.quantity}
                  onChangeEvent={this.handleChange}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Button
                  className="buttonAdd"
                  disabled={
                    !!this.state.aid && this.state.quantity ? false : true
                  }
                  onClick={() =>
                    this.setState({
                      count: this.state.count + 1,
                      aid_name: this.state.aid_name.concat(this.state.aid),
                      aid_quantity: this.state.aid_quantity.concat(
                        this.state.quantity
                      ),

                      aid: [],
                      quantity: null,
                    })
                  }
                >
                  <img src={add}></img>
                </Button>
              </Form.Group>
            </InputGroup>
            {this.state.aid_name.map((currElement, index) => {
              return (
                <InputGroup>
                  <Form.Group className="p-0 mr-2" md={5} as={Col}>
                    <FormControl placeholder={currElement} disabled />
                  </Form.Group>
                  <Form.Group>
                    <FormControl
                      placeholder={this.state.aid_quantity[index]}
                      disabled
                    />
                  </Form.Group>

                  <Form.Group>
                    <Button
                      className="buttonAdd"
                      onClick={() =>
                        this.setState({
                          count: this.state.count - 1,

                          aid_name: this.state.aid_name.filter(
                            (e, i) => i !== index
                          ),
                          aid_quantity: this.state.aid_quantity.filter(
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
          <Button className="Button" variant="primary" onClick={this.Save}>
            CADASTRAR
          </Button>
        </S.Container>
      </>
    );
  }
}

export default FormInfo;
