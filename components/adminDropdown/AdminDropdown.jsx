import React from "react";
import styles from "./AdminDropdown.module.css";
import { MenuItem } from "./MenuItem";

export const AdminDropdown = () => {
  const menuItems = [
    {
      text: "Change password",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d044a4c5f22047cf14704f8dd484ead02aff2b2669c99a46d74c90a5a37769f1?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
      onClick: () => {},
    },
    {
      text: "Log out",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/22fa97b65d6a8486b43c2435466523a3d2223e9d3dd3253164f0af38f34bcfe0?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
      onClick: () => {},
    },
  ];

  return (
    <div className={styles.adminDropdown}>
      <div className={styles.adminTitle}>Admin</div>
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          text={item.text}
          iconSrc={item.iconSrc}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
};
