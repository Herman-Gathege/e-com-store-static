import React from "react";
import styles from "../styles/Dashboard.module.css";

export const BestSellerItem = ({ price, sales }) => {
  return (
    <div className={styles.bestSellerItem}>
      <div className={styles.productDetails}>
        <div className={styles.productImage} />
        <div className={styles.productInfo}>
          <div className={styles.productTitle}>Lorem Ipsum</div>
          <div className={styles.productPrice}>{price}</div>
        </div>
      </div>
      <div className={styles.salesInfo}>
        <div className={styles.salePrice}>{price}</div>
        <div className={styles.salesCount}>{sales} sales</div>
      </div>
    </div>
  );
};
