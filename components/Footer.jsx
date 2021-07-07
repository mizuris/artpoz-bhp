/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className="text-center bg-light w-100">
      <Container className="p-4">
        <Row>
          <Col>
            <h5 className={styles.footerHeader}>Wszystko w jednym miejscu</h5>
            <p className={styles.footerText}>
              Zaufaj wieloletniemu doświadczeniu i dołącz do szerokiego grona
              zadowolonych klientów. Dla Twojego{" "}
              <strong>dobra i bezpieczeństwa</strong>.
            </p>
          </Col>
        </Row>
        <Row className={styles.footerIcons}>
          <Col>
            <img
              className={styles.footerIcon}
              alt="fire extinguisher"
              src="/images/icon-extinguishe.png"
            />
          </Col>
          <Col>
            <img
              className={styles.footerIcon}
              alt="hard hat"
              src="/images/icon-hat.png"
            />
          </Col>
          <Col>
            <img
              className={styles.footerIcon}
              alt="reflective vest"
              src="/images/icon-vest.png"
            />
          </Col>
          <Col>
            <img
              className={styles.footerIcon}
              alt="ecavuation sign"
              src="/images/icon-place.png"
            />
          </Col>
        </Row>
      </Container>

      <div className={styles.footerCopyright}>
        <p>
          &copy; 2021 Copyright: PHU Artpoż Arkadiusz Bątor | Wszystkie prawa
          zastrzeżone.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
