import React from "react";
import styles from "./styles/AboutUs.module.css";
import { Logo } from "./components/Logo";
import { NavigationLink } from "./components/NavigationLink";
import { CartIcon } from "./components/CartIcon";
import { NewsletterForm } from "./components/NewsletterForm";
import { SocialLink } from "./components/SocialLink";

const navigationLinks = ["New In!", "About Us", "Contact Us"];
const footerNavLinks = ["Gift Shop", "New In", "About Us", "Contact Us"];
const officialLinks = ["Privacy", "Accessibility", "FAQs", "Terms", "Contacts"];
const socialLinks = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2fe4dab8650c83dfeb09b715bbaf4b07c2344f2b282c4f99c594322c2a63ef03?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    text: "Everyday Finds",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5faea296f1406c1f232b19ad4d09e043018f28b89db04dfeed861bd1ffc15225?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    text: "Everyday Finds",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/04f5abacc6c25136709bddc31babfa3fd1f6962229b36eecdc76d5a3fbc1ba0a?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    text: "everydayfinds@gmail.com",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/733808669b5202172badcd614f736c9211447c2d4692c81fe3e08004fde41ca1?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    text: "+254700976984",
  },
];

export const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <nav className={styles.navbar}>
        <Logo />
        <div className={styles.navLinks}>
          {navigationLinks.map((link, index) => (
            <NavigationLink key={index} text={link} />
          ))}
        </div>
        <div className={styles.navIcons}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9cbbc480d4db2c4c8c64141267bb9f125e44fd462554735ba595cc59b093fc2?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
            className={styles.icon}
            alt="Search icon"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f820cf6004cdd4151359a329a8c452d734820d115e55bb649d633e2556fd440?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
            className={styles.icon}
            alt="User account icon"
          />
          <CartIcon />
        </div>
      </nav>

      <main className={styles.mainContent}>
        <div className={styles.breadcrumb}>Home / About Us</div>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>Learn More About Everyday Finds</h1>
          <div className={styles.imageContainer}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d534797fda9641fa385c89d7b202d782b4045f5895d270cc8ceaf16eb7042ed?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
              className={styles.mainImage}
              alt="Everyday Finds store showcase"
            />
          </div>
        </div>
        <article className={styles.aboutText}>
          {/* Content from the original long text block */}
        </article>
      </main>

      <footer className={styles.footer}>
        <Logo />
        <div className={styles.footerContent}>
          <NewsletterForm />
          <div className={styles.footerLinks}>
            <div className={styles.navigationSection}>
              <h2 className={styles.sectionTitle}>Navigate</h2>
              {footerNavLinks.map((link, index) => (
                <NavigationLink key={index} text={link} />
              ))}
            </div>
            <div className={styles.officialSection}>
              <h2 className={styles.sectionTitle}>Official</h2>
              {officialLinks.map((link, index) => (
                <NavigationLink key={index} text={link} />
              ))}
            </div>
            <div className={styles.socialSection}>
              <h2 className={styles.sectionTitle}>Social</h2>
              {socialLinks.map((link, index) => (
                <SocialLink key={index} {...link} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          Copyright © 2024, Everyday Finds. Created By Mad_Bark_Creations
        </div>
      </footer>
    </div>
  );
};
