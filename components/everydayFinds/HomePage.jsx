import React from "react";
import { Logo } from "./components/Logo";
import { NavigationLink } from "./components/NavigationLink";
import { SocialLink } from "./components/SocialLink";
import { NewsletterForm } from "./components/NewsletterForm";
import styles from "./styles/HomePage.module.css";

const navigationLinks = ["New In!", "About Us", "Contact Us"];
const footerNavLinks = ["Gift Shop", "New In", "About Us", "Contact Us"];
const officialLinks = ["Privacy", "Accessibility", "FAQs", "Terms", "Contacts"];
const socialLinks = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/90b59b9d1be778a53b2f26d64bf1e6db347b51d794b12180f8ab0dd5a00da033?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    text: "Everyday Finds",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9260edd0fdc5d66b92698afb33ca41570d5d5b1d7705bbf9d5c5aa7e720395ec?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    text: "Everyday Finds",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad4772e31b3d9b54b5d04e93155359aa3ca478a459cac11de5ab663f329240ad?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    text: "everydayfinds@gmail.com",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8fad3afac56e667cd9ca16f32d1257fba7e659d152e9b5a704eb373cf4ec6c82?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    text: "+254700976984",
  },
];

export const HomePage = () => (
  <div className={styles.homePage}>
    <nav className={styles.navbar}>
      <Logo />
      <div className={styles.navLinks}>
        {navigationLinks.map((link) => (
          <NavigationLink key={link} text={link} />
        ))}
      </div>
      <div className={styles.userActions}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c027f92f20a54a2df688fa23656646603845d6de9a89bc8e46f06ccb1bd9d37?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
          className={styles.actionIcon}
          alt="Search"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa325a82653444030e13a7c4ab4d83b72513ab5f42c4e691ed6023356fe4ff39?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
          className={styles.actionIcon}
          alt="User account"
        />
        <div className={styles.cartContainer}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/87561694d3a971a27352594e50a8b89cec4b094766a508d37790c2e6d42de414?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
            className={styles.actionIcon}
            alt="Shopping bag"
          />
          <div className={styles.cartCount}>Bag (2)</div>
        </div>
      </div>
    </nav>

    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>We Bring to You Everyday Finds.</h1>
          <p className={styles.heroDescription}>
            Find trendy attire at the comfort of your home, your next outfit is
            one click away.
          </p>
          <button className={styles.ctaButton}>View Latest Collection</button>
        </div>
        <div className={styles.heroImageContainer}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/62414d0dca994bc08e89bf17dcfb0977370d5e2a567a63404c4ce836d3a03d25?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
            className={styles.heroImage}
            alt="Featured collection"
          />
        </div>
      </div>
    </section>

    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0659961f0159e6cbbe571449f36e2d8c5c973ef3ba05dac537f44c65368d6894?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
      className={styles.bannerImage}
      alt="Promotional banner"
    />

    <footer className={styles.footer}>
      <Logo />
      <div className={styles.footerContent}>
        <div className={styles.newsletterSection}>
          <h2 className={styles.newsletterTitle}>
            Join us to get latest updates on upcoming events.
          </h2>
          <NewsletterForm />
          <p className={styles.privacyNote}>
            By signing up you agree to our privacy policies.
          </p>
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.navigationSection}>
            <h3 className={styles.sectionTitle}>Navigate</h3>
            {footerNavLinks.map((link) => (
              <NavigationLink key={link} text={link} />
            ))}
          </div>

          <div className={styles.officialSection}>
            <h3 className={styles.sectionTitle}>Official</h3>
            {officialLinks.map((link) => (
              <NavigationLink key={link} text={link} />
            ))}
          </div>

          <div className={styles.socialSection}>
            <h3 className={styles.sectionTitle}>Social</h3>
            {socialLinks.map((link) => (
              <SocialLink key={link.text} {...link} />
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
