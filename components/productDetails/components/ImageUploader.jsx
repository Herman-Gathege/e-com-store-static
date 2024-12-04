import React from "react";
import styles from "../ProductDetails.module.css";

const thumbnails = [
  { id: 1, name: "Product thumbnail.png" },
  { id: 2, name: "Product thumbnail.png" },
  { id: 3, name: "Product thumbnail.png" },
  { id: 4, name: "Product thumbnail.png" },
];

export function ImageUploader() {
  return (
    <div className={styles.imageUploader}>
      <div className={styles.dropZone}>
        <div className={styles.uploadPlaceholder} />
      </div>
      <div style={{ marginTop: "24px" }}>
        <h3 className={styles.inputLabel}>Product Gallery</h3>
        <div
          className={styles.dropZone}
          style={{ minHeight: "auto", padding: "16px" }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/06be8c0bcff7faa9c1b8cfff094b97ac3e9bfbfe5080ab14a260a0b8613a4ed2?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
            alt=""
            style={{ width: "64px" }}
          />
          <div>
            <p>Drop your imager here, or browse</p>
            <p style={{ marginTop: "8px" }}>Jpeg, png are allowed</p>
          </div>
        </div>
      </div>

      {thumbnails.map((thumbnail) => (
        <div key={thumbnail.id} style={{ marginTop: "24px" }}>
          <div
            style={{
              display: "flex",
              gap: "16px",
              padding: "16px",
              backgroundColor: "#fafafa",
              borderRadius: "8px",
            }}
          >
            <div
              className={styles.uploadPlaceholder}
              style={{ width: "64px", height: "64px" }}
            />
            <div>
              <p style={{ fontWeight: 600 }}>{thumbnail.name}</p>
              <div
                style={{
                  marginTop: "16px",
                  width: "137px",
                  height: "4px",
                  backgroundColor: "#003f62",
                  borderRadius: "8px",
                }}
              />
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6759c6ff5f95005af035ba9238fb3ac4b888b932935ab710dc8125ee62f909f?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
              alt="Remove"
              style={{ width: "32px" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
