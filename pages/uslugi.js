/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "../styles/Services.module.css";
import ServicesCard from "../components/ServicesCard";
import TopImage from "../components/TopImage";

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

      <TopImage
        src="/images/services.jpg"
        alt="Fire extingushing practice"
        title="Usługi"
      />

      <Container className="mb-4">
        <Row>
          <Col className="mb-4" sm={12} md={6}>
            <img
              className={styles.servicesSectionImage}
              src="/images/services-man.jpg"
              alt="Happy man pointing right"
            />
          </Col>
          <Col className={styles.servicesSection} sm={12} md={6}>
            <div className={styles.servicesSectionText}>
              <h1>Stawiamy na doświadczenie</h1>
              <p>
                Od ponad 20 lat zapewniamy firmom stałe wsparcie w zakresie{" "}
                <strong>BHP i PPOŻ.</strong>. Na bieżąco śledzimy aktualne normy
                i zmiany w prawie. Sporządzamy dokumenty i świadczymy usługi
                doradztwa dla największych firm w regionie.
              </p>
            </div>
            <div>
              <h5>Dołącz do grona zadowolonych klientów</h5>
              <Link href="/kontakt" passHref>
                <Button variant="outline-danger">Kontakt</Button>
              </Link>
            </div>
          </Col>
        </Row>

        <hr />
        <h2 className="text-center m-4">Nasze możliwości</h2>
        <Row>
          <Col md={6} className="pb-4">
            <ServicesCard
              src="/images/icon-flame.png"
              title="Ochrona przeciwpożarowa"
            >
              <Container>
                <ul className={styles.listMain}>
                  <li>prowadzimy szkolenia z ochrony przeciwpożarowej</li>
                  <li>
                    zapoznajemy z zasadami bezpieczeństwa, oraz postępowania na
                    wypadek wystąpienia pożaru
                  </li>
                  <li>sporządzamy instrukcje bezpieczeństwa pożarowego</li>
                  <li>
                    wyznaczamy optymalne drogi ewakuacyjne dla danego obiektu
                  </li>
                  <li>uczymy obsługi podręcznego sprzętu gaśniczego</li>
                  <li>organizujemy pokazy gaszenia pożarów dla firm</li>
                  <li>
                    doradzamy w rozwiązaniach praktycznych w celu polepszenia
                    bezpieczeństwa pożarowego
                  </li>
                  <li>pomagamy wyznaczyć strefy pożarowe</li>
                  <li>
                    wyposażamy obiekty w niezbędny sprzęt gaśniczy i oznakowanie
                  </li>
                </ul>
              </Container>
            </ServicesCard>
          </Col>
          <Col md={6} className="pb-4">
            <ServicesCard
              src="/images/icon-service.png"
              title="Serwis i konserwacja"
            >
              <Container>
                <ul className={styles.listMain}>
                  <li>
                    wykonujemy przeglądy techniczne podręcznego sprzętu
                    gaśniczego
                  </li>
                  <li>
                    prowadzimy pomiary ciśnienia hydrantów wewnętrznych i
                    zewnętrznych
                  </li>
                  <li>serwisujemy i naprawiamy niesprawny sprzęt gaśniczy</li>
                  <li>wymieniamy środek gaśniczy w gaśnicach</li>
                  <li>
                    oferujemy stały nadzór nad obiektem i jego wyposażeniem
                  </li>
                  <li>
                    dystrybuujemy sprzęt gaśniczy od sprawdonych producentów
                  </li>
                </ul>
              </Container>
            </ServicesCard>
          </Col>
        </Row>
      </Container>
    </>
  );
}
