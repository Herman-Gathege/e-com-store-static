import React from "react";
import styles from "./NotificationsPanel.module.css";
import { NotificationCard } from "./NotificationCard";

export const NotificationsPanel = () => {
  const notifications = [
    { id: 1, title: "Lorem Ipsum", price: "140", date: "Nov 15,2023" },
    { id: 2, title: "Lorem Ipsum", price: "140", date: "Nov 15,2023" },
    { id: 3, title: "Lorem Ipsum", price: "140", date: "Nov 15,2023" },
    { id: 4, title: "Lorem Ipsum", price: "140", date: "Nov 15,2023" },
  ];

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <div>Notifications</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/58895b06bfff8c704ae408ba8a047953775ce964e130e1e51098baf56986d4f2?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
          className={styles.headerIcon}
          alt=""
          loading="lazy"
        />
      </div>

      <div className={styles.notificationList}>
        {notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            title={notification.title}
            price={notification.price}
            date={notification.date}
          />
        ))}
      </div>

      <div className={styles.actions}>
        <button className={styles.markReadBtn}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/68b636086017cd63361f4f4c939bd4f9ffc0e0673f4d8f41cf4f45467b798144?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
            className={styles.markReadIcon}
            alt=""
            loading="lazy"
          />
          <span>Mark all as read</span>
        </button>
        <button className={styles.viewAllBtn}>View all notificaton</button>
      </div>
    </div>
  );
};
