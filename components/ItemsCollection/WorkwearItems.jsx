import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductsCard from "../ProductsCards/ProductsCard";
import workwearIcon from "../../public/icons/icon-jacket.png";
import bootsIcon from "../../public/icons/icon-boots.png";

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
        <Col sm={6}>
          <ProductsCard
            title="Ubrania robocze"
            image={workwearIcon}
            alt="Workwear icon"
            products={workwearList}
          />
        </Col>
        <Col sm={6}>
          <ProductsCard
            title="Obuwie robocze"
            image={bootsIcon}
            alt="Work boots icon"
            products={workBootsList}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default WorkwearItems;
