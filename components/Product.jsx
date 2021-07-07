import React from "react";
import styles from "../styles/Product.module.css"

function Product({ name, icon }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.dot}></div>
      <p className={styles.text}>{name}</p>
    </div>
  );
}

export default Product;
