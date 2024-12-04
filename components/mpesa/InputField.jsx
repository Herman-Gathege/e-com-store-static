import React from "react";
import styles from "./MpesaPayment.module.css";

export const InputField = ({ label, id, type = "text", ...props }) => {
  return (
    <div className={styles.inputGroup}>
      <div className={styles.inputWrapper}>
        <label htmlFor={id} className={styles.inputLabel}>
          {label}
        </label>
        <input
          id={id}
          type={type}
          className={styles.inputField}
          aria-label={label}
          {...props}
        />
      </div>
    </div>
  );
};
