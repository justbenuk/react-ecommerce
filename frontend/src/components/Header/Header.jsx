import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

//styles
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>React Ecommerce</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end flex-grow-1">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart />
                  <span className="pr-2"> Cart</span>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <FaUserAlt />
                  <span> Sign In</span>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
