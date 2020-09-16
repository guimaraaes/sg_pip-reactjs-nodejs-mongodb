import React from "react";

import Search from "../Search";
import * as S from "./styles";

function ListSelectStudents(props) {
  return (
    <>
      <S.Container className="mb-5" color={props.color}>
        <div class="card" style={{ width: "70%" }}>
          <div className="title" class="card-header">
            BOLSAS x
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-dark">MATRICULA - NOME</li>
            <li class="list-group-item text-dark">MATRICULA - NOME</li>
            <li class="list-group-item text-dark">MATRICULA - NOME</li>
            <li class="list-group-item text-dark">MATRICULA - NOME</li>
            <li class="list-group-item text-dark">MATRICULA - NOME</li>
          </ul>
        </div>
      </S.Container>
    </>
  );
}

export default ListSelectStudents;
