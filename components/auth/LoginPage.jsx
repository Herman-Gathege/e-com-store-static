import React from "react";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import styles from "./LoginPage.module.css";

export const LoginPage = () => {
  return (
    <form className={styles.loginContainer}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>My ACCOUNT</h1>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b67fa7e4731d9d9f1c23012df146ac9df4341192b20bc4031b2f67ded857fec?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
            className={styles.icon}
            alt=""
          />
        </div>

        <Input label="Email" type="email" id="email" />

        <Input label="Password" type="password" id="password" />

        <Button variant="primary">LOGIN</Button>

        <div className={styles.links}>
          <a href="#" className={styles.storeLink}>
            RETURN TO STORE
          </a>
          <a href="#" className={styles.forgotLink}>
            Forgot Password
          </a>
        </div>

        <div className={styles.signupSection}>
          <span className={styles.signupText}>Sign Up</span>
          <Button variant="secondary">SIGN UP NOW !</Button>
        </div>
      </div>
    </form>
  );
};
