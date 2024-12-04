import React from "react";
import styles from "../styles/Dashboard.module.css";

export const StatCard = ({ title, amount, percentage, icon, menuIcon }) => {
  return (
    <div className={styles.statCard}>
      <div className={styles.statHeader}>
        <div className={styles.statTitle}>{title}</div>
        <img loading="lazy" src={menuIcon} alt="" className={styles.menuIcon} />
      </div>
      <div className={styles.statContent}>
        <div className={styles.statInfo}>
          <div className={styles.iconWrapper}>
            <img loading="lazy" src={icon} alt="" className={styles.statIcon} />
          </div>
          <div className={styles.amount}>{amount}</div>
        </div>
        <div className={styles.percentageWrapper}>
          <img
            loading="lazy"
            src="/trend-up.svg"
            alt=""
            className={styles.trendIcon}
          />
          <div className={styles.percentage}>{percentage}</div>
        </div>
      </div>
      <div className={styles.comparisonText}>Compared to Oct 2023</div>
    </div>
  );
};
