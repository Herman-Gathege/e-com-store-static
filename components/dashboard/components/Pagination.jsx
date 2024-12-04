import * as React from "react";
import styles from "./Pagination.module.css";

export default function Pagination({ currentPage, totalPages }) {
  return (
    <div className={styles.pagination}>
      {[1, 2, 3, 4].map((page) => (
        <div key={page} className={styles.pageButton}>
          <button
            className={`${styles.pageButtonInner} ${
              page === currentPage ? styles.active : styles.inactive
            }`}
          >
            {page}
          </button>
        </div>
      ))}
      <span>...</span>
      <div className={styles.pageButton}>
        <button className={`${styles.pageButtonInner} ${styles.inactive}`}>
          {totalPages}
        </button>
      </div>
      <div className={styles.pageButton}>
        <button
          className={`${styles.pageButtonInner} ${styles.inactive} ${styles.nextButton}`}
        >
          <span>Next</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d044a4c5f22047cf14704f8dd484ead02aff2b2669c99a46d74c90a5a37769f1?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
            alt=""
            className={styles.nextIcon}
          />
        </button>
      </div>
    </div>
  );
}
