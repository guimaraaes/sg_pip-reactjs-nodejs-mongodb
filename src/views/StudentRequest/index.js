import React from "react";
import Header from "../../components/Header/index";
import FormSubmited from "../../components/FormSubmited";

import * as S from "./styles";

class StudentRequest extends React.Component {
  render() {
    return (
      <>
        <Header />

        <S.Container>
          <FormSubmited />
        </S.Container>
      </>
    );
  }
}

export default StudentRequest;
