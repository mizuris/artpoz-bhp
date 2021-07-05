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
import { WrappedMap } from "../components/Map/Map";
import mapStyles from "../styles/Map.module.css";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  const defaultMapElement = <div style={{ height: "100%" }} />;
  const iconSize = 24;

  return (
    <>
      <Head>
        <title>Artpoż - hurtownia BHP i ppoż. - kontakt</title>
        <meta name="description" content="Artykuły bhp i ppoż - kontakt" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="bhp, ppoż, żnin, odzież robocza, gaśnice, hydranty, przeglądy"
        />
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
                <div className={styles.contactHeader}>
                  <Image
                    width={64}
                    height={64}
                    alt="Artpoż logo icon"
                    src={logoIcon}
                  />
                  <h5 className="text-uppercase m-0 p-0 ml-2">
                    Skontaktuj się z nami
                  </h5>
                </div>
                <hr />
                <div className={styles.cardInfo}>
                  <div className={styles.cardImg}>
                    <Image
                      src={personIcon}
                      alt="Person contact icon"
                      width={iconSize}
                      height={iconSize}
                    />
                    <h6 className="mb-0 ml-3">Dane firmy</h6>
                  </div>
                  <p>
                    <span className={styles.cardTextBold}>Pełna nazwa:</span>{" "}
                    PHU ARTPOŻ Arkadiusz Bątor
                  </p>
                  <p>
                    <span className={styles.cardTextBold}>NIP:</span> 5621341013
                  </p>
                </div>
                <hr />
                <div className={styles.cardInfo}>
                  <div className={styles.cardImg}>
                    <Image
                      src={locationIcon}
                      alt="Adress location icon"
                      width={iconSize}
                      height={iconSize}
                    />
                    <h6 className="mb-0 ml-3">Adres</h6>
                  </div>
                  <p>
                    <span className={styles.cardTextBold}>Żnin 88-400</span>,
                    ul. 700-lecia 32
                  </p>
                </div>
                <hr />
                <div className={styles.cardInfo}>
                  <div className={styles.cardImg}>
                    <Image
                      src={phoneIcon}
                      alt="Contact phone icon"
                      width={iconSize}
                      height={iconSize}
                    />
                    <h6 className="mb-0 ml-3">Kontakt telefoniczny</h6>
                  </div>
                  <p>
                    <span className={styles.cardTextBold}>+48 601-187-677</span>
                  </p>
                  <p>
                    <span className={styles.cardTextBold}>+48 668-647-677</span>
                  </p>
                </div>
                <hr />
                <div className={styles.cardInfo}>
                  <div className={styles.cardImg}>
                    <Image
                      src={mailIcon}
                      alt="E-mail icon"
                      width={iconSize}
                      height={iconSize}
                    />
                    <h6 className="ml-3 mb-0">Adres e-mail</h6>
                  </div>
                  <p>e-mail: artpoz@vp.pl</p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={7}>
            <div className="mb-4">
              <div className={styles.cardImg}>
                <Image
                  src={mapIcon}
                  alt="Google maps icon"
                  width={48}
                  height={48}
                />
                <span className={styles.cardTextBold}>
                  <h5 className="m-0 p-0 ml-3">TU NAS ZNAJDZIESZ</h5>
                </span>
              </div>
            </div>
            <div id="map-container" className={mapStyles.mapContainer}>
              <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_KEY}`}
                mapElement={defaultMapElement}
                containerElement={defaultMapElement}
                loadingElement={defaultMapElement}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
