import React from "react";
import { Logo } from "./components/Logo";
import { NavigationLinks } from "./components/NavigationLinks";
import { CartSummary } from "./components/CartSummary";
import { Footer } from "./components/Footer";
import styles from "./styles/Checkout.module.css";

export const Checkout = () => (
  <div className={styles.checkoutContainer}>
    <header className={styles.header}>
      <Logo />
      <NavigationLinks />
      <div className={styles.cartInfo}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9d1ba323d465c89a0c4ca10ebc3ed65046a8319c1324c30a2fd52d5f02df964?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
          alt="Shopping bag icon"
          className={styles.cartIcon}
        />
        <span className={styles.cartCount}>Bag (2)</span>
      </div>
    </header>

    <main className={styles.mainContent}>
      <section className={styles.paymentSection}>
        <h1 className={styles.pageTitle}>Choose a Payment Method</h1>
        <div className={styles.paymentMethod}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/13e4290ed51ec2afc8ffdd7aff4dc296e15991bd99c6f305c0c1bec0e03a50d1?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
            alt="Cash on Delivery icon"
            className={styles.paymentIcon}
          />
          <span className={styles.paymentText}>COD (Cash on Delivery)</span>
        </div>
      </section>

      <CartSummary />
    </main>

    <Footer />
  </div>
);
