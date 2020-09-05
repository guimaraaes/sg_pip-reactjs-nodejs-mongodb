import React from "react";

import Search from "../Search";
import * as S from "./styles";

function Statistics(props) {
  return (
    <>
      <S.Container className="mb-5" color={props.color}>
        <div class="card" style={{ width: "15rem" }}>
          <div className="title" class="card-header">
            BOLSAS CADASTRADAS
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-dark"> Bolsa esporte xx/xx</li>
            <li class="list-group-item text-dark"> Bolsa esporte xx/xx</li>
            <li class="list-group-item text-dark"> Bolsa esporte xx/xx</li>
            <li class="list-group-item text-dark"> Bolsa esporte xx/xx</li>
          </ul>
        </div>
      </S.Container>
    </>
  );
}

export default Statistics;
