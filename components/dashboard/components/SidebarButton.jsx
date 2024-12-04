import React from "react";
import styles from "../styles/Dashboard.module.css";

export const SidebarButton = ({ icon, label, isActive }) => {
  return (
    <div className={styles.sidebarButton}>
      <div className={isActive ? styles.activeStyleLayer : styles.styleLayer}>
        <img loading="lazy" src={icon} alt="" className={styles.buttonIcon} />
        <div className={styles.buttonLabel}>{label}</div>
      </div>
    </div>
  );
};
