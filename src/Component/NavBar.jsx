import React, { useContext } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import CartContext from "../Context/CartContext";
import { AuthContext } from "../Context/auth-context";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { cartCount } = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.userIsLoggedIn;
  const logoutHandler = () => {
    authCtx.logoutHandler();
  };
  return (
    <div>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand>Ecommerce</Navbar.Brand>
          <Nav className="mx-auto">
            {isLoggedIn && (
              <Link to="/home" className="nav-link mr-3">
                Home
              </Link>
            )}

            {isLoggedIn && (
              <Link to="/store" className="nav-link mr-3">
                Store
              </Link>
            )}

            {isLoggedIn && (
              <Link to="/about" className="nav-link mr-3">
                About
              </Link>
            )}

            {isLoggedIn && (
              <Link to="/contactUs" className="nav-link mr-3">
                ContactUs
              </Link>
            )}
          </Nav>
          <Nav className="ml-auto">
            {isLoggedIn && (
              <Link to="/cart" className="nav-link mr-3">
                Cart{" " + cartCount}
              </Link>
            )}
            {!isLoggedIn && (
              <Link to="/" className="nav-link mr-3">
                Login
              </Link>
            )}
            {isLoggedIn && (
              <Link to="/" className="nav-link mr-3" onClick={logoutHandler}>
                Logout
              </Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
