import React from "react";
import styles from "../styles/NavigationLinks.module.css";

const links = [
  { text: "New In!", className: "primary" },
  { text: "About Us", className: "secondary" },
  { text: "Contact Us", className: "secondary" },
];

export const NavigationLinks = () => (
  <nav className={styles.navigation}>
    {links.map((link, index) => (
      <button key={index} className={styles[link.className]} tabIndex="0">
        {link.text}
      </button>
    ))}
  </nav>
);
