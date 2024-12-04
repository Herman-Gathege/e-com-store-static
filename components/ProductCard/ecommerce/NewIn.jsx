import React from "react";
import styles from "./NewIn.module.css";
import ProductCard from "./components/ProductCard";
import Newsletter from "./components/Newsletter";

const products = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9774f058ff1ea4d34ae9602aeb6a398432bc200639e04968aadda57142c11d14?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    title: "Yellow Dress",
    size: "Size 10",
    price: "1900",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9774f058ff1ea4d34ae9602aeb6a398432bc200639e04968aadda57142c11d14?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    title: "Yellow Dress",
    size: "Size 10",
    price: "1900",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2af9cb4048b9d1218acb3fcdba7277bce05ebbf44efbd59aca2a079bc1a3a947?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    title: "Yellow Dress",
    size: "Size 10",
    price: "1900",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9774f058ff1ea4d34ae9602aeb6a398432bc200639e04968aadda57142c11d14?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    title: "Yellow Dress",
    size: "Size 10",
    price: "1900",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9774f058ff1ea4d34ae9602aeb6a398432bc200639e04968aadda57142c11d14?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    title: "Yellow Dress",
    size: "Size 10",
    price: "1900",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9774f058ff1ea4d34ae9602aeb6a398432bc200639e04968aadda57142c11d14?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    title: "Yellow Dress",
    size: "Size 10",
    price: "1900",
  },
];

const NewIn = () => {
  return (
    <div className={styles.newIn}>
      [Previous JSX content remains exactly the same, but using ProductCard
      component in a map loop for product listings and Newsletter component for
      the newsletter section]
      <div className={styles.productGrid}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            size={product.size}
            price={product.price}
          />
        ))}
      </div>
      <Newsletter />
    </div>
  );
};

export default NewIn;
