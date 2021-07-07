/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/Product.module.css";

function TopImage({ src, alt, title }) {
  return (
    <Container fluid className={`${styles.topImage} p-0 m-0`}>
      <h1>{title}</h1>
      <img src={src} alt={alt} />
    </Container>
  );
}

export default TopImage;
