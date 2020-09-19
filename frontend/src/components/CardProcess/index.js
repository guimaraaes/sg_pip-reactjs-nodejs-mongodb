import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as S from "./styles";

function CardProcess(props) {
  return (
    <>
      <S.Container>
        <Card
          as={Button}
          variant="light"
          href={props.href}
          className="m-3"
          style={{ width: "20rem" }}
        >
          <Card.Header variant="top">2020.x {props.href}</Card.Header>
          <Card.Body>
            <Card.Text>alunos inscritos: xx. bolsas ofertadas: xx.</Card.Text>
          </Card.Body>
        </Card>
      </S.Container>
    </>
  );
}

export default CardProcess;
