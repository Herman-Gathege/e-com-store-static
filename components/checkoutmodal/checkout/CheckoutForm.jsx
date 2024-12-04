import React from "react";
import { FormInput } from "./FormInput";
import styles from "./CheckoutForm.module.css";

export function CheckoutForm() {
  const formFields = [
    { id: "firstName", label: "First Name" },
    { id: "lastName", label: "Last Name" },
    { id: "phoneNumber", label: "Phone Number", type: "tel" },
    { id: "location", label: "Enter Location" },
  ];

  return (
    <form className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <div className={styles.formContent}>
          <div className={styles.headerContainer}>
            <div className={styles.headerTitle}>YOUR INFO</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ffb941385386c401183ec240fe941cc8a478d506277f632838aaa94b23dd8f3?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
              className={styles.headerIcon}
              alt=""
            />
          </div>

          {formFields.map((field) => (
            <div key={field.id} className={styles.inputGroup}>
              <FormInput
                id={field.id}
                label={field.label}
                type={field.type || "text"}
                required
              />
            </div>
          ))}
        </div>

        <div className={styles.actionContainer}>
          <div className={styles.confirmButton}>
            <div className={styles.buttonWrapper}>
              <button type="submit" className={styles.confirmButtonText}>
                CONFIRM
              </button>
            </div>
          </div>
          <div className={styles.returnLink}>
            <a href="#" className={styles.returnText}>
              RETURN TO STORE
            </a>
          </div>
        </div>
      </div>
    </form>
  );
}
