import React from "react";
import Image from "next/image";
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
            <Image
              width={32}
              height={32}
              alt="#"
              src="https://res.cloudinary.com/dlenvpgcq/image/upload/v1625551067/icon-extinguishe_ibynej.png"
            />
          </Col>
          <Col>
            <Image
              width={32}
              height={32}
              alt="#"
              src="https://res.cloudinary.com/dlenvpgcq/image/upload/v1625551067/icon-hat_knzge1.png"
            />
          </Col>
          <Col>
            <Image
              width={32}
              height={32}
              alt="#"
              src="https://res.cloudinary.com/dlenvpgcq/image/upload/v1625551068/icon-vest_ntpz87.png"
            />
          </Col>
          <Col>
            <Image
              width={32}
              height={32}
              alt="#"
              src="https://res.cloudinary.com/dlenvpgcq/image/upload/v1625551068/icon-place_nose1m.png"
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
