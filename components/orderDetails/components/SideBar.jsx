import React from "react";
import styles from "../OrderDetails.module.css";

export const SideBar = () => {
  const menuItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dfab1e49e0c884e6dfda929607690025607e9c98d29012281dddffdb7f4a5bb3?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
      label: "Dashboard",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5e3f696dea1abb0d74912089fc2c483307554f9672276fb0c20285b0a87554a2?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
      label: "All products",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc0aff5929f5f5c69bd34c27860b086a26632063d68650d2892a45d247f1ffca?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
      label: "Order list",
    },
  ];

  return (
    <div className={styles.sideBar}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf6010aeec506245bfeb0a07444a06b3f33fd6364299aa8abde964b080331a51?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
        className={styles.logo}
        alt="Company Logo"
      />
      <div className={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <button key={index} className={styles.menuButton}>
            <div className={styles.menuItem}>
              <img
                loading="lazy"
                src={item.icon}
                className={styles.menuIcon}
                alt=""
              />
              <div className={styles.menuLabel}>{item.label}</div>
            </div>
          </button>
        ))}
      </div>
      <div className={styles.categoriesHeader}>
        <div className={styles.categoriesTitle}>Categories</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/24849d77d79a9639df1f8bd33cc9992f2c47166e0f43f57e7f2bb25737559353?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
          className={styles.categoriesIcon}
          alt=""
        />
      </div>
    </div>
  );
};
