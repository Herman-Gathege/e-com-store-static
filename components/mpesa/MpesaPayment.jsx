import React from "react";
import { InputField } from "./InputField";
import styles from "./MpesaPayment.module.css";

export const MpesaPayment = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div className={styles.header}>
            <h1 className={styles.title}>GET MPESA PROMPT</h1>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/25b8feda4e5b6c08bb43b2c21bf16e66a856750c8d4571163280055e760fc43f?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
              className={styles.logo}
              alt="Mpesa Logo"
            />
          </div>

          <InputField
            label="First Name"
            id="firstName"
            name="firstName"
            required
          />

          <InputField
            label="Last Name"
            id="lastName"
            name="lastName"
            required
          />

          <InputField
            label="Phone Number"
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            required
          />

          <div className={styles.buttonContainer}>
            <div className={styles.buttonWrapper}>
              <button type="submit" className={styles.submitButton}>
                GET PROMPT
              </button>
            </div>
          </div>
        </form>

        <a href="#" className={styles.returnLink}>
          RETURN TO STORE
        </a>
      </div>
    </div>
  );
};
