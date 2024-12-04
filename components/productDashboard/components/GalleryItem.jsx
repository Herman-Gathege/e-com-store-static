import React from "react";
import styles from "../styles/ProductDashboard.module.css";

export const GalleryItem = ({ thumbnail }) => {
  return (
    <div className={styles.galleryItem}>
      <div className={styles.thumbnailPreview} />
      <div className={styles.thumbnailInfo}>
        <div className={styles.thumbnailName}>Product thumbnail.png</div>
        <div className={styles.progressWrapper}>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} />
          </div>
        </div>
      </div>
      <div className={styles.deleteButton}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6759c6ff5f95005af035ba9238fb3ac4b888b932935ab710dc8125ee62f909f?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
          alt="Delete"
          className={styles.deleteIcon}
        />
      </div>
    </div>
  );
};
