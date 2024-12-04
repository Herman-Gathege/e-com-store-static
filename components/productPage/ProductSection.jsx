import React from "react";
import styles from "./ProductPage.module.css";
import { ProductGallery } from "./ProductGallery";
import { ProductInfo } from "./ProductInfo";
import { RelatedProducts } from "./RelatedProducts";

export function ProductSection() {
  return (
    <main className={styles.mainContent}>
      <div className={styles.breadcrumb}>Home / Yellow Dress</div>
      <div className={styles.productSectionAddToCart}>
        <ProductGallery />
        <ProductInfo />
      </div>
      <section className={styles.descriptionAndReviews}>
        <div className={styles.tabContainer}>
          <button className={styles.tabButton}>DESCRIPTION</button>
          <button className={styles.tabButton}>Reviews</button>
        </div>
        <div className={styles.tabContent}>DESCRIPTION</div>
      </section>
      <RelatedProducts />
    </main>
  );
}
