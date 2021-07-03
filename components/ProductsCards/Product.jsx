import React from "react";
import styles from "../../styles/Products.module.css";

function Product({ item }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.dot}></div>
      <p className={styles.text}>{item}</p>
    </div>
  );
}

export default Product;
