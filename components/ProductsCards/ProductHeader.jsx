import React from "react";
import { Card } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/Products.module.css";

function ProductHeader({ image, alt, title }) {
  return (
    <>
      <div className={styles.flexContainer}>
        <Image height={32} width={32} src={image} alt={alt} />
        <Card.Title className="ml-2">{title}</Card.Title>
      </div>
      <hr />
    </>
  );
}

export default ProductHeader;
