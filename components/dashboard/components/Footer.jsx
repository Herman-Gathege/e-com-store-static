import * as React from "react";
import styles from "./Footer.module.css";

const links = ["About", "Careers", "Policy", "Contact"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider} />
      <div className={styles.content}>
        <div className={styles.copyright}>
          <span>© </span>
          <span className={styles.copyrightYear}>
            2023 - pulstron Dashboard
          </span>
        </div>
        <div className={styles.links}>
          {links.map((link, index) => (
            <a key={index} href="#" className={styles.link}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
