import React from "react";
import styles from "../OrderDetails.module.css";

export const ProductRow = ({ productId, quantity, total }) => {
  return (
    <div className={styles.productRow}>
      <div className={styles.productInfo}>
        <div className={styles.productImageContainer}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a2afc95949710277e869a22b73dd8fcd51d9141c619b7df758aced9f3038d0c?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
            className={styles.productIcon}
            alt=""
          />
        </div>
        <div className={styles.productImagePlaceholder} />
        <div className={styles.productName}>Lorem Ipsum</div>
      </div>
      <div className={styles.productId}>#{productId}</div>
      <div className={styles.productQuantity}>{quantity}</div>
      <div className={styles.productTotal}>₹{total}</div>
    </div>
  );
};
