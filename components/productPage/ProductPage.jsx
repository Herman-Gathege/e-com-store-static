import React from "react";
import styles from "./ProductPage.module.css";
import { Navbar } from "./Navbar";
import { ProductSection } from "./ProductSection";
import { Footer } from "./Footer";

export function ProductPage() {
  return (
    <div className={styles.productPage}>
      <Navbar />
      <ProductSection />
      <Footer />
    </div>
  );
}
