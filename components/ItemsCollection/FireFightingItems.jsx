import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductsCard from "../ProductsCards/ProductsCard";

function FireFightingItems() {
  const fireExtinguishersList = [
    "proszkowe ABC",
    "śniegowe",
    "CO2",
    "do gastronomii",
    "do urządzeń elektrycznych",
    "wieszaki do gaśnic",
    "szafki do gaśnic",
  ];

  const hydrantsList = [
    "węże do hydrantów wewnętrznych",
    "hydranty wewnętrzne",
    "hydranty zewnętrzne",
    "klucze do nasad hydrantów",
    "klucze do zaworów",
    "prądownice, rozdzielacze",
    "łączniki i reduckje",
  ];

  const signsList = [
    "znaki ewakuacyjne",
    "znaki przeciwpożarowe",
    "znaki informacyjne",
    "znaki ostrzegawcze",
    "znaki przestrzenne",
    "tablice budowlane",
    "znaki drogowe",
  ];

  return (
    <Container>
      <Row>
        <Col className="mb-3" sm={12} md={4}>
          <ProductsCard
            title="Gaśnice"
            image="/images/icon-extinguishe.png"
            alt="Fire extinguisher icon"
            products={fireExtinguishersList}
          />
        </Col>
        <Col className="mb-3" sm={12} md={4}>
          <ProductsCard
            title="Hydranty"
            image="/images/icon-hose.png"
            alt="Fire hose icon"
            products={hydrantsList}
          />
        </Col>
        <Col className="mb-3" sm={12} md={4}>
          <ProductsCard
            title="Oznakowanie"
            image="/images/icon-sign.png"
            alt="Evacutaion sign icon"
            products={signsList}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default FireFightingItems;
