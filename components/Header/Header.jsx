import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Nav } from "react-bootstrap";

function Header() {
  return (
    <Nav
      variant="pills"
      className="navbar navbar-expand-lg navbar-light shadow"
    >
      <Container fluid>
        <Image
          width={50}
          alt="#"
          height={30}
          id="logo"
          src="/../public/icons/artpoz-logo.png"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ml-auto mr-auto">
              <Link
                href="/"
                className="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Strona główna
              </Link>
            </li>
            <li className="nav-item ml-auto mr-auto">
              <Link
                href="/products"
                className="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Oferta
              </Link>
            </li>
            <li className="nav-item ml-auto mr-auto">
              <Link
                href="/services"
                className="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Usługi
              </Link>
            </li>
            <li className="nav-item ml-auto mr-auto">
              <Link
                href="/contact"
                className="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </Nav>
  );
}

export default Header;
