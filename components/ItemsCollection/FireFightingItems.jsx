import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductsCard from "../ProductsCards/ProductsCard";
import fireExtinguisherIcon from "../../public/icons/icon-extinguishe.png";
import fireHoseIcon from "../../public/icons/icon-hose.png";
import evacSignIcon from "../../public/icons/icon-sign.png";

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
            image={fireExtinguisherIcon}
            alt="Fire extinguisher icon"
            products={fireExtinguishersList}
          />
        </Col>
        <Col className="mb-3" sm={12} md={4}>
          <ProductsCard
            title="Hydranty"
            image={fireHoseIcon}
            alt="Fire hose icon"
            products={hydrantsList}
          />
        </Col>
        <Col className="mb-3" sm={12} md={4}>
          <ProductsCard
            title="Oznakowanie"
            image={evacSignIcon}
            alt="Evacutaion sign icon"
            products={signsList}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default FireFightingItems;
