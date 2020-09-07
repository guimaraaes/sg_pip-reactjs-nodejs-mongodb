import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import remove from "../../assets/remove.png";
import * as S from "./styles";
import calendar from "../../assets/calendar.png";
import add from "../../assets/add.png";
import upload from "../../assets/upload.png";
import InputMask from "react-input-mask";
import moment from "moment";
require("moment/locale/pt.js");

class FormSubmited extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      nome_cp: ["s", "a"],
      nome: [null],

      parentesco_cp: ["s", "a"],
      parentesco: [null],

      idade_cp: ["s", "a"],
      idade: [null],

      profissao_cp: ["s", "a"],
      profissao: [null],

      renda_cp: ["s", "a"],
      renda: [null],
    };

    this.anexoDiploma = null;
    this.anexoAtividadeRemunerada = null;
    this.anexoProgramaSocial = null;
    this.anexoBPC = null;
    this.anexoDoencasCronicas = null;

    this.moradiaFamiliarCampus = null;
    this.validated = 1;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      [event.target.name]: value,
    });
  }
  handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.setValidated(true);
  };

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
                className="nome"
                placeholder="MATRICULA E NOME"
                disabled
              />
            </Form.Group>
            <Form.Label>COMPOSIÇÃO FAMILIAR</Form.Label>
            <InputGroup className="mb-3">
              <Form.Row className="row">
                <Form.Group as={Col}>
                  <FormControl
                    placeholder="nome"
                    name="nome"
                    value={this.state.nome}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <FormControl
                    placeholder="nascimento"
                    name="idade"
                    type="date"
                    value={this.state.idade}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row className="ml-1">
                <Form.Group as={Col}>
                  <FormControl
                    placeholder="parentesco"
                    name="parentesco"
                    value={this.state.parentesco}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <FormControl
                    placeholder="profissão"
                    name="profissao"
                    value={this.state.profissao}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <FormControl
                    placeholder="renda"
                    as={InputMask}
                    name="renda"
                    mask="R$9.999,99"
                    value={this.state.renda}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Button
                    onClick={() =>
                      this.setState({
                        count: this.state.count + 1,
                        nome_cp: this.state.nome_cp.concat(this.state.nome),
                        parentesco_cp: this.state.parentesco_cp.concat(
                          this.state.parentesco
                        ),
                        idade_cp: this.state.idade_cp.concat(this.state.idade),
                        profissao_cp: this.state.profissao_cp.concat(
                          this.state.profissao
                        ),
                        renda_cp: this.state.renda_cp.concat(this.state.renda),
                      })
                    }
                  >
                    <img src={add}></img>
                  </Button>
                </Form.Group>
              </Form.Row>
            </InputGroup>

            {this.state.nome_cp.map((currElement, index) => {
              return (
                <InputGroup className="mb-3">
                  <Form.Row className="row">
                    <Form.Group as={Col}>
                      <FormControl placeholder={currElement} disabled />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <FormControl
                        placeholder={
                          moment(this.state.idade_cp[index]).format("L") +
                          ": " +
                          moment(this.state.idade, "YYYY-MM-DD").fromNow()
                        }
                        disabled
                      />
                    </Form.Group>

                    <Form.Group as={Col}>
                      <Form.File.Input />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <FormControl
                        placeholder={this.state.parentesco_cp[index]}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <FormControl
                        placeholder={this.state.profissao_cp[index]}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <FormControl
                        placeholder={this.state.renda_cp[index]}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Button
                        className="buttonAdd"
                        onClick={() =>
                          this.setState({
                            count: this.state.count - 1,

                            nome_cp: this.state.nome_cp.filter(
                              (e, i) => i !== index
                            ),
                            parentesco_cp: this.state.parentesco_cp.filter(
                              (e, i) => i !== index
                            ),
                            idade_cp: this.state.idade_cp.filter(
                              (e, i) => i !== index
                            ),
                            profissao_cp: this.state.profissao_cp.filter(
                              (e, i) => i !== index
                            ),

                            renda_cp: this.state.renda_cp.filter(
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
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>MOTIVAÇÃO PARA SER BOLSISTA</Form.Label>
              <Form.Control as="textarea" rows="3" required />
            </Form.Group>
            <Form.Label>QUESTIONÁRIO</Form.Label>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                VOCÊ SE AUTO DECLARA PERTENCENTE A QUAL RAÇA/COR?
              </Form.Label>
              <Col sm={10}>
                <Form.Check type="radio" label="Branco " name="raca" required />
                <Form.Check type="radio" label="Negro " name="raca" />
                <Form.Check type="radio" label="Pardo " name="raca" />
                <Form.Check type="radio" label="Amarelo " name="raca" />
                <Form.Check type="radio" label="Indígena " name="raca" />
                <Form.Check type="radio" label="Quilombola " name="raca" />
                <Form.Check type="radio" label="Não informada " name="raca" />
              </Col>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                QUAL A DISTÂNCIA GEOGRÁFICA DO LOCAL DE MORADIA DE SEU GRUPO
                FAMILIAR PARA O CAMPUS NO QUAL VOCÊ ESTÁ MATRICULADO?
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="De 0 km até 80 km "
                  name="distancia-moradia"
                  required
                />
                <Form.Check
                  type="radio"
                  label="De 81 km até 300 km "
                  name="distancia-moradia"
                />
                <Form.Check
                  type="radio"
                  label="Acima de 300 km "
                  name="distancia-moradia"
                />
              </Col>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                QUAL O LOCAL DE MORADIA DE SEU GRUPO FAMILIAR?
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="ZONA RURAL "
                  name="zona"
                  required
                />
                <Form.Check type="radio" label="ZONA URBANA " name="zona" />
              </Col>
            </Form.Group>
            <Form.Group controlId="moradia-familiar">
              <Form.Label>
                SEU GRUPO FAMILIAR RESIDE NA CIDADE DO CAMPUS ONDE VOCÊ ESTÁ
                MATRICULADO?
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Sim "
                  name="moradia-familiar"
                  required
                  onChange={() =>
                    this.setState({
                      count: (this.moradiaFamiliarCampus = null),
                    })
                  }
                />
                <Form.Check
                  type="radio"
                  label="Não "
                  name="moradia-familiar"
                  required
                  onChange={() =>
                    this.setState({
                      count: (this.moradiaFamiliarCampus = 1),
                    })
                  }
                />
              </Col>
            </Form.Group>
            <Form.File.Input />
            {this.moradiaFamiliarCampus ? (
              <Form.Group controlId="moradia-cidade-campus">
                <Form.Label>
                  CASO VOCÊ RESIDA NA CIDADE DO CAMPUS ONDE ESTÁ MATRICULADO,
                  QUAL A SUA SITUAÇÃO ATUAL DE MORADIA?
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    required
                    label="Não moro na cidade do campus "
                    name="moradia-cidade-campus"
                  />
                  <Form.Check
                    type="radio"
                    label="Sozinho "
                    name="moradia-cidade-campus"
                  />
                  <Form.Check
                    type="radio"
                    label="Com amigos "
                    name="moradia-cidade-campus"
                  />
                  <Form.Check
                    type="radio"
                    label="Com familiares ou parentes "
                    name="moradia-cidade-campus"
                  />
                  <Form.Check
                    type="radio"
                    label="Em moradia estudantil, casa do estudante ou similares "
                    name="moradia-cidade-campus"
                  />
                  <Form.Check
                    type="radio"
                    label="Em pensão ou pensionato"
                    name="moradia-cidade-campus"
                  />
                </Col>
                <Form.File.Input />
              </Form.Group>
            ) : null}
            <Form.Group controlId="programa-social">
              <Form.Label>
                VOCÊ OU ALGUM MEMBRO DE SEU GRUPO FAMILIAR SÃO BENEFICIÁRIOS DE
                PROGRAMAS SOCIAIS, TAIS COMO BOLSA FAMÍLIA, AUXÍLIO EMERGENCIAL,
                SEGURO DEFESO, TARIFA SOCIAL DE ENERGIA ELÉTRICA?
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Sim "
                  required
                  name="programa-social"
                  onChange={() =>
                    this.setState({
                      count: (this.anexoProgramaSocial = 1),
                    })
                  }
                />
                <Form.Check
                  type="radio"
                  label="Não "
                  name="programa-social"
                  onChange={() =>
                    this.setState({
                      count: (this.anexoProgramaSocial = null),
                    })
                  }
                />
              </Col>
            </Form.Group>
            {this.anexoProgramaSocial ? <Form.File.Input /> : null}
            <Form.Group controlId="bpc">
              <Form.Label>
                VOCÊ OU ALGUM MEMBRO DE SUA FAMÍLIA SÃO BENEFICIÁRIOS DO
                BENEFÍCIO DE PRESTAÇÃO CONTINUADA (BPC)?
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Sim "
                  name="bpc"
                  required
                  onChange={() =>
                    this.setState({
                      count: (this.anexoBPC = 1),
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
                      count: (this.anexoBPC = null),
                    })
                  }
                />
              </Col>
            </Form.Group>
            {this.anexoBPC ? <Form.File.Input /> : null}
            <Form.Group controlId="doencas-cronicas">
              <Form.Label>
                37) HÁ EM SEU GRUPO FAMILIAR ALGUM MEMBRO DIAGNOSTICADO COM
                DOENÇAS CRÔNICAS E/OU TRANSTORNOS MENTAIS E/OU DEFICIÊNCIA COM
                ASPECTOS LIMITANTES? LEIA ATENTAMENTE AS OPÇÕES DE RESPOSTA A
                SEGUIR.
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  required
                  label="Sim. Doença crônica (transmissíveis ou não), que gera incapacitação ou perda funcional, que requer assistência de saúde continuada e que é comprovada por documento de saúde (laudos, atestados, perícias, exames etc.) Exemplos: doenças cardiovasculares e cerebrovasculares (cardiopatias, acidente vascular encefálico, doença arterial periférica), doenças respiratórias crônicas (asma, doença pulmonar obstrutiva crônica), câncer, HIV-AIDS, doenças neurológicas (doença de Parkinson, esclerose múltipla, demência devido à doença de Alzheimer, microcefalia, epilepsia, paralisia cerebral), lúpus, fibromialgia, entre outras.
              Sim. Transtorno mental e do comportamento (transtornos depressivos, transtorno afetivo bipolar, transtornos de ansiedade, esquizofrenia, transtorno por abuso de álcool e outras substâncias psicoativas, entre outros) ou condição atípica relacionada ao neurodesenvolvimento (deficiência intelectual, espectro autista, transtorno de déficit de atenção e hiperatividade, entre outros), comprovado por documento de saúde (laudos, atestados, perícias, exames etc.).
              Sim. Deficiência física e/ou sensorial com aspectos limitantes (por exemplo, paraplegia, hemiplegia, deficiência auditiva [bilateral, parcial ou total], deficiência visual [cegueira e baixa visão], entre outros)."
                  name="doencas-cronicas"
                  onChange={() =>
                    this.setState({
                      count: (this.anexoDoencasCronicas = 1),
                    })
                  }
                />
                <Form.Check
                  type="radio"
                  label="Não "
                  required
                  name="doencas-cronicas"
                  onChange={() =>
                    this.setState({
                      count: (this.anexoDoencasCronicas = null),
                    })
                  }
                />
              </Col>
            </Form.Group>
            {this.anexoDoencasCronicas ? <Form.File.Input /> : null}
            <Form.Group controlId="ensino-medio">
              <Form.Label>
                EM QUE TIPO DE INSTITUIÇÃO VOCÊ CURSOU O ENSINO MÉDIO?
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  required
                  label="Todo em escola particular "
                  name="ensino-medio"
                  value="todo-particular"
                />
                <Form.Check
                  type="radio"
                  label="Parte em escola pública ou filantrópica e parte em escola particular "
                  name="ensino-medio"
                />
                <Form.Check
                  type="radio"
                  label="Em escola particular com bolsa integral (100%) "
                  name="ensino-medio"
                />
                <Form.Check
                  type="radio"
                  label="Todo em escola pública ou filantrópica "
                  name="ensino-medio"
                />
              </Col>
            </Form.Group>
            <Form.File.Input />
            <Form.Group controlId="escolaridade">
              <Form.Label>QUAL A SUA ESCOLARIDADE?</Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  required
                  label="Cursando a primeira GRADUAÇÃO (inclusive alunos que concluíram o curso Interdisciplinar em Ciência e Tecnologia ou em Tecnologia da Informação e ingressaram em uma Engenharia)"
                  name="escolaridade"
                  value="primeira-graduacao"
                  onChange={() =>
                    this.setState({ count: (this.anexoDiploma = null) })
                  }
                />
                <Form.Check
                  type="radio"
                  label="Portador de Diploma de Curso Tecnológico, cursando OUTRA GRADUAÇÃO"
                  name="escolaridade"
                  value="diploma-tecnologo"
                  onChange={() =>
                    this.setState({ count: (this.anexoDiploma = 1) })
                  }
                />
                <Form.Check
                  type="radio"
                  label="Portador de Diploma de Curso Superior, cursando OUTRA GRADUAÇÃO"
                  value="diploma-superior"
                  name="escolaridade"
                  onChange={() =>
                    this.setState({ count: (this.anexoDiploma = 1) })
                  }
                />
              </Col>
            </Form.Group>
            {this.anexoDiploma ? <Form.File.Input /> : null}
            <Form.Group controlId="assistencia-estudantil">
              <Form.Label>
                VOCÊ POSSUI, NO PERÍODO LETIVO ATUAL, ALGUM BENEFÍCIO DA
                ASSISTÊNCIA ESTUDANTIL?
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  required
                  label="Bolsa Permanência Acadêmica/Bolsa Apoio ao Esporte"
                  name="assistencia-estudantil"
                />
                <Form.Check
                  type="radio"
                  label=" Auxílio Alimentação/Auxílio Didático-Pedagógico/Auxílio Transporte/Auxílio Creche/Auxílio ou Portador de Necessidades Especiais "
                  name="assistencia-estudantil"
                />
                <Form.Check
                  type="radio"
                  label="Moradia Estudantil ou Auxílio Moradia acumulado com uma bolsa ou
        outro auxílio "
                  name="assistencia-estudantil"
                />
                <Form.Check
                  type="radio"
                  label="Somente Moradia Estudantil ou Auxílio Moradia "
                  name="assistencia-estudantil"
                />
                <Form.Check
                  type="radio"
                  label="Não "
                  name="assistencia-estudantil"
                />
              </Col>
            </Form.Group>
            <Form.Group controlId="atividade-remunerada">
              <Form.Label>
                VOCÊ PARTICIPA DE ALGUMA DAS MODALIDADES ABAIXO DE FORMA
                REMUNERADA?
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  label="Pesquisa, Extensão ou PET "
                  type="radio"
                  required
                  name="atividade-remunerada"
                  onChange={() =>
                    this.setState({
                      count: (this.anexoAtividadeRemunerada = 1),
                    })
                  }
                />
                <Form.Check
                  type="radio"
                  label="Monitoria "
                  name="atividade-remunerada"
                  onChange={() =>
                    this.setState({
                      count: (this.anexoAtividadeRemunerada = 1),
                    })
                  }
                />
                <Form.Check
                  type="radio"
                  label="Estágio "
                  name="atividade-remunerada"
                  onChange={() =>
                    this.setState({
                      count: (this.anexoAtividadeRemunerada = 1),
                    })
                  }
                />
                <Form.Check
                  type="radio"
                  label="Bolsa Permanência do MEC (Quilombola, indígena etc.) "
                  name="atividade-remunerada"
                  onChange={() =>
                    this.setState({
                      count: (this.anexoAtividadeRemunerada = 1),
                    })
                  }
                />
                <Form.Check
                  type="radio"
                  label="PROMISAES "
                  name="atividade-remunerada"
                  value="promisaes"
                />
                <Form.Check
                  type="radio"
                  label="Outra (especifique no quadro abaixo o tipo e o valor) "
                  name="atividade-remunerada"
                  onChange={() =>
                    this.setState({
                      count: (this.anexoAtividadeRemunerada = 1),
                    })
                  }
                />
                <Form.Check
                  type="radio"
                  label="Não "
                  name="atividade-remunerada"
                  onChange={() =>
                    this.setState({
                      count: (this.anexoAtividadeRemunerada = null),
                    })
                  }
                />
              </Col>
            </Form.Group>
            {this.anexoAtividadeRemunerada ? <Form.File.Input /> : null}
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
