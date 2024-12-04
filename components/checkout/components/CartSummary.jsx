import React from "react";
import styles from "../styles/CartSummary.module.css";

const cartItems = [
  {
    id: 1,
    name: "Quinoa Bars",
    description: "Pack of 2-24 bars",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cfef85a50ca107ee66b8ff195195c5a7d06a85f2bc11c80db6840e3e654f9a3b?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    price: "864.00",
  },
  {
    id: 2,
    name: "Mother Secret Trial mix",
    description: "Pack of 2-400 g",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/73002e14ec323471bc5d2557f506c0a276f5a4b2f99339729aa02da85ef80fd2?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    price: "714.00",
  },
];

export const CartSummary = () => (
  <div className={styles.summaryContainer}>
    <h2 className={styles.summaryTitle}>Item Summary</h2>
    {cartItems.map((item) => (
      <div key={item.id} className={styles.itemCard}>
        <img
          src={item.image}
          alt={item.name}
          className={styles.itemImage}
          loading="lazy"
        />
        <div className={styles.itemDetails}>
          <h3 className={styles.itemName}>{item.name}</h3>
          <p className={styles.itemDescription}>{item.description}</p>
          <div className={styles.priceContainer}>
            <span className={styles.currencySymbol}>₹</span>
            <span className={styles.price}>{item.price}</span>
          </div>
          <button className={styles.removeButton} tabIndex="0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/930b0723c2118e89b6ae43297faaf2ae1ad8e99c5654f1d0ceb22a92221de112?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
              alt=""
              className={styles.removeIcon}
            />
            Remove
          </button>
        </div>
      </div>
    ))}
  </div>
);
