import Button from "@restart/ui/esm/Button";
import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="fw-bold" href="#home">
            TeamBuilder
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Team</Nav.Link>
              <Nav.Link href="#pricing">Projects</Nav.Link>
            </Nav>
            <Form className="d-flex flex-fill mx-3">
              <input
                type="search"
                placeholder="Search"
                className="mr-2 form-control"
                aria-label="Search"
              />
              <Button className="btn btn-danger">Search</Button>
            </Form>
            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                Sign in
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Sign up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
