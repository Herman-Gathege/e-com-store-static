import React from 'react';
import styles from './ProductDetails.module.css';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ProductForm } from './components/ProductForm';

export function ProductDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <Sidebar />
        
        <main className={styles.mainContent}>
          <Header />
          
          <div className={styles.pageContent}>
            <div className={styles.breadcrumb}>
              <h1 className={styles.pageTitle}>Product Details</h1>
              <p className={styles.breadcrumbPath}>Home > All Products > Product Details</p>
            </div>
            
            <ProductForm />
            
            <footer className={styles.footer}>
              <div className={styles.footerDivider} />
              <div className={styles.footerContent}>
                <p>© 2023 - pulstron Dashboard</p>
                <nav className={styles.footerLinks}>
                  <a href="#about">About</a>
                  <a href="#careers">Careers</a>
                  <a href="#policy">Policy</a>
                  <a href="#contact">Contact</a>
                </nav>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}