import React, { useContext } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import CartContext from "../Context/CartContext";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { cartCount } = useContext(CartContext);
  return (
    <div>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand>Ecommerce</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link>
              <Link to="/home">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/store">Store</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contactUs">ContactUs</Link>
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="/cart">Cart{" " + cartCount}</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
