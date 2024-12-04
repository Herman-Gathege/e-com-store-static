import React from "react";
import { ProductItem } from "./ProductItem";
import styles from "./SearchDropdown.module.css";

export const SearchDropdown = () => {
  const products = [
    { id: 1, title: "Lorem Ipsum" },
    { id: 2, title: "Lorem Ipsum 02" },
    { id: 3, title: "Lorem Ipsum" },
  ];

  return (
    <div
      className={styles.searchBoxDropDown}
      role="dialog"
      aria-label="Search Results"
    >
      <h2 className={styles.heading}>Products</h2>
      {products.map((product) => (
        <ProductItem key={product.id} title={product.title} />
      ))}
      <button className={styles.seeAllButton} tabIndex={0}>
        See all products
      </button>
    </div>
  );
};
