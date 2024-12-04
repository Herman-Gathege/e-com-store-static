import React from "react";
import styles from "../styles/NewsletterForm.module.css";

export const NewsletterForm = () => (
  <form className={styles.newsletterForm}>
    <h3 className={styles.formTitle}>
      Join us to get latest updates on upcoming events.
    </h3>
    <div className={styles.inputContainer}>
      <label htmlFor="email" className="visually-hidden">
        Email address
      </label>
      <input
        type="email"
        id="email"
        className={styles.emailInput}
        placeholder="Email address"
        aria-label="Email address"
      />
      <button type="submit" className={styles.submitButton}>
        Subscribe
      </button>
    </div>
    <p className={styles.privacyNote}>
      By signing up you agree to our privacy policies.
    </p>
  </form>
);
