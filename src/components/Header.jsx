import { Container, Nav, Navbar } from "react-bootstrap";
import "../assets/scss/header.scss";
import logo from "../assets/img/logo.webp";
import useCart from "../hooks/useCart";

function Header() {
  const { cartCount } = useCart();
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <img
              src={logo}
              alt="Un mexicain qui joue de la guitare"
              className="navbarbrand"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Accueil</Nav.Link>
              <Nav.Link href="/panier">Panier ({cartCount})</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
export default Header;
