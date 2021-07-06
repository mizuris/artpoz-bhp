import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductsCard from "../ProductsCards/ProductsCard";

function PersonalProtectionItems() {
  const glovesList = [
    "nakrapiane",
    "skórzane",
    "nitrylowe",
    "spawalnicze",
    "specjalistyczne",
    "kwasoodporne",
    "gumowe",
  ];

  const headEquipementList = [
    "kaski ochronne",
    "czapko-kaski",
    "maski ochronne",
    "gogle ochronne",
    "okulary ochronne",
    "przyłbice",
    "nauszniki wygłuszające",
  ];

  const fireEquipementList = [
    "rękawice antyprzecięciowe",
    "szelki i uprzęże asekuracyjne",
    "karabińczyki",
    "liny asekuracyjne",
    "koła ratownicze",
    "apeteczki walizkowe",
    "apteczki samochodowe",
  ];

  return (
    <Container>
      <Row>
        <Col className="mb-3" sm={12} md={4}>
          <ProductsCard
            title="Rękawice robocze"
            image="/images/icon-gloves.png"
            alt="Icon of work gloves"
            products={glovesList}
          />
        </Col>
        <Col className="mb-3" sm={12} md={4}>
          <ProductsCard
            title="Ochrona głowy i dróg oddechowych"
            image="/images/icon-gas-mask.png"
            alt="Gas mask icon"
            products={headEquipementList}
          />
        </Col>
        <Col className="mb-3" sm={12} md={4}>
          <ProductsCard
            title="Sprzęt specjalistyczny"
            image="/images/icon-axe.png"
            alt="Fire axe icon"
            products={fireEquipementList}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default PersonalProtectionItems;
