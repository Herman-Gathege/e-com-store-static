import React from "react";
import styles from "./ProductPage.module.css";

const starRating = Array(5).fill(null);

export function ProductInfo() {
  return (
    <div className={styles.productInfo}>
      <div className={styles.productDetails}>
        <h1 className={styles.productTitle}>Green Top</h1>
        <div className={styles.ratingContainer}>
          <div className={styles.stars}>
            {starRating.map((_, index) => (
              <img
                key={index}
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddf01b3858bedba567ace9d8911da37bd451cd0d7c017d440d740138b4c39398?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
                className={styles.starIcon}
                alt=""
              />
            ))}
          </div>
          <span className={styles.ratingCount}>(20)</span>
        </div>
        <div className={styles.price}>500.00 kes</div>
        <p className={styles.paymentInfo}>Pay using mpesa or pay on delivery</p>
        <div className={styles.sizeLabel}>Size: M</div>
        <div className={styles.sizeValue}>M</div>
        <div className={styles.stockInfo}>We have 1 in stock</div>
      </div>
      <button className={styles.addToCartButton}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2087bdecb4fcc896e7a3e4081e5e2a66b761f6b50e8552b10efcd46f7642bbd?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
          className={styles.cartIcon}
          alt=""
        />
        <span>ADD TO CART</span>
      </button>
    </div>
  );
}
