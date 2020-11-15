import moment from "moment";
import React from "react";
import { Button, Col, Form, FormControl, InputGroup } from "react-bootstrap";
import CurrencyInput from "react-currency-input";
import add from "../../assets/add.png";
import remove from "../../assets/remove.png";
import api from "../../services/api";
import * as S from "./styles";

require("moment/locale/pt.js");

class FormSubmited extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      student_request: [],
      process: [],
      process2: [1, 2],

      count: 0,
      name_cp: [],
      name: null,

      parentesco_cp: [],
      parentesco: null,

      age_cp: [],
      age: [],

      occupation_cp: [],
      occupation: null,

      monthly_income_cp: [],
      monthly_income: null,

      motivation: "",
    };

    this.annex_degree = null;
    this.annex_paid_activity = null;
    this.annex_social_program = null;
    this.annex_bpc = null;
    this.annex_chronic_disease = null;

    this.annex_family_home = null;
    this.check = null;
    this.validated = 1;
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.loadProcess();
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.props.onChange(this.state);
    });
    // if (e.target.value) {
    //   const value = e.target.value;
    //   this.setState({
    //     [e.target.name]: value,
    //   });
    // } else {
    //   const value = e.target.value;
    //   this.setState({
    //     [e.target.name]: null,
    //   });
    // }
  };

  async loadProcess() {
    await api.get(`/process/` + this.props.id).then((respose) => {
      this.setState({ process: respose.data });
    });
  }

  // handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   this.setValidated(true);
  // };

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
              <FormControl
                placeholder={this.state.student_request.name}
                disabled
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustomSizeLg">
              <Form.Label>BOLSA</Form.Label>
              <Form.Control as="select" required>
                <option value="" disabled selected>
                  Escolher bolsa
                </option>
                {this.state.process2.map((i) => {
                  return (
                    <>
                      <option>Bolsa i</option>
                    </>
                  );
                })}
              </Form.Control>
            </Form.Group>
            <Form.Label>COMPOSIÇÃO FAMILIAR</Form.Label>
            <InputGroup className="mb-3">
              <Form.Group className="p-0 mr-2" md={4} as={Col}>
                <FormControl
                  placeholder="nome (parentesco)"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="p-0 mr-2">
                <FormControl
                  placeholder="nascimento"
                  name="age"
                  type="date"
                  max={moment().format("YYYY-MM-DD")}
                  value={this.state.age}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              {moment().format("YYYY") -
                moment(this.state.age).format("YYYY") >=
              16 ? (
                <>
                  <Form.Group className="p-0 mr-2" md={2} as={Col}>
                    <CurrencyInput
                      className="form-control"
                      name="monthly_income"
                      placeholder="R$"
                      required
                      decimalSeparator=","
                      thousandSeparator="."
                      prefix="R$"
                      value={this.state.monthly_income}
                      onChangeEvent={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="p-0 mr-2" as={Col}>
                    <FormControl
                      placeholder="profissão"
                      name="occupation"
                      value={this.state.occupation}
                      onChange={this.handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Button
                      className="buttonAdd"
                      disabled={
                        !!this.state.name &&
                        this.state.age &&
                        this.state.occupation &&
                        this.state.monthly_income
                          ? false
                          : true
                      }
                      onClick={() =>
                        this.setState({
                          count: this.state.count + 1,
                          name_cp: this.state.name_cp.concat(this.state.name),

                          age_cp: this.state.age_cp.concat(this.state.age),
                          occupation_cp: this.state.occupation_cp.concat(
                            this.state.occupation
                          ),
                          monthly_income_cp: this.state.monthly_income_cp.concat(
                            this.state.monthly_income
                          ),
                          name: [],

                          age: [],
                          occupation: null,
                          monthly_income: null,
                        })
                      }
                    >
                      <img src={add}></img>
                    </Button>
                  </Form.Group>
                </>
              ) : (
                <>
                  <Form.Group>
                    <Button
                      className="buttonAdd"
                      disabled={
                        !!this.state.name && this.state.age ? false : true
                      }
                      onClick={() =>
                        this.setState({
                          count: this.state.count + 1,
                          name_cp: this.state.name_cp.concat(this.state.name),

                          age_cp: this.state.age_cp.concat(this.state.age),
                          occupation_cp: this.state.occupation_cp.concat(
                            this.state.occupation
                          ),
                          monthly_income_cp: this.state.monthly_income_cp.concat(
                            this.state.monthly_income
                          ),
                          name: [],

                          age: [],
                          occupation: null,
                          monthly_income: null,
                        })
                      }
                    >
                      <img src={add}></img>
                    </Button>
                  </Form.Group>
                </>
              )}
            </InputGroup>
            {this.state.name_cp.map((currElement, index) => {
              return (
                <InputGroup className="mb-3">
                  <Form.Group className="p-0 mr-2" md={4} as={Col}>
                    <FormControl placeholder={currElement} disabled />
                  </Form.Group>
                  <Form.Group className="p-0 mr-2">
                    <FormControl
                      placeholder={moment(this.state.age_cp[index]).format("L")}
                      disabled
                    />
                  </Form.Group>
                  {moment().format("YYYY") -
                    moment(this.state.age_cp[index]).format("YYYY") >=
                  18 ? (
                    <>
                      <Form.Group className="p-0 mr-2" md={2} as={Col}>
                        <FormControl
                          placeholder={this.state.monthly_income_cp[index]}
                          disabled
                        />
                      </Form.Group>
                      <Form.Group className="p-0 mr-2" as={Col}>
                        <FormControl
                          placeholder={this.state.occupation_cp[index]}
                          disabled
                        />
                      </Form.Group>
                    </>
                  ) : null}

                  <Form.Group>
                    <Button
                      className="buttonAdd"
                      onClick={() =>
                        this.setState({
                          count: this.state.count - 1,

                          name_cp: this.state.name_cp.filter(
                            (e, i) => i !== index
                          ),

                          age_cp: this.state.age_cp.filter(
                            (e, i) => i !== index
                          ),
                          occupation_cp: this.state.occupation_cp.filter(
                            (e, i) => i !== index
                          ),

                          monthly_income_cp: this.state.monthly_income_cp.filter(
                            (e, i) => i !== index
                          ),
                        })
                      }
                    >
                      <img src={remove}></img>
                    </Button>
                  </Form.Group>
                  <Form.File.Input />
                </InputGroup>
              );
            })}
            <Form.Group>
              <Form.Label>MOTIVAÇÃO PARA SER BOLSISTA</Form.Label>
              <Form.Control
                as="textarea"
                name="motivation"
                value={this.state.motivation}
                onChange={this.handleChange}
                rows="3"
                required
              />
            </Form.Group>
            <Form.Label>QUESTIONÁRIO</Form.Label>
            <Form.Group>
              <Form.Label>
                VOCÊ SE AUTO DECLARA PERTENCENTE A QUAL RAÇA/COR/ETNIA?
              </Form.Label>
              <Col>
                <Form.Check type="radio" label="Branco " name="race" required />
                <Form.Check type="radio" label="Negro " name="race" />
                <Form.Check type="radio" label="Pardo " name="race" />
                <Form.Check type="radio" label="Amarelo " name="race" />
                <Form.Check type="radio" label="Indígena " name="race" />
                <Form.Check type="radio" label="Quilombola " name="race" />
                <Form.Check type="radio" label="Não informada " name="race" />
              </Col>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                QUAL A DISTÂNCIA GEOGRÁFICA DO LOCAL DE MORADIA DE SEU GRUPO
                FAMILIAR PARA O CAMPUS NO QUAL VOCÊ ESTÁ MATRICULADO?
              </Form.Label>
              <Col>
                <Form.Check
                  type="radio"
                  label="De 0 km até 80 km "
                  name="housing_distance"
                  required
                />
                <Form.Check
                  type="radio"
                  label="De 81 km até 300 km "
                  name="housing_distance"
                />
                <Form.Check
                  type="radio"
                  label="Acima de 300 km "
                  name="housing_distance"
                />
              </Col>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                QUAL O LOCAL DE MORADIA DE SEU GRUPO FAMILIAR?
              </Form.Label>
              <Col>
                <Form.Check
                  type="radio"
                  label="ZONA RURAL "
                  name="zone"
                  required
                />
                <Form.Check type="radio" label="ZONA URBANA " name="zone" />
              </Col>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                SEU GRUPO FAMILIAR RESIDE NA CIDADE DO CAMPUS ONDE VOCÊ ESTÁ
                MATRICULADO?
              </Form.Label>
              <Col>
                <Form.Check
                  type="radio"
                  label="Sim "
                  name="family_home_in_campus_city"
                  required
                  onChange={() =>
                    this.setState({
                      count: (this.annex_family_home = null),
                    })
                  }
                />
                <Form.Check
                  type="radio"
                  label="Não "
                  name="family_home_in_campus_city"
                  onChange={() =>
                    this.setState({
                      count: (this.annex_family_home = 1),
                    })
                  }
                />
              </Col>
            </Form.Group>
            <Form.File.Input />
            {this.annex_family_home ? (
              <Form.Group>
                <Form.Label>
                  CASO VOCÊ RESIDA NA CIDADE DO CAMPUS ONDE ESTÁ MATRICULADO,
                  QUAL A SUA SITUAÇÃO ATUAL DE MORADIA?
                </Form.Label>
                <Col>
                  <Form.Check
                    type="radio"
                    required
                    label="Não moro na cidade do campus "
                    name="campus_city_housing"
                  />
                  <Form.Check
                    type="radio"
                    label="Sozinho "
                    name="campus_city_housing"
                  />
                  <Form.Check
                    type="radio"
                    label="Com amigos "
                    name="campus_city_housing"
                  />
                  <Form.Check
                    type="radio"
                    label="Com familiares ou parentes "
                    name="campus_city_housing"
                  />
                  <Form.Check
                    type="radio"
                    label="Em moradia estudantil, casa do estudante ou similares "
                    name="campus_city_housing"
                  />
                  <Form.Check
                    type="radio"
                    label="Em pensão ou pensionato"
                    name="campus_city_housing"
                  />
                </Col>
                <Form.File.Input />
              </Form.Group>
            ) : null}
            <Form.Group>
              <Form.Label>
                VOCÊ OU ALGUM MEMBRO DE SEU GRUPO FAMILIAR SÃO BENEFICIÁRIOS DE
                PROGRAMAS SOCIAIS, TAIS COMO BOLSA FAMÍLIA, AUXÍLIO EMERGENCIAL,
                SEGURO DEFESO, TARIFA SOCIAL DE ENERGIA ELÉTRICA?
              </Form.Label>
              <Col>
                <Form.Check
                  type="radio"
                  label="Sim "
                  required
                  name="social_program"
                  onChange={() =>
                    this.setState({
                      count: (this.annex_social_program = 1),
                    })
                  }
                />
                <Form.Check
                  type="radio"
                  label="Não "
                  name="social_program"
                  onChange={() =>
                    this.setState({
                      count: (this.annex_social_program = null),
                    })
                  }
                />
              </Col>
            </Form.Group>
            {this.annex_social_program ? <Form.File.Input /> : null}
            <Form.Group>
              <Form.Label>
                VOCÊ OU ALGUM MEMBRO DE SUA FAMÍLIA SÃO BENEFICIÁRIOS DO
                BENEFÍCIO DE PRESTAÇÃO CONTINUADA (BPC)?
              </Form.Label>
              <Col>
                <Form.Check
                  type="radio"
                  label="Sim "
                  name="bpc"
                  required
                  onChange={() =>
                    this.setState({
                      count: (this.annex_bpc = 1),
                    })
                  }
                />
                <Form.Check
                  type="radio"
                  label="Não "
                  name="bpc"
                  required
                  onChange={() =>
                    this.setState({
                      count: (this.annex_bpc = null),
                    })
                  }
                />
              </Col>
            </Form.Group>
            {this.annex_bpc ? <Form.File.Input /> : null}
            <Form.Group>
              <Form.Label>
                37) HÁ EM SEU GRUPO FAMILIAR ALGUM MEMBRO DIAGNOSTICADO COM
                DOENÇAS CRÔNICAS E/OU TRANSTORNOS MENTAIS E/OU DEFICIÊNCIA COM
                ASPECTOS LIMITANTES? LEIA ATENTAMENTE AS OPÇÕES DE RESPOSTA A
                SEGUIR.
              </Form.Label>
              <Col>
                <Form.Check
                  type="radio"
                  required
                  label="Sim. Doença crônica (transmissíveis ou não), que gera incapacitação ou perda funcional, que requer assistência de saúde continuada e que é comprovada por documento de saúde (laudos, atestados, perícias, exames etc.) Exemplos: doenças cardiovasculares e cerebrovasculares (cardiopatias, acidente vascular encefálico, doença arterial periférica), doenças respiratórias crônicas (asma, doença pulmonar obstrutiva crônica), câncer, HIV-AIDS, doenças neurológicas (doença de Parkinson, esclerose múltipla, demência devido à doença de Alzheimer, microcefalia, epilepsia, paralisia cerebral), lúpus, fibromialgia, entre outras.
                  Sim. Transtorno mental e do comportamento (transtornos depressivos, transtorno afetivo bipolar, transtornos de ansiedade, esquizofrenia, transtorno por abuso de álcool e outras substâncias psicoativas, entre outros) ou condição atípica relacionada ao neurodesenvolvimento (deficiência intelectual, espectro autista, transtorno de déficit de atenção e hiperatividade, entre outros), comprovado por documento de saúde (laudos, atestados, perícias, exames etc.).
                  Sim. Deficiência física e/ou sensorial com aspectos limitantes (por exemplo, paraplegia, hemiplegia, deficiência auditiva [bilateral, parcial ou total], deficiência visual [cegueira e baixa visão], entre outros)."
                  name="chronic_disease"
                  onChange={() =>
                    this.setState({
                      count: (this.annex_chronic_disease = 1),
                    })
                  }
                />
                <Form.Check
                  type="radio"
                  label="Não "
                  required
                  name="chronic_disease"
                  onChange={() =>
                    this.setState({
                      count: (this.annex_chronic_disease = null),
                    })
                  }
                />
              </Col>
            </Form.Group>
            {this.annex_chronic_disease ? <Form.File.Input /> : null}
            <Form.Group>
              <Form.Label>
                EM QUE TIPO DE INSTITUIÇÃO VOCÊ CURSOU O ENSINO MÉDIO?
              </Form.Label>
              <Col>
                <Form.Check
                  type="radio"
                  required
                  label="Todo em escola particular "
                  name="high_school"
                  value="todo-particular"
                />
                <Form.Check
                  type="radio"
                  label="Parte em escola pública ou filantrópica e parte em escola particular "
                  name="high_school"
                />
                <Form.Check
                  type="radio"
                  label="Em escola particular com bolsa integral (100%) "
                  name="high_school"
                />
                <Form.Check
                  type="radio"
                  label="Todo em escola pública ou filantrópica "
                  name="high_school"
                />
              </Col>
            </Form.Group>
            <Form.File.Input />
            <Form.Group>
              <Form.Label>QUAL A SUA ESCOLARIDADE?</Form.Label>
              <Col>
                <Form.Check
                  type="radio"
                  required
                  label="Cursando a primeira GRADUAÇÃO (inclusive alunos que concluíram o curso Interdisciplinar em Ciência e Tecnologia ou em Tecnologia da Informação e ingressaram em uma Engenharia)"
                  name="degree"
                  value="primeira-graduacao"
                  onChange={() =>
                    this.setState({ count: (this.annex_degree = null) })
                  }
                />
                <Form.Check
                  type="radio"
                  label="Portador de Diploma de Curso Tecnológico, cursando OUTRA GRADUAÇÃO"
                  name="degree"
                  value="diploma-tecnologo"
                  onChange={() =>
                    this.setState({ count: (this.annex_degree = 1) })
                  }
                />
                <Form.Check
                  type="radio"
                  label="Portador de Diploma de Curso Superior, cursando OUTRA GRADUAÇÃO"
                  value="diploma-superior"
                  name="degree"
                  onChange={() =>
                    this.setState({ count: (this.annex_degree = 1) })
                  }
                />
              </Col>
            </Form.Group>
            {this.annex_degree ? <Form.File.Input /> : null}
            <Form.Group>
              <Form.Label>
                VOCÊ POSSUI, NO PERÍODO LETIVO ATUAL, ALGUM BENEFÍCIO DA
                ASSISTÊNCIA ESTUDANTIL?
              </Form.Label>
              <Col>
                <Form.Check
                  type="radio"
                  required
                  label="Bolsa Permanência Acadêmica/Bolsa Apoio ao Esporte"
                  name="student_assistance"
                />
                <Form.Check
                  type="radio"
                  label=" Auxílio Alimentação/Auxílio Didático-Pedagógico/Auxílio Transporte/Auxílio Creche/Auxílio ou Portador de Necessidades Especiais "
                  name="student_assistance"
                />
                <Form.Check
                  type="radio"
                  label="Moradia Estudantil ou Auxílio Moradia acumulado com uma bolsa ou
        outro auxílio "
                  name="student_assistance"
                />
                <Form.Check
                  type="radio"
                  label="Somente Moradia Estudantil ou Auxílio Moradia "
                  name="student_assistance"
                />
                <Form.Check
                  type="radio"
                  label="Não "
                  name="student_assistance"
                />
              </Col>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                VOCÊ PARTICIPA DE ALGUMA DAS MODALIDADES ABAIXO DE FORMA
                REMUNERADA?
              </Form.Label>
              <Col>
                <Form.Check
                  label="Pesquisa, Extensão ou PET "
                  type="radio"
                  required
                  name="paid_activity"
                  onChange={() =>
                    this.setState({
                      count: (this.annex_paid_activity = 1),
                    })
                  }
                />
                <Form.Check
                  type="radio"
                  label="Monitoria "
                  name="paid_activity"
                  onChange={() =>
                    this.setState({
                      count: (this.annex_paid_activity = 1),
                    })
                  }
                />
                <Form.Check
                  type="radio"
                  label="Estágio "
                  name="paid_activity"
                  onChange={() =>
                    this.setState({
                      count: (this.annex_paid_activity = 1),
                    })
                  }
                />
                <Form.Check
                  type="radio"
                  label="Bolsa Permanência do MEC (Quilombola, indígena etc.) "
                  name="paid_activity"
                  onChange={() =>
                    this.setState({
                      count: (this.annex_paid_activity = 1),
                    })
                  }
                />
                <Form.Check
                  type="radio"
                  label="PROMISAES "
                  name="paid_activity"
                  value="promisaes"
                />
                <Form.Check
                  type="radio"
                  label="Não "
                  name="paid_activity"
                  onChange={() =>
                    this.setState({
                      count: (this.annex_paid_activity = null),
                    })
                  }
                />
              </Col>
            </Form.Group>
            {this.annex_paid_activity ? <Form.File.Input /> : null}
            <Form.Group>
              <Form.Label>PARECER DO COORDENADOR</Form.Label>
              <Col>
                <Form.Check
                  type="radio"
                  label="Deferido"
                  name="check"
                  onChange={() =>
                    this.setState({
                      count: (this.check = 1),
                    })
                  }
                  required
                />
                <Form.Check
                  type="radio"
                  label="Indeferido"
                  name="check"
                  onChange={() =>
                    this.setState({
                      count: (this.check = 0),
                    })
                  }
                  required
                />
              </Col>
              {this.check === 0 ? (
                <Form.Control as="textarea" rows="3" required />
              ) : null}
            </Form.Group>
          </Form>
          <Button type="submit" className="Button" variant="primary">
            SALVAR
          </Button>
        </S.Container>
      </>
    );
  }
}
export default FormSubmited;
