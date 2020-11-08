import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">sg PIP</Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Nav.Link href="/new-process">NOVO PROCESSO</Nav.Link> */}
        </Nav>
        <Button variant="outline-light">SAIR</Button>
      </Navbar>
    </>
  );
}

export default Header;
