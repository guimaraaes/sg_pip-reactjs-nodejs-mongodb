import moment from "moment";
import React from "react";
import { Button, Col, Form, FormControl, InputGroup } from "react-bootstrap";
import add from "../../assets/add.png";
import remove from "../../assets/remove.png";
import * as S from "./styles";

class FormInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      aid: "",
      quantity: "",

      aid_name: this.props.aid_name,
      aid_quantity: this.props.aid_quantity,
      // aid_name: String(this.props.aid_name).split(","),
      // aid_quantity: String(this.props.aid_quantity).split(","),
      // aid_name: [this.props.aid_name],
      // aid_quantity: [this.props.aid_quantity],
      title: this.props.title,
      inprogress: this.props.inprogress,
      date_begin: this.props.date_begin,
      date_end: this.props.date_end,
    };
    this.title = this.props.title;
    this.id = this.props.id;

    this.moradiaFamiliarCampus = null;
    this.validated = 1;

    this.handleChange = this.handleChange.bind(this);
    this.Save = this.props.Save.bind(this);
    this.Edit = this.props.Edit.bind(this);
    this.FormValidated = false;
  }

  // handleChange = (e) => this.setState(e);

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.props.onChange(this.state);
    });
  };

  render() {
    return (
      <>
        <S.Container>
          {
            (this.FormValidated =
              this.state.date_begin &&
              this.state.date_end &&
              this.state.title &&
              this.state.aid_name[0]
                ? true
                : false)
          }
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
            {/* {this.state.title}
            {this.state.aid}
            {this.state.quantity} */}
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
                <FormControl
                  className="form-control"
                  name="quantity"
                  placeholder="quantidade"
                  min="0"
                  type="number"
                  value={this.state.quantity}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Button
                  className="buttonAdd"
                  disabled={
                    this.state.aid && this.state.quantity ? false : true
                  }
                  onClick={() =>
                    this.setState(
                      {
                        count: this.state.count + 1,
                        aid_name: this.state.aid_name.concat(this.state.aid),
                        aid_quantity: this.state.aid_quantity.concat(
                          this.state.quantity
                        ),

                        aid: "",
                        quantity: "",
                      },
                      () => {
                        this.props.onChange(this.state);
                      }
                    )
                  }
                >
                  <img src={add}></img>
                </Button>
              </Form.Group>
              {this.state.aid_name.lenght > 0 ? 1 : this.state.aid_name.lenght}
            </InputGroup>
            {/* {Array.from(this.state.process.aid_name)} */}
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
                        this.setState(
                          {
                            count: this.state.count - 1,
                            aid_name: this.state.aid_name.filter(
                              (e, i) => i !== index
                            ),
                            aid_quantity: this.state.aid_quantity.filter(
                              (e, i) => i !== index
                            ),
                          },
                          () => {
                            this.props.onChange(this.state);
                          },
                          () => {
                            this.props.onChange(this.state);
                          }
                        )
                      }
                    >
                      <img src={remove}></img>
                    </Button>
                  </Form.Group>
                </InputGroup>
              );
            })}
          </Form>
          {this.id ? (
            <Button
              className="Button"
              variant="primary"
              onClick={this.Edit}
              disabled={this.FormValidated ? false : true}
            >
              EDITAR
            </Button>
          ) : (
            <Button
              className="Button"
              variant="primary"
              onClick={this.Save}
              disabled={this.FormValidated ? false : true}
            >
              CADASTRAR
            </Button>
          )}
        </S.Container>
      </>
    );
  }
}

export default FormInfo;
