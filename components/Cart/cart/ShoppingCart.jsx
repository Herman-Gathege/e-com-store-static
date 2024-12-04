import React from "react";
import { CartItem } from "./CartItem";
import styles from "./ShoppingCart.module.css";

export function ShoppingCart() {
  const cartItems = [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3a5ea482e32b77a09caf3eecbb1a7c72de96f3e8a0a5bda092783dc6bd032d04?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
      title: "Green Top",
      price: "1 x 500.00 kes",
    },
    {
      id: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bad457a45dd1581725286ef4264b7bacb01a008c45f0410388f4a13e52292edf?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
      title: "Green Top",
      price: "1 x 500.00 kes",
    },
  ];

  return (
    <div className={styles.cartContainer}>
      <div className={styles.header}>
        <div>My Bag ({cartItems.length})</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f897973ac1c363a75b3878e491a066d590e9c740d95997e4cb8f34a5b29b4f21?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
          alt=""
          className={styles.cartIcon}
        />
      </div>

      <div className={styles.cartItems}>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            onRemove={() => {}}
          />
        ))}
      </div>

      <div className={styles.divider} />

      <div className={styles.promoSection}>
        <div className={styles.promoCode}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c815924c914c0dbe21af7819688494cabb101aa9ce877a2a81581a121d8b2dc?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
            alt=""
            className={styles.promoIcon}
          />
          <div>25% OFF BLACK FRIDAY</div>
        </div>

        <div className={styles.subtotal}>
          SUBTOTAL: <span className={styles.subtotalAmount}>750 KES</span>
        </div>

        <div className={styles.checkoutInfo}>
          Taxes and shipping fee will be calculated at checkout.
        </div>
      </div>

      <button
        className={styles.checkoutButton}
        onClick={() => {}}
        aria-label="Proceed to checkout"
      >
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
}
