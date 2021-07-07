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
            Rękawice gumowe / skórzane / specjalistyczne
          </ProductCard>
        </Col>
        <Col sm={6} lg={3}>
          <ProductCard
            src="/images/workwear-product2.png"
            alt="Worker with work gloves"
            product="Odzież ochronna"
          >
            Rękawice gumowe / skórzane / specjalistyczne
          </ProductCard>
        </Col>
        <Col sm={6} lg={3}>
          <ProductCard
            src="/images/firefighter-suit-product.jpg"
            alt="Odzież specjalistyczna"
            product="Firefighter"
          >
            Rękawice gumowe / skórzane / specjalistyczne
          </ProductCard>
        </Col>
      </Row>
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
            Rękawice gumowe / skórzane / specjalistyczne
          </ProductCard>
        </Col>
        <Col sm={6} lg={3}>
          <ProductCard
            src="/images/workwear-product2.png"
            alt="Worker with work gloves"
            product="Odzież ochronna"
          >
            Rękawice gumowe / skórzane / specjalistyczne
          </ProductCard>
        </Col>
        <Col sm={6} lg={3}>
          <ProductCard
            src="/images/firefighter-suit-product.jpg"
            alt="Odzież specjalistyczna"
            product="Firefighter"
          >
            Rękawice gumowe / skórzane / specjalistyczne
          </ProductCard>
        </Col>
      </Row>
    </>
  );
}
