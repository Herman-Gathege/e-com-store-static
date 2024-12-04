import React from "react";
import styles from "../ProductDetails.module.css";

export function ProductForm() {
  return (
    <form className={styles.formContainer}>
      <div className={styles.formLayout}>
        <div className={styles.formSection}>
          <div className={styles.inputGroup}>
            <label htmlFor="productName" className={styles.inputLabel}>
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              className={styles.textInput}
              defaultValue="Lorem Ipsum"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="description" className={styles.inputLabel}>
              Description
            </label>
            <textarea
              id="description"
              className={styles.textArea}
              defaultValue="Lorem Ipsum Is A Dummy Text"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="category" className={styles.inputLabel}>
              Category
            </label>
            <input
              type="text"
              id="category"
              className={styles.textInput}
              defaultValue="Sneaker"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="brandName" className={styles.inputLabel}>
              Brand Name
            </label>
            <input
              type="text"
              id="brandName"
              className={styles.textInput}
              defaultValue="Addidas"
            />
          </div>

          <div className={styles.inputGroup}>
            <div style={{ display: "flex", gap: "24px" }}>
              <div style={{ flex: 1 }}>
                <label htmlFor="sku" className={styles.inputLabel}>
                  SKU
                </label>
                <input
                  type="text"
                  id="sku"
                  className={styles.textInput}
                  defaultValue="#32A53"
                />
              </div>
              <div style={{ flex: 1 }}>
                <label htmlFor="stockQuantity" className={styles.inputLabel}>
                  Stock Quantity
                </label>
                <input
                  type="number"
                  id="stockQuantity"
                  className={styles.textInput}
                  defaultValue="211"
                />
              </div>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <div style={{ display: "flex", gap: "24px" }}>
              <div style={{ flex: 1 }}>
                <label htmlFor="regularPrice" className={styles.inputLabel}>
                  Regular Price
                </label>
                <input
                  type="number"
                  id="regularPrice"
                  className={styles.textInput}
                  defaultValue="110.40"
                />
              </div>
              <div style={{ flex: 1 }}>
                <label htmlFor="salePrice" className={styles.inputLabel}>
                  Sale Price
                </label>
                <input
                  type="number"
                  id="salePrice"
                  className={styles.textInput}
                  defaultValue="450"
                />
              </div>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="tags" className={styles.inputLabel}>
              Tag
            </label>
            <input
              type="text"
              id="tags"
              className={styles.textInput}
              defaultValue="Lorem, Lorem"
            />
          </div>
        </div>

        <ImageUploader />
      </div>

      <div className={styles.buttonGroup}>
        <button type="submit" className={styles.updateButton}>
          Update
        </button>
        <button type="button" className={styles.deleteButton}>
          Delete
        </button>
        <button type="button" className={styles.cancelButton}>
          Cancel
        </button>
      </div>
    </form>
  );
}
