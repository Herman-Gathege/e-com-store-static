import React from "react";
import styles from "./ProductPage.module.css";
import { NewsletterForm } from "./NewsletterForm";
import { FooterLinks } from "./FooterLinks";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBrand}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/416e32f35aed8a19d72a24d41f8b8941416ec5f3b67500275762a426af7469ff?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
          className={styles.footerLogo}
          alt="Everyday Finds Logo"
        />
        <div className={styles.footerBrandName}>Everyday Finds</div>
      </div>
      <div className={styles.footerContent}>
        <NewsletterForm />
        <FooterLinks />
      </div>
      <div className={styles.copyright}>
        Copyright © 2024, Everyday Finds. Created By Mad_Bark_Creations
      </div>
    </footer>
  );
}
