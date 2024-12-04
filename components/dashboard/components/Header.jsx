import * as React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.controls}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f070362cf86e96f13f09ba85bbd903b4ec1709e10ab9013138f7e658c4af129?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
          alt="Notifications"
          className={`${styles.icon} ${styles.notificationIcon}`}
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f2d413c8208dfbf8f9d3dfb62886c1256a659d39e3cbadf7a54c13704156df2?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
          alt="Search"
          className={`${styles.icon} ${styles.searchIcon}`}
        />
        <button className={styles.adminButton}>
          <div className={styles.adminButtonInner}>
            <div className={styles.adminText}>Admin</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d86dadc376c6ad247a921df103b0e65be859dab59fdc00023fd941499933abaf?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
              alt=""
              className={styles.adminIcon}
            />
          </div>
        </button>
      </div>
    </header>
  );
}
