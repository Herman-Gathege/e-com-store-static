import React from "react";
import styles from "../styles/ProductDashboard.module.css";

export const InputField = ({ label, placeholder, type = "text", value }) => {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputLabel}>{label}</div>
      <div className={styles.inputContainer}>
        <div className={styles.inputField}>
          {type === "textarea" ? (
            <textarea
              className={styles.textArea}
              placeholder={placeholder}
              value={value}
            />
          ) : (
            <input
              type={type}
              className={styles.input}
              placeholder={placeholder}
              value={value}
            />
          )}
        </div>
      </div>
    </div>
  );
};
