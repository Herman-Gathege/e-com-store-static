import React from "react";
import styles from "./ProductPage.module.css";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brandContainer}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/42d75dea5fa6d44819ec87d4c275b6b749210a215cbd118f8d379a3dbe3faa82?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
          className={styles.brandLogo}
          alt="Everyday Finds Logo"
        />
        <div className={styles.brandName}>Everyday Finds</div>
      </div>
      <div className={styles.navLinks}>
        <button className={styles.navButton}>New In!</button>
        <button className={styles.navButton}>About Us</button>
        <button className={styles.navButton}>Contact Us</button>
      </div>
      <div className={styles.navActions}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d467788b0882d56c05a3fcbb68600f8b4f51d8dfa13aedbb9e5c56dc4aee381?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
          className={styles.actionIcon}
          alt=""
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa325a82653444030e13a7c4ab4d83b72513ab5f42c4e691ed6023356fe4ff39?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
          className={styles.actionIcon}
          alt=""
        />
        <div className={styles.cartContainer}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb5983710e896d3b1ed786d91ee0145b0ad19b34c28b60d83bd9db320ea02411?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
            className={styles.actionIcon}
            alt="Shopping cart"
          />
          <div className={styles.cartCount}>Bag (2)</div>
        </div>
      </div>
    </nav>
  );
}
