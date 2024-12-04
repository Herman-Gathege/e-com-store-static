import React from "react";
import styles from "../styles/Dashboard.module.css";

export const OrderRow = ({
  productIcon,
  productName,
  orderId,
  date,
  customer,
  status,
  amount,
}) => {
  const getStatusClass = (status) => {
    return status === "Delivered"
      ? styles.statusDelivered
      : styles.statusCanceled;
  };

  return (
    <div className={styles.orderRow}>
      <div className={styles.productInfo}>
        <div className={styles.productIconWrapper}>
          <img
            loading="lazy"
            src={productIcon}
            alt=""
            className={styles.productIcon}
          />
        </div>
        <div className={styles.productName}>{productName}</div>
      </div>
      <div className={styles.orderId}>{orderId}</div>
      <div className={styles.orderDate}>{date}</div>
      <div className={styles.customerInfo}>
        <img
          loading="lazy"
          src={customer.avatar}
          alt=""
          className={styles.customerAvatar}
        />
        <div className={styles.customerName}>{customer.name}</div>
      </div>
      <div className={styles.statusWrapper}>
        <div className={getStatusClass(status)} />
        <div className={styles.statusText}>{status}</div>
      </div>
      <div className={styles.orderAmount}>{amount}</div>
    </div>
  );
};
