import * as React from "react";
import styles from "./ProductCard.module.css";

export default function ProductCard({
  image,
  title,
  category,
  price,
  summary,
  sales,
  remaining,
}) {
  return (
    <div className={styles.productCard}>
      <div className={styles.header}>
        <img
          loading="lazy"
          src={image}
          alt={`Product image for ${title}`}
          className={styles.productImage}
        />
        <div className={styles.content}>
          <div className={styles.titleRow}>
            <div className={styles.titleWrapper}>
              <div className={styles.title}>{title}</div>
              <div className={styles.category}>{category}</div>
            </div>
            <button className={styles.menuButton} aria-label="More options">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c0436e437762a1877b98e7a98d7efd34e8863a902533681781f785444502941?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
                alt=""
                className={styles.menuIcon}
              />
            </button>
          </div>
          <div className={styles.price}>₹{price}</div>
        </div>
      </div>
      <div className={styles.summary}>
        <div className={styles.summaryTitle}>Summary</div>
        <div className={styles.summaryText}>{summary}</div>
      </div>
      <div className={styles.stats}>
        <div className={styles.statsRow}>
          <div className={styles.statsLabel}>Sales</div>
          <div className={styles.statsValue}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6831f3d2e3778bf578d9a683b019f3f68ad9a823ca5fa53b3d5889aeaeb62c8c?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
              alt=""
              className={styles.statsIcon}
            />
            <div>{sales}</div>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.statsRow}>
          <div className={styles.statsLabel}>Remaining Products</div>
          <div className={styles.statsValue}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d117d8677e3890bec68e10d0429e7e8e20751f2d775e02fb5a82c47ad200dd1a?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
              alt=""
              className={styles.statsIcon}
            />
            <div>{remaining}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
