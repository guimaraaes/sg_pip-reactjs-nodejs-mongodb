import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardProcess(props) {
  return (
    <>
      <Card className="m-2" style={{ width: "18rem" }}>
        <Card.Header variant="top">2020.x {props.href}</Card.Header>
        <Card.Body>
          <Card.Text>
            quantidade de alunos inscritos, quantidade de bolsas ofertadas
          </Card.Text>

          <Button href={props.href} variant="primary">
            Gerar PDF
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">Finalizado em </Card.Footer>
      </Card>
    </>
  );
}

export default CardProcess;
