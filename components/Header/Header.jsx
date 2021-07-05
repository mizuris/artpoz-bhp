import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../../public/icons/artpoz-logo.png";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image height={60} width={108} src={logo} alt="Artpoż bhp logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto text-center">
            <Link href="/" passHref>
              <Nav.Link>Strona główna</Nav.Link>
            </Link>
            <Link href="/products" passHref>
              <Nav.Link>Oferta</Nav.Link>
            </Link>
            <Link href="/services" passHref>
              <Nav.Link>Usługi</Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link>Kontakt</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
