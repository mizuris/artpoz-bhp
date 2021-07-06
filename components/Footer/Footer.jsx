/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={`${styles.appFooter} text-center bg-light w-100`}>
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
        <Row>
          <Col>
            <img
              width={32}
              height={32}
              alt="fire extinguisher"
              src="/images/icon-extinguishe.png"
            />
          </Col>
          <Col>
            <img
              width={32}
              height={32}
              alt="hard hat"
              src="/images/icon-hat.png"
            />
          </Col>
          <Col>
            <img
              width={32}
              height={32}
              alt="reflective vest"
              src="/images/icon-vest.png"
            />
          </Col>
          <Col>
            <img
              width={32}
              height={32}
              alt="ecavuation sign"
              src="/images/icon-place.png"
            />
          </Col>
        </Row>
      </Container>

      <div className={`${styles.footerCopyright} p-3 text-center`}>
        <p className={styles.footerText}>
          &copy; 2021 Copyright: PHU Artpoż Arkadiusz Bątor | Wszystkie prawa
          zastrzeżone.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
