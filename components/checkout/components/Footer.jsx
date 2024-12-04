import React from "react";
import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";
import styles from "../styles/Footer.module.css";

const socialLinks = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2fe4dab8650c83dfeb09b715bbaf4b07c2344f2b282c4f99c594322c2a63ef03?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    text: "Everyday Finds",
    alt: "Facebook",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ed7342e424b434e36fdf7d06d0e7fc817de381f68b0077775061803b4564076?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    text: "Everyday Finds",
    alt: "Instagram",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/04f5abacc6c25136709bddc31babfa3fd1f6962229b36eecdc76d5a3fbc1ba0a?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    text: "everydayfinds@gmail.com",
    alt: "Email",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6fb3df2de0cd5d92d786e84fb9dadeb6f1d5864cdb04a7aa0ee1d112fef2a3fb?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    text: "+254700976984",
    alt: "Phone",
  },
];

export const Footer = () => (
  <footer className={styles.footer}>
    <Logo />
    <div className={styles.footerContent}>
      <NewsletterForm />
      <nav className={styles.footerNav}>
        <div className={styles.navSection}>
          <h4>Navigate</h4>
          <a href="#" tabIndex="0">
            Gift Shop
          </a>
          <a href="#" tabIndex="0">
            New In
          </a>
          <a href="#" tabIndex="0">
            About Us
          </a>
          <a href="#" tabIndex="0">
            Contact Us
          </a>
        </div>
        <div className={styles.navSection}>
          <h4>Official</h4>
          <a href="#" tabIndex="0">
            Privacy
          </a>
          <a href="#" tabIndex="0">
            Accessibility
          </a>
          <a href="#" tabIndex="0">
            FAQs
          </a>
          <a href="#" tabIndex="0">
            Terms
          </a>
          <a href="#" tabIndex="0">
            Contacts
          </a>
        </div>
        <div className={styles.socialSection}>
          <h4>Social</h4>
          {socialLinks.map((link, index) => (
            <a key={index} href="#" className={styles.socialLink} tabIndex="0">
              <img src={link.icon} alt={link.alt} />
              <span>{link.text}</span>
            </a>
          ))}
        </div>
      </nav>
    </div>
    <div className={styles.copyright}>
      Copyright © 2024, Everyday Finds. Created By Mad_Bark_Creations
    </div>
  </footer>
);
