import React from "react";
import styles from "../styles/ProductDashboard.module.css";

export const SidebarButton = ({ icon, label, isActive }) => {
  return (
    <div className={styles.sidebarButton}>
      <div className={`${styles.styleLayer} ${isActive ? styles.active : ""}`}>
        <img loading="lazy" src={icon} alt="" className={styles.buttonIcon} />
        <div className={styles.buttonLabel}>{label}</div>
      </div>
    </div>
  );
};
