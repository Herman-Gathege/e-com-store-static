import React from "react";
import styles from "../ProductDetails.module.css";

const navItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dfab1e49e0c884e6dfda929607690025607e9c98d29012281dddffdb7f4a5bb3?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    text: "Dashboard",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5e3f696dea1abb0d74912089fc2c483307554f9672276fb0c20285b0a87554a2?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    text: "All products",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc0aff5929f5f5c69bd34c27860b086a26632063d68650d2892a45d247f1ffca?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    text: "Order list",
  },
];

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf6010aeec506245bfeb0a07444a06b3f33fd6364299aa8abde964b080331a51?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
          alt="Company Logo"
          className={styles.logo}
        />
        <nav className={styles.navMenu}>
          {navItems.map((item, index) => (
            <div key={index} className={styles.navItem}>
              <div className={styles.navButton}>
                <img src={item.icon} alt="" className={styles.navIcon} />
                <div className={styles.navText}>{item.text}</div>
              </div>
            </div>
          ))}
        </nav>
        <div className={styles.categoryHeader}>
          <div>Categories</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/24849d77d79a9639df1f8bd33cc9992f2c47166e0f43f57e7f2bb25737559353?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
            alt=""
            className={styles.navIcon}
          />
        </div>
      </div>
    </div>
  );
}
