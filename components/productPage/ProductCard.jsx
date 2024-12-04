import React from "react";
import styles from "./ProductPage.module.css";

export function ProductCard({ image, title, size, price }) {
  return (
    <article className={styles.productCard}>
      <img
        loading="lazy"
        src={image}
        className={styles.productImage}
        alt={title}
      />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardSize}>{size}</div>
        <div className={styles.cardPrice}>{price}</div>
        <div className={styles.cardActions}>
          <button className={styles.cardButton}>Add to Cart</button>
          <button className={styles.cardButton}>View Item</button>
        </div>
      </div>
    </article>
  );
}
