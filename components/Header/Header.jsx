/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Nav, Navbar, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            height={60}
            width={108}
            src="/images/artpoz-logo.png"
            alt="Artpoż BHP i ppoż logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto text-center">
            <Link href="/" passHref>
              <Nav.Link>Strona główna</Nav.Link>
            </Link>
            <Link href="/oferta" passHref>
              <Nav.Link>Oferta</Nav.Link>
            </Link>
            <Link href="/uslugi" passHref>
              <Nav.Link>Usługi</Nav.Link>
            </Link>
            <Link href="/kontakt" passHref>
              <Nav.Link>Kontakt</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
