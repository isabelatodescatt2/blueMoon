import '../App.css'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoBmBlue from "../imagens/marca/LogotipoBMBlue.png";
import { Link } from 'react-router-dom';


function NavbarMenu() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-menu">
      <Container>
        <Navbar.Brand className="logo" as={Link} to="/">
          <img src={LogoBmBlue} alt="logo Blue Moon School of Jazz"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/aprender">Quero Aprender!</Nav.Link>
            <NavDropdown 
              title="Professores" 
              id="professores-dropdown" 
              align="end"
              menuVariant="light"
            >
              <NavDropdown.Item as={Link} to="/professor1">Lua Brunetti</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/professor2">Arthur Motta</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/professor3">Marco Duzzioni</NavDropdown.Item>
			  <NavDropdown.Item as={Link} to="/professor3">João Amorim</NavDropdown.Item>
			  <NavDropdown.Item as={Link} to="/professor3">Heitor Sens</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;