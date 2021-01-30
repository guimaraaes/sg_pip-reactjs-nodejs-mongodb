import dateFormat from "dateformat";
import React from "react";
import { Button, Card } from "react-bootstrap";
import * as S from "./styles";
function CardProcess(props) {
  return (
    <>
      <S.Container>
        <Card
          as={Button}
          variant="light"
          href={props.href}
          title={props.title}
          className="m-3"
          style={{ width: "20rem" }}
        >
          <S.CardHeader color={props.color}>
            <Card.Header variant="top">{props.title}</Card.Header>
          </S.CardHeader>
          <Card.Body>
            <Card.Text>
              data término: {dateFormat(props.date_end, "dd/mm/yyyy")} <br />
              bolsas ofertadas: {props.total_aid}
            </Card.Text>
          </Card.Body>
        </Card>
      </S.Container>
    </>
  );
}

export default CardProcess;
