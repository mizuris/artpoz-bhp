import React from "react";
import Image from "next/image";
import Head from "next/head";
import { Container, Row, Col, Card } from "react-bootstrap";
import personIcon from "../public/icons/icon-person.png";
import locationIcon from "../public/icons/icon-location.png";
import phoneIcon from "../public/icons/icon-tel.png";
import mailIcon from "../public/icons/icon-mail.png";
import mapIcon from "../public/icons/icon-map.png";
import logoIcon from "../public/icons/artpoz-icon.png";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Artpoż - hurtownia BHP i ppoż.</title>
        <meta name="description" content="Artykuły bhp i ppoż - kontakt" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
          integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
          crossOrigin="anonymous"
        />
      </Head>

      <Container className="mt-5 mb-5">
        <Row>
          <Col lg={5} className="mb-4">
            <Card className="shadow-lg">
              <Card.Body>
                <div className="d-flex align-items-center">
                  <h5 className="text-uppercase p-0 m-0">
                    <Image
                      width={64}
                      height={64}
                      alt="Artpoż logo icon"
                      src={logoIcon}
                    />
                    Skontaktuj się z nami
                  </h5>
                </div>
                <hr />
                <div className="card-info">
                  <div className="card-img">
                    <Image
                      src={personIcon}
                      alt="Person contact icon"
                      width={32}
                      height={32}
                    />
                    <h5 className="mb-0">Dane firmy</h5>
                  </div>
                  <p>
                    <span className="text-bold">Pełna nazwa:</span> PHU ARTPOŻ
                    Arkadiusz Bątor
                  </p>
                  <p>
                    <span className="text-bold">NIP:</span> 5621341013
                  </p>
                </div>
                <hr />
                <div className="card-info">
                  <div className="card-img">
                    <Image
                      src={locationIcon}
                      alt="Adress location icon"
                      width={32}
                      height={32}
                    />
                    <h5 className="mb-0">Adres</h5>
                  </div>
                  <p>
                    <span className="text-bold">Żnin</span> 88-400, ul.
                    700-lecia 32
                  </p>
                </div>
                <hr />
                <div className="card-info">
                  <div className="card-img">
                    <Image
                      src={phoneIcon}
                      alt="Contact phone icon"
                      width={32}
                      height={32}
                    />
                    <h5 className="mb-0">Kontakt telefoniczny</h5>
                  </div>
                  <p>
                    <span className="text-bold">+48 601-187-677</span>
                  </p>
                  <p>
                    <span className="text-bold">+48 668-647-677</span>
                  </p>
                </div>
                <hr />
                <div className="card-info">
                  <div className="card-img">
                    <Image
                      src={mailIcon}
                      alt="E-mail icon"
                      width={32}
                      height={32}
                    />
                    <h5>Adres e-mail</h5>
                  </div>
                  <p>e-mail: artpoz@vp.pl</p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={7}>
            <div className="mb-4">
              <div className="card-img">
                <Image
                  src={mapIcon}
                  alt="Google maps icon"
                  width={32}
                  height={32}
                />
                <span className="text-size text-bold">
                  <p className="map-text">Tu nas znajdziesz</p>
                </span>
              </div>
            </div>
            <div id="map-container" className="map-container"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
