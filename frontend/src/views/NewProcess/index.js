import React from "react";
import FormInfo from "../../components/FormInfo";
import Header from "../../components/Header/index";
import * as S from "./styles";

class NewProcess extends React.Component {
  constructor(props) {
    super(props);

    this.params = new URLSearchParams(this.props.location.search);
    this.id = this.params.get("_id");
  }
  render() {
    return (
      <>
        <Header />
        <S.Container>
          <FormInfo id={this.id} />
        </S.Container>
      </>
    );
  }
}

export default NewProcess;
