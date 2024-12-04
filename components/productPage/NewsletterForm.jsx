import React from "react";
import styles from "./ProductPage.module.css";

export function NewsletterForm() {
  return (
    <div className={styles.newsletter}>
      <p className={styles.newsletterText}>
        Join us to get latest updates on upcoming events.
      </p>
      <form className={styles.subscribeForm}>
        <div className={styles.inputContainer}>
          <label htmlFor="emailInput" className={styles.visuallyHidden}>
            Email address
          </label>
          <input
            type="email"
            id="emailInput"
            className={styles.emailInput}
            placeholder="Email address"
            aria-label="Email address"
          />
          <button type="submit" className={styles.subscribeButton}>
            Subscribe
          </button>
        </div>
      </form>
      <p className={styles.privacyText}>
        By signing up you agree to our privacy policies.
      </p>
    </div>
  );
}
