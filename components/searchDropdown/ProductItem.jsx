import React from "react";
import styles from "./SearchDropdown.module.css";

export const ProductItem = ({ title }) => {
  return (
    <div className={styles.productItem}>
      <div className={styles.productImage} />
      <div className={styles.productTitle}>{title}</div>
    </div>
  );
};
