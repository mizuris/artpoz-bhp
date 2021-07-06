import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Nav, Navbar, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image
            height={60}
            width={108}
            src="https://res.cloudinary.com/dlenvpgcq/image/upload/v1625551066/artpoz-logo_m9vjnd.png"
            layout="responsive"
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
