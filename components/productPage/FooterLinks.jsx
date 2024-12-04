import React from "react";
import styles from "./ProductPage.module.css";

const socialLinks = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/94c4cacc12b9b00a2520ae04e14586905ea436472af520467137bdf735644c58?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    text: "Everyday Finds",
    alt: "Facebook",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ce96dbcaae6670d099548168566ac3a4bfe8ba43eb853b9f5fe1b7db07f9368?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    text: "Everyday Finds",
    alt: "Instagram",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6da5bd8b190642c5efdc8714f45d8188cfce395ee294de9a89602f047b2dfc1a?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    text: "everydayfinds@gmail.com",
    alt: "Email",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cf3c624d66c834ba3cc956931d223c9c22dd5e91434eb8d4cd77462246ab1c0f?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    text: "+254700976984",
    alt: "Phone",
  },
];

export function FooterLinks() {
  return (
    <div className={styles.footerLinks}>
      <nav className={styles.footerNav}>
        <div className={styles.linkColumn}>
          <h3 className={styles.columnTitle}>Navigate</h3>
          <a href="#" className={styles.footerLink}>
            Gift Shop
          </a>
          <a href="#" className={styles.footerLink}>
            New In
          </a>
          <a href="#" className={styles.footerLink}>
            About Us
          </a>
          <a href="#" className={styles.footerLink}>
            Contact Us
          </a>
        </div>
        <div className={styles.linkColumn}>
          <h3 className={styles.columnTitle}>Official</h3>
          <a href="#" className={styles.footerLink}>
            Privacy
          </a>
          <a href="#" className={styles.footerLink}>
            Accessibility
          </a>
          <a href="#" className={styles.footerLink}>
            FAQs
          </a>
          <a href="#" className={styles.footerLink}>
            Terms
          </a>
          <a href="#" className={styles.footerLink}>
            Contacts
          </a>
        </div>
        <div className={styles.linkColumn}>
          <h3 className={styles.columnTitle}>Social</h3>
          {socialLinks.map((link, index) => (
            <a key={index} href="#" className={styles.socialLink}>
              <img
                loading="lazy"
                src={link.icon}
                className={styles.socialIcon}
                alt={link.alt}
              />
              <span>{link.text}</span>
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
