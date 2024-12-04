import React from "react";
import { SideBar } from "./components/SideBar";
import { Header } from "./components/Header";
import { ProductRow } from "./components/ProductRow";
import styles from "./OrderDetails.module.css";

const products = [
  { id: "25421", quantity: 2, total: "800.40" },
  { id: "25421", quantity: 2, total: "800.40" },
  { id: "25421", quantity: 2, total: "800.40" },
  { id: "25421", quantity: 2, total: "800.40" },
];

export const OrderDetails = () => {
  return (
    <div className={styles.orderDetailsContainer}>
      <div className={styles.mainContent}>
        <div className={styles.sidebarColumn}>
          <SideBar />
        </div>
        <div className={styles.contentColumn}>
          <Header />
          {/* Rest of the original JSX structure with better class names */}
          <div className={styles.productsList}>
            {products.map((product, index) => (
              <ProductRow
                key={index}
                productId={product.id}
                quantity={product.quantity}
                total={product.total}
              />
            ))}
          </div>
          {/* Original footer JSX structure */}
        </div>
      </div>
    </div>
  );
};
