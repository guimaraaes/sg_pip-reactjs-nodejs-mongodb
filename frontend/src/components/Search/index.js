import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";

function Search(props) {
  return (
    <>
      <Form inline>
        <FormControl
          class="mb-4"
          type="text"
          placeholder={props.procura}
          className="mr-sm-2"
        />
        {/* <Button variant="primary">Procurar</Button> */}
      </Form>
    </>
  );
}

export default Search;
