import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import topImage from "../public/images/services-top.png";
import fireIcon from "../public/icons/icon-flame.png";
import serviceIcon from "../public/icons/icon-service.png";
import ServicesCard from "../components/ServicesCard/ServicesCard";

export default function Services() {
  return (
    <div>
      <Head>
        <title>Artpoż - hurtownia BHP i ppoż.</title>
        <meta name="description" content="Usługi przeciwpożarowe i bhp" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
          integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
          crossOrigin="anonymous"
        />
      </Head>
      <Container fluid>
        <Image src={topImage} alt="Fire services consulting" />
      </Container>
      <Container fluid>
        <Container className="ml-auto mr-auto">
          <Row className="text-center mt-3 mb-3">
            <Col>
              <h3 className="head-text">Oferowane usługi</h3>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col md={6} className="pb-4">
              <ServicesCard src={fireIcon} title="Ochrona przeciwpożarowa">
                <Container>
                  <div className="list-container">
                    <ul className="list-main">
                      <li className="list-item">
                        prowadzimy szkolenia z ochrony przeciwpożarowej
                      </li>
                      <li className="list-item">
                        zapoznajemy z zasadami bezpieczeństwa, oraz postępowania
                        na wypadek wystąpienia pożaru
                      </li>
                      <li className="list-item">
                        sporządzamy instrukcje bezpieczeństwa pożarowego
                      </li>
                      <li className="list-item">
                        wyznaczamy optymalne drogi ewakuacyjne dla danego
                        obiektu
                      </li>
                      <li className="list-item">
                        uczymy obsługi podręcznego sprzętu gaśniczego
                      </li>
                      <li className="list-item">
                        organizujemy pokazy gaszenia pożarów dla firm
                      </li>
                      <li className="list-item">
                        doradzamy w rozwiązaniach praktycznych w celu
                        polepszenia bezpieczeństwa pożarowego
                      </li>
                      <li className="list-item">
                        pomagamy wyznaczyć strefy pożarowe
                      </li>
                      <li className="list-item">
                        wyposażamy obiekty w niezbędny sprzęt gaśniczy i
                        oznakowanie
                      </li>
                    </ul>
                  </div>
                </Container>
              </ServicesCard>
            </Col>
            <Col md={6} className="pb-4">
              <ServicesCard src={serviceIcon} title="Serwis i konserwacja">
                <Container>
                  <div className="list-container">
                    <ul className="list-main">
                      <li className="list-item">
                        wykonujemy przeglądy techniczne podręcznego sprzętu
                        gaśniczego
                      </li>
                      <li className="list-item">
                        prowadzimy pomiary ciśnienia hydrantów wewnętrznych i
                        zewnętrznych
                      </li>
                      <li className="list-item">
                        serwisujemy i naprawiamy niesprawny sprzęt gaśniczy
                      </li>
                      <li className="list-item">
                        wymieniamy środek gaśniczy w gaśnicach
                      </li>
                      <li className="list-item">
                        oferujemy stały nadzór nad obiektem i jego wyposażeniem
                      </li>
                      <li className="list-item">
                        dystrybuujemy sprzęt gaśniczy od sprawdonych producentów
                      </li>
                    </ul>
                  </div>
                </Container>
              </ServicesCard>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
