import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import ServicesCard from "../components/ServicesCard/ServicesCard";

export default function Uslugi() {
  return (
    <>
      <Head>
        <title>Artpoż - hurtownia BHP i ppoż. - usługi</title>
        <meta name="description" content="Usługi przeciwpożarowe i bhp" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="bhp, ppoż, żnin, odzież robocza, gaśnice, hydranty, przeglądy"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
          integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
          crossOrigin="anonymous"
        />
      </Head>
      <Container fluid>
        <Image
          src="https://res.cloudinary.com/dlenvpgcq/image/upload/v1625551048/services-top_tzmg7p.png"
          layout="responsive"
          height={250}
          width={1980}
          alt="Fire services consulting"
        />
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
              <ServicesCard
                src="https://res.cloudinary.com/dlenvpgcq/image/upload/v1625551067/icon-flame_hnwnh8.png"
                title="Ochrona przeciwpożarowa"
              >
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
              <ServicesCard
                src="https://res.cloudinary.com/dlenvpgcq/image/upload/v1625551068/icon-service_vptx8v.png"
                title="Serwis i konserwacja"
              >
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
    </>
  );
}
