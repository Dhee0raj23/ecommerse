import { Container, Navbar, Nav } from "react-bootstrap";
const NavBar = (props) => {
  return (
    <div>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand>Ecommerce</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Store</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#cart" onClick={props.cartOpen}>
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
