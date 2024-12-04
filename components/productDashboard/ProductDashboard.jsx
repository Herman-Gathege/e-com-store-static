import React from 'react';
import { SidebarButton } from './components/SidebarButton';
import { GalleryItem } from './components/GalleryItem';
import { InputField } from './components/InputField';
import styles from './styles/ProductDashboard.module.css';

const sidebarButtons = [
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dfab1e49e0c884e6dfda929607690025607e9c98d29012281dddffdb7f4a5bb3?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb', label: 'Dashboard', isActive: false },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5e3f696dea1abb0d74912089fc2c483307554f9672276fb0c20285b0a87554a2?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb', label: 'All products', isActive: true },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bc0aff5929f5f5c69bd34c27860b086a26632063d68650d2892a45d247f1ffca?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb', label: 'Order list', isActive: false }
];

const galleryItems = Array(4).fill(null);

export const ProductDashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf6010aeec506245bfeb0a07444a06b3f33fd6364299aa8abde964b080331a51?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb" alt="Logo" className={styles.logo} />
          <nav className={styles.navigation}>
            {sidebarButtons.map((button, index) => (
              <SidebarButton key={index} {...button} />
            ))}
          </nav>
          <div className={styles.categoryHeader}>
            <h2 className={styles.categoryTitle}>Categories</h2>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/24849d77d79a9639df1f8bd33cc9992f2c47166e0f43f57e7f2bb25737559353?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb" alt="" className={styles.categoryIcon} />
          </div>
        </aside>

        <main className={styles.mainContent}>
          <header className={styles.header}>
            <div className={styles.headerControls}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f070362cf86e96f13f09ba85bbd903b4ec1709e10ab9013138f7e658c4af129?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb" alt="Notifications" className={styles.headerIcon} />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f2d413c8208dfbf8f9d3dfb62886c1256a659d39e3cbadf7a54c13704156df2?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb" alt="Settings" className={styles.headerIcon} />
              <button className={styles.adminButton}>
                <span>Admin</span>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d86dadc376c6ad247a921df103b0e65be859dab59fdc00023fd941499933abaf?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb" alt="" className={styles.adminIcon} />
              </button>
            </div>
          </header>

          <section className={styles.content}>
            <div className={styles.pageHeader}>
              <h1 className={styles.pageTitle}>Product Details</h1>
              <p className={styles.breadcrumb}>Home > All Products > Add New Product</p>
            </div>

            <div className={styles.productForm}>
              <div className={styles.formLayout}>
                <div className={styles.formFields}>
                  <InputField label="Product Name" placeholder="Type name here" />
                  <InputField label="Description" placeholder="Type Description here" type="textarea" />
                  <InputField label="Category" placeholder="Type Category here" />
                  <InputField label="Brand Name" placeholder="Type brand name here" />
                  
                  <div className={styles.fieldGroup}>
                    <InputField label="SKU" value="Fox-3983" />
                    <InputField label="Stock Quantity" value="1258" />
                  </div>
                  
                  <div className={styles.fieldGroup}>
                    <InputField label="Regular Price" value="₹1000" />
                    <InputField label="Sale Price" value="₹450" />
                  </div>

                  <div className={styles.tagField}>
                    <h3 className={styles.tagLabel}>Tag</h3>
                    <div className={styles.tagInput}>
                      <div className={styles.tagList}>
                        {['Lorem', 'Lorem', 'Lorem'].map((tag, index) => (
                          <span key={index} className={styles.tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.gallerySection}>
                  <div className={styles.galleryPreview} />
                  <div className={styles.galleryUpload}>
                    <h3 className={styles.galleryTitle}>Product Gallery</h3>
                    <div className={styles.dropZone}>
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/06be8c0bcff7faa9c1b8cfff094b97ac3e9bfbfe5080ab14a260a0b8613a4ed2?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb" alt="" className={styles.uploadIcon} />
                      <div className={styles.uploadText}>
                        <p>Drop your imager here, or browse</p>
                        <p className={styles.uploadHint}>Jpeg, png are allowed</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.galleryList}>
                    {galleryItems.map((_, index) => (
                      <GalleryItem key={index} />
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.formActions}>
                <button className={styles.deleteButton}>Delete</button>
                <button className={styles.cancelButton}>Cancel</button>
              </div>
            </div>

            <footer className={styles.footer}>
              <div className={styles.footerDivider} />
              <div className={styles.footerContent}>
                <p className={styles.copyright}>
                  <span className={styles.copyrightSymbol}>© </span>
                  <span className={styles.copyrightText}>2023 - pulstron Dashboard</span>
                </p>
                <nav className={styles.footerNav}>
                  {['About', 'Careers', 'Policy', 'Contact'].map((item, index) => (
                    <a key={index} href="#" className={styles.footerLink}>{item}</a>
                  ))}
                </nav>
              </div>
            </footer>
          </section>
        </main>
      </div>
    </div>
  );
};