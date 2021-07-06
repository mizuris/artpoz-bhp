/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Container } from "react-bootstrap";
import styles from "../../styles/Products.module.css";

function ProductsListDivider(props) {
  return (
    <Container fluid className="mb-2">
      <img
        className={styles.productDividerImg}
        src={props.image}
        alt={props.alt}
      />
    </Container>
  );
}

export default ProductsListDivider;
