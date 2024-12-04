import React from "react";
import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <div className={styles.newsletterContainer}>
      <div className={styles.newsletterText}>
        Join us to get latest updates on upcoming events.
      </div>
      <form className={styles.formContainer}>
        <div className={styles.inputWrapper}>
          <div className={styles.inputField}>
            <label htmlFor="emailInput" className={styles["visually-hidden"]}>
              Email address
            </label>
            <input
              type="email"
              id="emailInput"
              placeholder="Email address"
              aria-label="Email address"
              className={styles.emailInput}
            />
          </div>
          <div className={styles.divider} />
          <button type="submit" className={styles.submitButton}>
            Subscribe
          </button>
        </div>
      </form>
      <div className={styles.privacyText}>
        By signing up you agree to our privacy policies.
      </div>
    </div>
  );
};

export default Newsletter;
