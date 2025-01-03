import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ image, title, size, price }) => {
  return (
    <div className={styles.productCard}>
      <img
        loading="lazy"
        src={image}
        alt={`Product image of ${title}`}
        className={styles.productImage}
      />
      <div className={styles.productDetails}>
        <div className={styles.productTitle}>{title}</div>
        <div className={styles.productSize}>{size}</div>
        <div className={styles.productPrice}>Price: {price} kes</div>
        <div className={styles.buttonContainer}>
          <div className={styles.actionButton}>
            <div className={styles.buttonText}>Add to Cart</div>
          </div>
          <div className={styles.actionButton}>
            <div className={styles.buttonText}>View Item</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
