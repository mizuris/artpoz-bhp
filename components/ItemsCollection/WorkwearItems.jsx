import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductsCard from "../ProductsCards/ProductsCard";

function WorkwearItems() {
  const workwearList = [
    "kamizelki odblaskowe",
    "kurtki i bluzy robocze",
    "spodnie i ogrodniczki robocze",
    "odzież termiczna",
  ];

  const workBootsList = [
    "S1 - z podnoskiem kompozytowym",
    "S3 - z podnoskiem i podeszwą antyprzebiciową",
    "obuwie dla straży pożarnej",
    "gumowce - piankowe, ocieplane",
  ];

  return (
    <Container>
      <Row>
        <Col className="mb-3" sm={6}>
          <ProductsCard
            title="Ubrania robocze"
            image="https://res.cloudinary.com/dlenvpgcq/image/upload/v1625551067/icon-jacket_yqql65.png"
            alt="Workwear icon"
            products={workwearList}
          />
        </Col>
        <Col className="mb-3" sm={6}>
          <ProductsCard
            title="Obuwie robocze"
            image="https://res.cloudinary.com/dlenvpgcq/image/upload/v1625551066/icon-boots_c6imss.png"
            alt="Work boots icon"
            products={workBootsList}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default WorkwearItems;
