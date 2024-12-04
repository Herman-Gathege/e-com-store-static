import React from "react";
import styles from "./NotificationCard.module.css";

export const NotificationCard = ({ title, price, date }) => {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail} />
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.info}>
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>₹{price}</div>
          </div>
          <div className={styles.status}>Sold</div>
        </div>
        <div className={styles.date}>{date}</div>
      </div>
    </div>
  );
};
