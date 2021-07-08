import React from "react";
import Head from "next/head";
import { Row, Col } from "react-bootstrap";
import TopImage from "../components/TopImage";
import ProductCard from "../components/ProductCard";

export default function Oferta() {
  return (
    <>
      <Head>
        <title>Oferta / Artpoż - hurtownia BHP i ppoż.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <TopImage
        src="/images/workwear-product.png"
        alt="Hard hat and work gloves"
        title="Odzież robocza"
      />
      <Row>
        <Col sm={6} lg={3}>
          <ProductCard
            src="/images/workgloves-product.png"
            alt="Worker with work gloves"
            product="Rękawice robocze"
          >
            Rękawice gumowe / skórzane / specjalistyczne
          </ProductCard>
        </Col>
        <Col sm={6} lg={3}>
          <ProductCard
            src="/images/head-protection-product.jpg"
            alt="Worker in hard hat and face mask"
            product="Ochrona głowy"
          >
            Maski ochornne / Kaski / Maseczki / Okulary i gogle ochronne
          </ProductCard>
        </Col>
        <Col sm={6} lg={3}>
          <ProductCard
            src="/images/workwear-product2.png"
            alt="Worker with hard hat and tools belt"
            product="Odzież ochronna"
          >
            Spodnie / Bluzy / Kombinezony / Akcesoria
          </ProductCard>
        </Col>
        <Col sm={6} lg={3}>
          <ProductCard
            src="/images/firefighter-suit-product.jpg"
            alt="Firefighter"
            product="Odzież specjalistyczna"
          >
            Ubrania strażackie / Odzież antyelektrostatyczna / Praca na
            wysokości
          </ProductCard>
        </Col>
      </Row>

      <TopImage
        src="/images/fire-hoses-card.png"
        alt="Fire hoses on shelves"
        title="Ochrona przeciwpożarowa"
      />
      <Row>
        <Col sm={6} lg={3}>
          <ProductCard
            src="/images/exthinguisher.jpg"
            alt="Worker with work gloves"
            product="Gaśnice"
          >
            Proszkowe ABC / Pianowe / CO{<sub>2</sub>} / Do gastronomii
          </ProductCard>
        </Col>
        <Col sm={6} lg={3}>
          <ProductCard
            src="/images/fire-hoses-product.jpg"
            alt="Worker in hard hat and face mask"
            product="Hydranty"
          >
            Sztywne / Półsztywne / Wewnętrzne / Zewnętrzne
          </ProductCard>
        </Col>
        <Col sm={6} lg={3}>
          <ProductCard
            src="/images/fire-extinguisher-box.jpg"
            alt="Worker with work gloves"
            product="Szafki"
          >
            Do gaśnic / Do hydrantów / Do kluczy / Do instrukcji bezpieczeństwa
            pożarowego
          </ProductCard>
        </Col>
        <Col sm={6} lg={3}>
          <ProductCard
            src="/images/hose-accessory-product.jpg"
            alt="Worker with work gloves"
            product="Akcesoria"
          >
            Koce gaśnice / Prądownice / Rozdzielacze / Złącza / Klucze
          </ProductCard>
        </Col>
      </Row>

      <TopImage
        src="/images/evac.jpg"
        alt="Fire hoses on shelves"
        title="Oznakowanie"
      />
      <Row>
        <Col sm={6} lg={3}>
          <ProductCard
            src="/images/information-signs.png"
            alt="Worker with work gloves"
            product="Znaki informacyjne"
          />
        </Col>
        <Col sm={6} lg={3}>
          <ProductCard
            src="/images/evacuation-place-sign.png"
            alt="Worker in hard hat and face mask"
            product="Znaki ewakuacyjne"
          />
        </Col>
        <Col sm={6} lg={3}>
          <ProductCard
            src="/images/warning-sign.png"
            alt="Worker with work gloves"
            product="Znaki ostrzegawcze"
          />
        </Col>
        <Col sm={6} lg={3}>
          <ProductCard
            src="/images/road-signs.png"
            alt="Odzież specjalistyczna"
            product="Znaki drogowe"
          />
        </Col>
      </Row>
    </>
  );
}
