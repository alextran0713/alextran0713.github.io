import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./index.module.scss";

export interface NavbarProps {
  setDisplayResume: (displayResume: boolean) => void;
}

const Navbars = ({ setDisplayResume }: NavbarProps) => {
  return (
    <Navbar
      expand="lg"
      className={styles?.["navbar"]}
      data-bs-theme="dark"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="/">
          <div className="d-flex">
            <img src={require("../../img/navbar-logo.png")} />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className={styles?.["navbar-logo"]}
          id="basic-navbar-nav"
        >
          <Nav className={styles?.["navbar-menu"] + " me-auto"}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#resume" onClick={() => setDisplayResume(true)}>
              Resume
            </Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
