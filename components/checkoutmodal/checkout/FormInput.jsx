import React from "react";
import styles from "./FormInput.module.css";

export function FormInput({ label, id, type = "text", ...props }) {
  return (
    <div className={styles.inputContainer}>
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
  );
}
