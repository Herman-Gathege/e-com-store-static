import React from "react";
import styles from "./ProductPage.module.css";

const thumbnails = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/083335c032129b93458afa37771a13fa62b896e896cb21d6c4757c5a90e39245?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    alt: "Product thumbnail 1",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1db12a4ec31ad05382abc0d6aa138b7fcea75fad9a91a22b12bcc5ad8c67f6a?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    alt: "Product thumbnail 2",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f6711213a083e2b5d610aea0f3877453e88577c5d9c8bf486b99c1dc189458a8?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    alt: "Product thumbnail 3",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d9d2521dcd79a4b2c10da489a6de6526c995684ad2abf05f19d754437b5105b0?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    alt: "Product thumbnail 4",
  },
];

export function ProductGallery() {
  return (
    <>
      <div className={styles.thumbnailContainer}>
        {thumbnails.map((thumb, index) => (
          <div key={index} className={styles.thumbnailWrapper}>
            <img
              loading="lazy"
              src={thumb.src}
              className={styles.thumbnail}
              alt={thumb.alt}
            />
          </div>
        ))}
      </div>
      <div className={styles.mainImageContainer}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c20e7a3cf5cb9afe43ca14075f261e2e548c8e894b85fcc6c153b5fe6918785?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
          className={styles.mainImage}
          alt="Green Top main product image"
        />
      </div>
    </>
  );
}
