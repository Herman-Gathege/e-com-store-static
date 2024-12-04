import React from "react";
import styles from "./AdminDropdown.module.css";

export const MenuItem = ({ text, iconSrc, onClick }) => {
  return (
    <div className={styles.menuItem}>
      <div
        className={styles.menuItemContent}
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onClick();
          }
        }}
      >
        <div className={styles.menuItemText}>{text}</div>
        <img
          loading="lazy"
          src={iconSrc}
          className={styles.menuItemIcon}
          alt=""
        />
      </div>
    </div>
  );
};
