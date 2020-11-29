import moment from "moment";
import React from "react";
import { Button, Col, Form, FormControl, InputGroup } from "react-bootstrap";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import CurrencyInput from "react-currency-input";
import add from "../../assets/add.png";
import remove from "../../assets/remove.png";
import ButtonAnnex from "../ButtonAnnex";
import * as S from "./styles";
require("moment/locale/pt.js");

class FormSubmited extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student_request: [],

      count: 0,
      p_name: "",
      parentesco: null,
      age: "",
      occupation: null,
      monthly_income: null,
      // aid_name_selected
      //student request
      name: this.props.name,
      status_coordinator: this.props.status_coordinator,
      status_coordinator_description: this.props.status_coordinator_description,
      aid_name_selected: this.props.aid_name_selected,
      aid_name: this.props.aid_name,
      // parent_name: [this.props.parent_name],
      // parent_date_born: [this.props.parent_date_born],
      // parent_rent: [this.props.parent_rent],
      // parent_profession: [this.props.parent_profession],
      parent_name: String(this.props.parent_name).split(","),
      parent_date_born: String(this.props.parent_date_born).split(","),
      parent_rent: String(this.props.parent_rent).split(","),
      parent_profession: String(this.props.parent_profession).split(","),
      motivation: this.props.motivation,
      quiz: this.props.quiz,
      documents: this.props.documents,

      //quiz
      race: this.props.quiz[0],
      housing_distance: this.props.quiz[1],
      zone: this.props.quiz[2],
      family_home_in_campus_city: this.props.quiz[3],
      campus_city_housing: this.props.quiz[4],
      social_program: this.props.quiz[5],
      bpc: this.props.quiz[6],
      chronic_disease: this.props.quiz[7],
      high_school: this.props.quiz[8],
      degree: this.props.quiz[9],
      student_assistance: this.props.quiz[10],
      paid_activity: this.props.quiz[11],
    };

    this.annex_social_program = this.props.quiz[5] === 1;
    this.annex_bpc = this.props.quiz[6] === 1;
    this.annex_chronic_disease = this.props.quiz[7] === 1;
    this.annex_degree = this.props.quiz[9] === 2 || this.props.quiz[9] === 3;
    this.annex_paid_activity = this.props.quiz[11] != 6;

    this.annexed_family_home = this.state.documents[0];
    this.annexed_campus_city_housing =
      this.state.documents[1] && this.state.campus_city_housing === 2;
    this.annexed_social_program =
      this.props.quiz[5] === 1 && this.state.documents[3];
    this.annexed_bpc = this.annex_bpc && this.state.documents[3];
    this.annexed_chronic_disease =
      this.chronic_disease && this.state.documents[4];

    this.annexed_high_school = this.state.documents[5];

    this.annexed_degree = this.props.quiz[6] && this.state.documents[6];
    this.annexed_paid_activity =
      this.state.paid_activity && this.state.documents[7];
    this.check = null;
    this.validated = 1;

    this.handleChange = this.handleChange.bind(this);
    this.Edit = this.props.Edit.bind(this);
    this.Upload = this.props.Upload.bind(this);
    this.loadQuiz();
  }

  //
  loadQuiz() {
    this.state.quiz = [
      this.state.race,
      this.state.housing_distance,
      this.state.zone,
      this.state.family_home_in_campus_city,
      this.state.campus_city_housing,
      this.state.social_program,
      this.state.bpc,
      this.state.chronic_disease,
      this.state.high_school,
      this.state.degree,
      this.state.student_assistance,
      this.state.paid_activity,
    ];
  }
  onChange = (e) => {
    // alert(e.target.files);
    this.setState({ file: e.target.files[0] }, () => {
      this.props.onChange(this.state);
    });
  };

  handleChangeButton = (e) => {
    this.loadQuiz();
    this.setState(e);
    this.props.onChange(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.loadQuiz();

      this.props.onChange(this.state);
    });
  };

  render() {
    return (
      <>
        <S.Container>
          {
            (this.FormValidated =
              this.state.race &&
              this.state.housing_distance &&
              this.state.zone &&
              this.state.family_home_in_campus_city &&
              this.state.campus_city_housing &&
              this.state.social_program &&
              this.state.bpc &&
              this.state.chronic_disease &&
              this.state.high_school &&
              this.state.degree &&
              this.state.student_assistance &&
              this.state.paid_activity &&
              this.state.motivation
                ? // this.annexed_family_home &&
                  // // this.annexed_campus_city_housing &&
                  // this.annexed_high_school &&
                  // this.annexed_degree &&
                  // this.annexed_paid_activity &&
                  // this.annexed_social_program &&
                  // this.annexed_bpc &&
                  // this.annexed_chronic_disease
                  false
                : true)
          }
          <Form
            noValidate
            validated={this.validated}
            onSubmit={this.handleSubmit}
          >
            <Form.Group>
              <FormControl placeholder={this.state.name} disabled />
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustomSizeLg">
              <Form.Label>BOLSA DO PROCESSO {this.props.title}</Form.Label>
              <Form.Control
                as="select"
                name="aid_name_selected"
                required
                defaultValue={this.state.aid_name_selected}
                onChange={this.handleChange}
              >
                <option value="" disabled>
                  Escolher bolsa
                </option>
                {String(this.props.aid_name)
                  .split(",")
                  .map((currElement, index) => {
                    return (
                      <>
                        <option value={currElement}>
                          Bolsa {currElement}:
                          {String(this.props.aid_quantity).split(",")[index]}
                        </option>
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
                  name="p_name"
                  value={this.state.p_name}
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
                        this.state.p_name &&
                        this.state.age &&
                        this.state.occupation &&
                        this.state.monthly_income
                          ? false
                          : true
                      }
                      onClick={() =>
                        this.setState(
                          {
                            count: this.state.count + 1,
                            parent_name: this.state.parent_name.concat(
                              this.state.p_name
                            ),

                            parent_date_born: this.state.parent_date_born.concat(
                              this.state.age
                            ),
                            parent_profession: this.state.parent_profession.concat(
                              this.state.occupation
                            ),
                            parent_rent: this.state.parent_rent.concat(
                              this.state.monthly_income
                            ),

                            p_name: "",
                            age: "",
                            occupation: "",
                            monthly_income: null,
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
                </>
              ) : (
                <>
                  <Form.Group>
                    <Button
                      className="buttonAdd"
                      disabled={
                        !!this.state.p_name && this.state.age ? false : true
                      }
                      onClick={() =>
                        this.setState(
                          {
                            count: this.state.count + 1,
                            parent_name: this.state.parent_name.concat(
                              this.state.p_name
                            ),

                            parent_date_born: this.state.parent_date_born.concat(
                              this.state.age
                            ),
                            parent_profession: this.state.parent_profession.concat(
                              this.state.occupation
                            ),
                            parent_rent: this.state.parent_rent.concat(
                              this.state.monthly_income
                            ),

                            p_name: "",
                            age: "",
                            occupation: "",
                            monthly_income: null,
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
                </>
              )}
            </InputGroup>
            {this.state.parent_name.map((currElement, index) => {
              return (
                <InputGroup className="mb-3">
                  <Form.Group className="p-0 mr-2" md={4} as={Col}>
                    <FormControl placeholder={currElement} disabled />
                  </Form.Group>
                  <Form.Group className="p-0 mr-2">
                    <FormControl
                      placeholder={moment(
                        String(this.props.parent_date_born).split(",")[index]
                      ).format("L")}
                      disabled
                    />
                  </Form.Group>
                  {moment().format("YYYY") -
                    moment(
                      String(this.props.parent_date_born).split(",")[index]
                    ).format("YYYY") >=
                  18 ? (
                    <>
                      <Form.Group className="p-0 mr-2" md={2} as={Col}>
                        <FormControl
                          placeholder={
                            String(this.props.parent_rent).split(",")[index]
                          }
                          disabled
                        />
                      </Form.Group>
                      <Form.Group className="p-0 mr-2" as={Col}>
                        <FormControl
                          placeholder={
                            String(this.props.parent_profession).split(",")[
                              index
                            ]
                          }
                          disabled
                        />
                      </Form.Group>
                    </>
                  ) : null}

                  <Form.Group>
                    <Button
                      className="buttonAdd"
                      onClick={() =>
                        this.setState(
                          {
                            count: this.state.count - 1,

                            parent_name: this.state.parent_name.filter(
                              (e, i) => i !== index
                            ),

                            parent_date_born: this.state.parent_date_born.filter(
                              (e, i) => i !== index
                            ),
                            parent_profession: this.state.parent_profession.filter(
                              (e, i) => i !== index
                            ),

                            parent_rent: this.state.parent_rent.filter(
                              (e, i) => i !== index
                            ),
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
            <Form.Group
              name="race"
              value={this.state.race}
              onClick={this.handleChange}
            >
              <Form.Label>
                VOCÊ SE AUTO DECLARA PERTENCENTE A QUAL RAÇA/COR/ETNIA?
              </Form.Label>
              <Col>
                <Form.Check
                  type="radio"
                  label="Branco "
                  name="race"
                  value="1"
                  defaultChecked={this.state.race === 1}
                  required
                />
                <Form.Check
                  type="radio"
                  label="Negro "
                  name="race"
                  value="2"
                  defaultChecked={this.state.race === 2}
                />
                <Form.Check
                  type="radio"
                  label="Pardo "
                  name="race"
                  value="3"
                  defaultChecked={this.state.race === 3}
                />
                <Form.Check
                  type="radio"
                  label="Amarelo "
                  name="race"
                  value="4"
                  defaultChecked={this.state.race === 4}
                />
                <Form.Check
                  type="radio"
                  label="Indígena "
                  name="race"
                  value="5"
                  defaultChecked={this.state.race === 5}
                />
                <Form.Check
                  type="radio"
                  label="Quilombola "
                  name="race"
                  value="6"
                  defaultChecked={this.state.race === 6}
                />
                <Form.Check
                  type="radio"
                  label="Não informada "
                  name="race"
                  value="7"
                  defaultChecked={this.state.race === 7}
                />
              </Col>
            </Form.Group>
            <Form.Group
              name="housing_distance"
              value={this.state.housing_distance}
              onClick={this.handleChange}
            >
              <Form.Label>
                QUAL A DISTÂNCIA GEOGRÁFICA DO LOCAL DE MORADIA DE SEU GRUPO
                FAMILIAR PARA O CAMPUS NO QUAL VOCÊ ESTÁ MATRICULADO?
              </Form.Label>
              <Col>
                <Form.Check
                  type="radio"
                  label="De 0 km até 80 km "
                  name="housing_distance"
                  value="1"
                  defaultChecked={this.state.housing_distance === 1}
                  required
                />
                <Form.Check
                  type="radio"
                  label="De 81 km até 300 km "
                  value="2"
                  defaultChecked={this.state.housing_distance === 2}
                  name="housing_distance"
                />
                <Form.Check
                  type="radio"
                  label="Acima de 300 km "
                  value="3"
                  defaultChecked={this.state.housing_distance === 3}
                  name="housing_distance"
                />
              </Col>
            </Form.Group>
            <Form.Group
              name="zone"
              value={this.state.zone}
              onClick={this.handleChange}
            >
              <Form.Label>
                QUAL O LOCAL DE MORADIA DE SEU GRUPO FAMILIAR?
              </Form.Label>
              <Col>
                <Form.Check
                  type="radio"
                  label="ZONA RURAL "
                  name="zone"
                  value="1"
                  defaultChecked={this.state.zone === 1}
                  required
                />
                <Form.Check
                  type="radio"
                  label="ZONA URBANA "
                  name="zone"
                  value="2"
                  defaultChecked={this.state.zone === 2}
                />
              </Col>
            </Form.Group>
            <Form.Group
              name="family_home_in_campus_city"
              value={this.state.family_home_in_campus_city}
              onClick={this.handleChange}
            >
              <Form.Label>
                SEU GRUPO FAMILIAR RESIDE NA CIDADE DO CAMPUS ONDE VOCÊ ESTÁ
                MATRICULADO?
              </Form.Label>
              <Col>
                <Form.Check
                  type="radio"
                  label="Sim "
                  name="family_home_in_campus_city"
                  value="1"
                  defaultChecked={this.state.family_home_in_campus_city === 1}
                  required
                  // onChange={() =>
                  //   this.setState({
                  //     count: (this.annex_family_home = null),
                  //   })
                  // }
                />
                <Form.Check
                  type="radio"
                  label="Não "
                  name="family_home_in_campus_city"
                  value="2"
                  defaultChecked={this.state.family_home_in_campus_city === 2}
                  // onChange={() =>
                  //   this.setState({
                  //     count: (this.annex_family_home = null),
                  //   })
                  // }
                />
              </Col>
            </Form.Group>
            <ButtonAnnex
              value="1"
              documents={this.props.documents}
              Upload={this.props.Upload}
              handleChange={this.handleChangeButton}
              FileChange={this.onChange}
            >
              dd
            </ButtonAnnex>
            {this.state.quiz[3] == 2 ? (
              <Form.Group
                name="campus_city_housing"
                value={this.state.campus_city_housing}
                onClick={this.handleChange}
              >
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
                    value="1"
                    defaultChecked={this.state.campus_city_housing === 1}
                  />
                  <Form.Check
                    type="radio"
                    label="Sozinho "
                    name="campus_city_housing"
                    value="2"
                    defaultChecked={this.state.campus_city_housing === 2}
                  />
                  <Form.Check
                    type="radio"
                    label="Com amigos "
                    name="campus_city_housing"
                    value="3"
                    defaultChecked={this.state.campus_city_housing === 3}
                  />
                  <Form.Check
                    type="radio"
                    label="Com familiares ou parentes "
                    name="campus_city_housing"
                    value="4"
                    defaultChecked={this.state.campus_city_housing === 4}
                  />
                  <Form.Check
                    type="radio"
                    label="Em moradia estudantil, casa do estudante ou similares "
                    name="campus_city_housing"
                    value="5"
                    defaultChecked={this.state.campus_city_housing === 5}
                  />
                  <Form.Check
                    type="radio"
                    label="Em pensão ou pensionato"
                    name="campus_city_housing"
                    value="6"
                    defaultChecked={this.state.campus_city_housing === 6}
                  />
                </Col>
                <ButtonAnnex
                  value="2"
                  documents={this.props.documents}
                  Upload={this.props.Upload}
                  handleChange={this.handleChangeButton}
                  FileChange={this.onChange}
                >
                  dd
                </ButtonAnnex>
              </Form.Group>
            ) : (
              () => {
                this.campus_city_housing = 0;
                this.state.quiz[4] = 0;
                this.handleChange();
              }
            )}
            <Form.Group
              name="social_program"
              value={this.state.social_program}
              onClick={this.handleChange}
            >
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
                  value="1"
                  defaultChecked={this.state.social_program === 1}
                  onChange={() =>
                    this.setState({
                      count: (this.annex_social_program = 1),
                    })
                  }
                />
                <Form.Check
                  type="radio"
                  label="Não "
                  value="2"
                  defaultChecked={this.state.social_program === 2}
                  name="social_program"
                  onChange={() =>
                    this.setState({
                      count: (this.annex_social_program = null),
                    })
                  }
                />
              </Col>
            </Form.Group>
            {this.annex_social_program ? (
              <ButtonAnnex
                value="3"
                documents={this.props.documents}
                Upload={this.props.Upload}
                handleChange={this.handleChangeButton}
                FileChange={this.onChange}
              >
                dd
              </ButtonAnnex>
            ) : null}
            <Form.Group
              name="bpc"
              value={this.state.bpc}
              onClick={this.handleChange}
            >
              <Form.Label>
                VOCÊ OU ALGUM MEMBRO DE SUA FAMÍLIA SÃO BENEFICIÁRIOS DO
                BENEFÍCIO DE PRESTAÇÃO CONTINUADA (BPC)?
              </Form.Label>
              <Col>
                <Form.Check
                  type="radio"
                  label="Sim "
                  name="bpc"
                  value="1"
                  defaultChecked={this.state.bpc === 1}
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
                  value="2"
                  defaultChecked={this.state.bpc === 2}
                  required
                  onChange={() =>
                    this.setState({
                      count: (this.annex_bpc = null),
                    })
                  }
                />
              </Col>
            </Form.Group>
            {this.annex_bpc ? (
              <ButtonAnnex
                value="4"
                documents={this.props.documents}
                Upload={this.props.Upload}
                handleChange={this.handleChangeButton}
                FileChange={this.onChange}
              >
                dd
              </ButtonAnnex>
            ) : null}
            <Form.Group
              name="chronic_disease"
              value={this.state.chronic_disease}
              onClick={this.handleChange}
            >
              <Form.Label>
                HÁ EM SEU GRUPO FAMILIAR ALGUM MEMBRO DIAGNOSTICADO COM DOENÇAS
                CRÔNICAS E/OU TRANSTORNOS MENTAIS E/OU DEFICIÊNCIA COM ASPECTOS
                LIMITANTES? LEIA ATENTAMENTE AS OPÇÕES DE RESPOSTA A SEGUIR.
              </Form.Label>
              <Col>
                <Form.Check
                  type="radio"
                  required
                  label="Sim. Doença crônica (transmissíveis ou não), que gera incapacitação ou perda funcional, que requer assistência de saúde continuada e que é comprovada por documento de saúde (laudos, atestados, perícias, exames etc.) Exemplos: doenças cardiovasculares e cerebrovasculares (cardiopatias, acidente vascular encefálico, doença arterial periférica), doenças respiratórias crônicas (asma, doença pulmonar obstrutiva crônica), câncer, HIV-AIDS, doenças neurológicas (doença de Parkinson, esclerose múltipla, demência devido à doença de Alzheimer, microcefalia, epilepsia, paralisia cerebral), lúpus, fibromialgia, entre outras.
                  Sim. Transtorno mental e do comportamento (transtornos depressivos, transtorno afetivo bipolar, transtornos de ansiedade, esquizofrenia, transtorno por abuso de álcool e outras substâncias psicoativas, entre outros) ou condição atípica relacionada ao neurodesenvolvimento (deficiência intelectual, espectro autista, transtorno de déficit de atenção e hiperatividade, entre outros), comprovado por documento de saúde (laudos, atestados, perícias, exames etc.).
                  Sim. Deficiência física e/ou sensorial com aspectos limitantes (por exemplo, paraplegia, hemiplegia, deficiência auditiva [bilateral, parcial ou total], deficiência visual [cegueira e baixa visão], entre outros)."
                  name="chronic_disease"
                  value="1"
                  defaultChecked={this.state.chronic_disease === 1}
                  onChange={() =>
                    this.setState({
                      count: (this.annex_chronic_disease = 1),
                    })
                  }
                />
                <Form.Check
                  type="radio"
                  label="Não "
                  value="2"
                  defaultChecked={this.state.chronic_disease === 2}
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
            {this.annex_chronic_disease ? (
              <ButtonAnnex
                value="5"
                documents={this.props.documents}
                Upload={this.props.Upload}
                handleChange={this.handleChangeButton}
                FileChange={this.onChange}
              >
                dd
              </ButtonAnnex>
            ) : null}
            <Form.Group
              name="high_school"
              value={this.state.high_school}
              onClick={this.handleChange}
            >
              <Form.Label>
                EM QUE TIPO DE INSTITUIÇÃO VOCÊ CURSOU O ENSINO MÉDIO?
              </Form.Label>
              <Col>
                <Form.Check
                  type="radio"
                  required
                  label="Todo em escola particular "
                  name="high_school"
                  value="1"
                  defaultChecked={this.state.high_school === 1}
                />
                <Form.Check
                  type="radio"
                  label="Parte em escola pública ou filantrópica e parte em escola particular "
                  name="high_school"
                  value="2"
                  defaultChecked={this.state.high_school === 2}
                />
                <Form.Check
                  type="radio"
                  label="Em escola particular com bolsa integral (100%) "
                  name="high_school"
                  value="3"
                  defaultChecked={this.state.high_school === 3}
                />
                <Form.Check
                  type="radio"
                  label="Todo em escola pública ou filantrópica "
                  name="high_school"
                  value="4"
                  defaultChecked={this.state.high_school === 4}
                />
              </Col>
            </Form.Group>
            <ButtonAnnex
              value="6"
              documents={this.props.documents}
              Upload={this.props.Upload}
              handleChange={this.handleChangeButton}
              FileChange={this.onChange}
            >
              dd
            </ButtonAnnex>
            <Form.Group
              name="degree"
              value={this.state.degree}
              onClick={this.handleChange}
            >
              <Form.Label>QUAL A SUA ESCOLARIDADE?</Form.Label>
              <Col>
                <Form.Check
                  type="radio"
                  required
                  label="Cursando a primeira GRADUAÇÃO (inclusive alunos que concluíram o curso Interdisciplinar em Ciência e Tecnologia ou em Tecnologia da Informação e ingressaram em uma Engenharia)"
                  name="degree"
                  value="1"
                  defaultChecked={this.state.degree === 1}
                  onChange={() =>
                    this.setState({ count: (this.annex_degree = null) })
                  }
                />
                <Form.Check
                  type="radio"
                  label="Portador de Diploma de Curso Tecnológico, cursando OUTRA GRADUAÇÃO"
                  name="degree"
                  value="2"
                  defaultChecked={this.state.degree === 2}
                  onChange={() =>
                    this.setState({ count: (this.annex_degree = 1) })
                  }
                />
                <Form.Check
                  type="radio"
                  label="Portador de Diploma de Curso Superior, cursando OUTRA GRADUAÇÃO"
                  value="3"
                  defaultChecked={this.state.degree === 3}
                  name="degree"
                  onChange={() =>
                    this.setState({ count: (this.annex_degree = 1) })
                  }
                />
              </Col>
            </Form.Group>
            {this.annex_degree ? (
              <ButtonAnnex
                value="7"
                documents={this.props.documents}
                Upload={this.props.Upload}
                handleChange={this.handleChangeButton}
                FileChange={this.onChange}
              >
                dd
              </ButtonAnnex>
            ) : null}
            <Form.Group
              name="student_assistance"
              value={this.state.student_assistance}
              onClick={this.handleChange}
            >
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
                  value="1"
                  defaultChecked={this.state.student_assistance === 1}
                />
                <Form.Check
                  type="radio"
                  label=" Auxílio Alimentação/Auxílio Didático-Pedagógico/Auxílio Transporte/Auxílio Creche/Auxílio ou Portador de Necessidades Especiais "
                  name="student_assistance"
                  value="2"
                  defaultChecked={this.state.student_assistance === 2}
                />
                <Form.Check
                  type="radio"
                  label="Moradia Estudantil ou Auxílio Moradia acumulado com uma bolsa ou
        outro auxílio "
                  name="student_assistance"
                  value="3"
                  defaultChecked={this.state.student_assistance === 3}
                />
                <Form.Check
                  type="radio"
                  label="Somente Moradia Estudantil ou Auxílio Moradia "
                  name="student_assistance"
                  value="4"
                  defaultChecked={this.state.student_assistance === 4}
                />
                <Form.Check
                  type="radio"
                  label="Não "
                  name="student_assistance"
                  value="5"
                  defaultChecked={this.state.student_assistance === 5}
                />
              </Col>
            </Form.Group>
            <Form.Group
              name="paid_activity"
              value={this.state.paid_activity}
              onClick={this.handleChange}
            >
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
                  value="1"
                  defaultChecked={this.state.paid_activity === 1}
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
                  value="2"
                  defaultChecked={this.state.paid_activity === 2}
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
                  value="3"
                  defaultChecked={this.state.paid_activity === 3}
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
                  value="4"
                  defaultChecked={this.state.paid_activity === 4}
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
                  value="5"
                  defaultChecked={this.state.paid_activity === 5}
                  value="promisaes"
                />
                <Form.Check
                  type="radio"
                  label="Não "
                  name="paid_activity"
                  value="6"
                  defaultChecked={this.state.paid_activity === 6}
                  onChange={() =>
                    this.setState({
                      count: (this.annex_paid_activity = null),
                    })
                  }
                />
              </Col>
            </Form.Group>
            {this.annex_paid_activity ? (
              <ButtonAnnex
                value="8"
                documents={this.props.documents}
                Upload={this.props.Upload}
                handleChange={this.handleChangeButton}
                FileChange={this.onChange}
              >
                dd
              </ButtonAnnex>
            ) : null}
            <Form.Group
              name="check"
              value={this.state.check}
              onClick={this.handleChange}
            >
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
          <Button
            type="submit"
            className="Button"
            variant="primary"
            onClick={this.Edit}
            disabled={this.FormValidated}
          >
            SALVAR
          </Button>
        </S.Container>
      </>
    );
  }
}
export default FormSubmited;
