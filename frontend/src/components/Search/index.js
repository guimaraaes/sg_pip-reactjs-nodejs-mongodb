import React from "react";
import { Form, FormControl } from "react-bootstrap";

function Search(props) {
  return (
    <>
      <Form inline>
        <FormControl
          class="mb-4"
          type="text"
          name={props.name}
          placeholder={props.procura}
          className="mr-sm-2"
        />
        {/* <Button variant="primary">Procurar</Button> */}
      </Form>
    </>
  );
}

export default Search;
