import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import "../assets/css/Header.scss";

function Header() {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <img
              src="https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png"
              alt="Un mexicain qui joue de la guitare"
              className="navbarbrand"
            />
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Accueil</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
export default Header;
