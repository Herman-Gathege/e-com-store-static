import React from "react";
import styles from "./Sidebar.module.css";

const navItems = [
  {
    id: "dashboard",
    text: "Dashboard",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dfab1e49e0c884e6dfda929607690025607e9c98d29012281dddffdb7f4a5bb3?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    active: false,
  },
  {
    id: "products",
    text: "All products",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5e3f696dea1abb0d74912089fc2c483307554f9672276fb0c20285b0a87554a2?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    active: false,
  },
  {
    id: "orders",
    text: "Order list",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/40c231bd9f8f52fb250b02b5a920eb5b68be1f721afe823dd18d34650052f355?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    active: true,
  },
];

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf6010aeec506245bfeb0a07444a06b3f33fd6364299aa8abde964b080331a51?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
        className={styles.logo}
        alt="Company logo"
      />
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <div
            key={item.id}
            className={styles.navItem}
            role="button"
            tabIndex={0}
          >
            <div
              className={`${styles.navItemContent} ${
                item.active ? styles.navItemContentActive : ""
              }`}
            >
              <img
                loading="lazy"
                src={item.icon}
                className={styles.navIcon}
                alt=""
              />
              <div
                className={`${styles.navText} ${
                  item.active ? styles.navItemActive : ""
                }`}
              >
                {item.text}
              </div>
            </div>
          </div>
        ))}
      </nav>
      <div className={styles.categories}>
        <div className={styles.categoriesText}>Categories</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/24849d77d79a9639df1f8bd33cc9992f2c47166e0f43f57e7f2bb25737559353?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
          className={styles.categoriesIcon}
          alt=""
        />
      </div>
    </div>
  );
}
