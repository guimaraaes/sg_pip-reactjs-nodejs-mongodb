import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">nome do sistema</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/new-process">NOVO PROCESSO</Nav.Link>
        </Nav>
        <Button variant="outline-light">SAIR</Button>
      </Navbar>
    </>
  );
}

export default Header;
