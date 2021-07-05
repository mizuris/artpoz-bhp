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
            <h5 className="text-uppercase">Wszystko w jednym miejscu</h5>
            <p>
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
              src="/../public/icons/icon-extinguishe.png"
            />
          </Col>
          <Col>
            <Image
              width={32}
              height={32}
              alt="#"
              src="/../public/icons/icon-hat.png"
            />
          </Col>
          <Col>
            <Image
              width={32}
              height={32}
              alt="#"
              src="/../public/icons/icon-vest.png"
            />
          </Col>
          <Col>
            <Image
              width={32}
              height={32}
              alt="#"
              src="/../public/icons/icon-place.png"
            />
          </Col>
        </Row>
      </Container>

      <div className={`${styles.footerCopyright} p-3 text-center`}>
        <p className={styles.footerCopyrightText}>
          &copy; 2021 Copyright: PHU Artpoż Arkadiusz Bątor | Wszystkie prawa
          zastrzeżone.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
