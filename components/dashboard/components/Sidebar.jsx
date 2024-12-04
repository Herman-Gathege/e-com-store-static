import * as React from "react";
import styles from "./Sidebar.module.css";

const navItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dfab1e49e0c884e6dfda929607690025607e9c98d29012281dddffdb7f4a5bb3?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    text: "Dashboard",
    active: false,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b90899fef7df02a99f62bd530a29e62afd21f2342c4a3481cf11304cb93a158b?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    text: "All products",
    active: true,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc0aff5929f5f5c69bd34c27860b086a26632063d68650d2892a45d247f1ffca?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    text: "Order list",
    active: false,
  },
];

const categories = [
  { name: "Lorem Ipsum", count: 21 },
  { name: "Lorem Ipsum", count: 32 },
  { name: "Lorem Ipsum", count: 13 },
  { name: "Lorem Ipsum", count: 14 },
  { name: "Lorem Ipsum", count: 6 },
  { name: "Lorem Ipsum", count: 11 },
];

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f300cd64aee0ae063012574fbfc958eedc7c94d24b1b3c6f6224b122d53abdd4?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
        alt="Company logo"
        className={styles.logo}
      />
      <nav className={styles.nav}>
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`${styles.navButton} ${
              item.active ? styles.navButtonActive : ""
            }`}
          >
            <div
              className={`${styles.navButtonInner} ${
                item.active ? styles.navButtonInnerActive : ""
              }`}
            >
              <img
                loading="lazy"
                src={item.icon}
                alt=""
                className={styles.navIcon}
              />
              <div className={styles.navText}>{item.text}</div>
            </div>
          </div>
        ))}
      </nav>
      <div className={styles.categories}>
        <div className={styles.categoriesHeader}>
          <div className={styles.categoriesTitle}>Categories</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/58479be9ef2aab6652e981997c83fe4cc2523f2679f7a8a6288a5fe3eb693618?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
            alt=""
            className={styles.categoriesIcon}
          />
        </div>
        <div className={styles.categoryList}>
          {categories.map((category, index) => (
            <div key={index} className={styles.categoryItem}>
              <div className={styles.categoryName}>{category.name}</div>
              <div className={styles.categoryCount}>{category.count}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
