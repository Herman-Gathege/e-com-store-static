import React from "react";
import styles from "./CartItem.module.css";

export function CartItem({ image, title, price, onRemove }) {
  return (
    <div className={styles.cartItem}>
      <div className={styles.productInfo}>
        <img
          loading="lazy"
          src={image}
          alt={title}
          className={styles.productImage}
        />
        <div>{title}</div>
      </div>
      <div className={styles.priceContainer}>
        <div className={styles.price}>{price}</div>
        <button
          onClick={onRemove}
          className={styles.removeButton}
          aria-label={`Remove ${title} from cart`}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
