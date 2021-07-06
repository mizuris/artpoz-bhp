/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card } from "react-bootstrap";
import styles from "../../styles/Products.module.css";

function ProductHeader({ image, alt, title }) {
  return (
    <>
      <div className={styles.flexContainer}>
        <img
          height={32}
          width={32}
          layout="responsive"
          src={image}
          alt={alt}
        />
        <Card.Title className="ml-2">{title}</Card.Title>
      </div>
      <hr />
    </>
  );
}

export default ProductHeader;
