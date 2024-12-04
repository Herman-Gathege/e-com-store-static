import React from "react";
import styles from "./ProductPage.module.css";
import { ProductCard } from "./ProductCard";

const relatedProducts = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9774f058ff1ea4d34ae9602aeb6a398432bc200639e04968aadda57142c11d14?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    title: "Yellow Dress",
    size: "Size 10",
    price: "Price: 1900 kes",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9774f058ff1ea4d34ae9602aeb6a398432bc200639e04968aadda57142c11d14?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    title: "Yellow Dress",
    size: "Size 10",
    price: "Price: 1900 kes",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2af9cb4048b9d1218acb3fcdba7277bce05ebbf44efbd59aca2a079bc1a3a947?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    title: "Yellow Dress",
    size: "Size 10",
    price: "Price: 1900 kes",
  },
];

export function RelatedProducts() {
  return (
    <section className={styles.relatedProducts}>
      <h2 className={styles.sectionTitle}>YOU MAY ALSO LIKE</h2>
      <div className={styles.productGrid}>
        {relatedProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
}
