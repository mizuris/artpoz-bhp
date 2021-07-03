import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import styles from "../../styles/Divider.module.css";

function ProductsListDivider(props) {
  return (
    <Container fluid className={styles.clip}>
      <Image
        className={styles.dividerImage}
        src={props.image}
        alt={props.alt}
      />
      <div className={styles.dividerText}>
        <h2>{props.text.toUpperCase()}</h2>
      </div>
    </Container>
  );
}

export default ProductsListDivider;
