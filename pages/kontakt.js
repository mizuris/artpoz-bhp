/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import { Container, Row, Col, Card } from "react-bootstrap";
import Map from "../components/Map";
import mapStyles from "../styles/Map.module.css";
import styles from "../styles/Contact.module.css";

export default function Kontakt() {
  const defaultMapElement = <div style={{ height: "100%" }} />;

  return (
    <>
      <Head>
        <title>Kontakt / Artpoż - hurtownia BHP i ppoż.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Container className="mt-5 mb-5">
        <Row>
          <Col lg={5} className="mb-4">
            <Card className="shadow-lg">
              <Card.Body>
                <div className={styles.contactHeader}>
                  <img
                    className={styles.contactLogo}
                    alt="Artpoż logo icon"
                    src="/images/artpoz-icon.png"
                  />
                  <h5 className="text-uppercase m-0 p-0 ml-2">
                    Skontaktuj się z nami
                  </h5>
                </div>
                <hr />
                <div className={styles.cardInfo}>
                  <div className={styles.cardImg}>
                    <img
                      src="/images/icon-person.png"
                      alt="Person contact icon"
                      className={styles.contactIcon}
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
                    <img
                      src="/images/icon-location.png"
                      alt="Adress location icon"
                      className={styles.contactIcon}
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
                    <img
                      src="/images/icon-tel.png"
                      alt="Contact phone icon"
                      className={styles.contactIcon}
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
                    <img
                      src="/images/icon-mail.png"
                      alt="E-mail icon"
                      className={styles.contactIcon}
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
                <img
                  src="/images/icon-map.png"
                  alt="Google maps icon"
                  className={styles.contactMapIcon}
                />
                <span className={styles.cardTextBold}>
                  <h5 className="m-0 p-0 ml-3">TU NAS ZNAJDZIESZ</h5>
                </span>
              </div>
            </div>
            <div id="map-container" className={mapStyles.mapContainer}>
              <Map
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
