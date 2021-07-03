import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const size = 32;
  return (
    <footer className="text-center bg-light w-100">
      <Container className="p-4">
        <Row>
          <Col>
            <h5 className="text-uppercase">Wszystko w jednym miejscu</h5>
            <p className="pre-footer-text">
              Zaufaj wieloletniemu doświadczeniu i dołącz do szerokiego grona
              zadowolonych klientów. Dla Twojego{" "}
              <strong>dobra i bezpieczeństwa</strong>.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image
              width={size}
              height={size}
              alt="#"
              className="footer-icon"
              src="/../public/icons/icon-extinguishe.png"
            />
          </Col>
          <Col>
            <Image
              width={size}
              height={size}
              alt="#"
              class="footer-icon"
              src="/../public/icons/icon-hat.png"
            />
          </Col>
          <Col>
            <Image
              width={size}
              height={size}
              alt="#"
              className="footer-icon"
              src="/../public/icons/icon-vest.png"
            />
          </Col>
          <Col>
            <Image
              width={size}
              height={size}
              alt="#"
              className="footer-icon"
              src="/../public/icons/icon-place.png"
            />
          </Col>
        </Row>
      </Container>

      <div className="text-center p-3 art-black">
        <p className="footer-text">
          &copy; 2021 Copyright: PHU Artpoż Arkadiusz Bątor | Wszystkie prawa
          zastrzeżone.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
