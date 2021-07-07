/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import styles from "../styles/Product.module.css";
import { Card, Button, Container } from "react-bootstrap";

function ProductCard({ src, alt, product, children }) {
  return (
    <Container className={styles.productContainer}>
      <Card className={`${styles.productCard} bg-dark text-white`}>
        <Card.Img className={styles.productCardImg} src={src} alt={alt} />
        <Card.ImgOverlay className={styles.productCardOverlay}>
          <div>
            <Card.Title as="h4">{product}</Card.Title>
            <Card.Text className={styles.productCardDescription} as="p">
              {children}
            </Card.Text>
          </div>
          <Link href="/kontakt" passHref>
            <Button size="sm" variant="light">
              Zapytaj o więcej
            </Button>
          </Link>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
}

export default ProductCard;
