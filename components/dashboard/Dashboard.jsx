import React from "react";
import { SidebarButton } from "./components/SidebarButton";
import { StatCard } from "./components/StatCard";
import { OrderRow } from "./components/OrderRow";
import { BestSellerItem } from "./components/BestSellerItem";
import styles from "./styles/Dashboard.module.css";

const sidebarButtons = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1fa2c14bdab2abd40827607c1c8e50aa58f2fbf5649d1f11a67f0ec6666f53de?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    label: "Dashboard",
    isActive: true,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5e3f696dea1abb0d74912089fc2c483307554f9672276fb0c20285b0a87554a2?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    label: "All products",
    isActive: false,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0f708ebd19a4a734550d66bba12b297fc2eecbd085dd834a773ccbbcb18dc19?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    label: "Order list",
    isActive: false,
  },
];

const statCards = [
  {
    title: "Total Orders",
    amount: "₹126,500",
    percentage: "34.7%",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f47d78077aa9f8a783ec80685bbc841e1247bed4d0f98933069aa9980f202198?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    menuIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4fd5bda39fc2080316555dcf80480fa389109f8a769c3f9f64a19e9ee50256f3?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
  },
  {
    title: "Active Orders",
    amount: "₹126,500",
    percentage: "34.7%",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f3c4813db01f73cdf8949bdcba1e6f6543e0233c7af16f9140b71f8020ea91ff?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    menuIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9823b3515429997fafb1cdf4630539623a25d0edc8680d3c68c755342e3519ff?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
  },
  {
    title: "Completed Orders",
    amount: "₹126,500",
    percentage: "34.7%",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f47d78077aa9f8a783ec80685bbc841e1247bed4d0f98933069aa9980f202198?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    menuIcon: "",
  },
  {
    title: "Return Orders",
    amount: "₹126,500",
    percentage: "34.7%",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f3c4813db01f73cdf8949bdcba1e6f6543e0233c7af16f9140b71f8020ea91ff?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    menuIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9823b3515429997fafb1cdf4630539623a25d0edc8680d3c68c755342e3519ff?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
  },
];

const recentOrders = [
  {
    productIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2a2afc95949710277e869a22b73dd8fcd51d9141c619b7df758aced9f3038d0c?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    productName: "Lorem Ipsum",
    orderId: "#25426",
    date: "Nov 8th,2023",
    customer: {
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/80ea4d0a7a98f08b10d070a0fcfb7418dcbf3838027a3a50f1225618fa74db48?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
      name: "Kavin",
    },
    status: "Delivered",
    amount: "₹200.00",
  },
  // ... more orders data
];

const bestSellers = [
  { price: "₹126.50", sales: "999" },
  { price: "₹126.50", sales: "999" },
  { price: "₹126.50", sales: "999" },
];

export const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.mainContent}>
        <div className={styles.contentLayout}>
          <aside className={styles.sidebar}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f300cd64aee0ae063012574fbfc958eedc7c94d24b1b3c6f6224b122d53abdd4?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
              alt="Logo"
              className={styles.logo}
            />
            <div className={styles.sidebarNav}>
              {sidebarButtons.map((button, index) => (
                <SidebarButton key={index} {...button} />
              ))}
            </div>
            <div className={styles.categoriesHeader}>
              <div className={styles.categoriesTitle}>Categories</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/24849d77d79a9639df1f8bd33cc9992f2c47166e0f43f57e7f2bb25737559353?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
                alt=""
                className={styles.categoriesIcon}
              />
            </div>
          </aside>

          <main className={styles.mainSection}>
            <header className={styles.header}>{/* Header content */}</header>

            <section className={styles.statsSection}>
              {statCards.map((card, index) => (
                <StatCard key={index} {...card} />
              ))}
            </section>

            <section className={styles.graphSection}>
              {/* Graph content */}
            </section>

            <section className={styles.ordersSection}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Recent Orders</h2>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9823b3515429997fafb1cdf4630539623a25d0edc8680d3c68c755342e3519ff?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
                  alt=""
                  className={styles.menuIcon}
                />
              </div>
              <div className={styles.ordersList}>
                {recentOrders.map((order, index) => (
                  <OrderRow key={index} {...order} />
                ))}
              </div>
            </section>

            <section className={styles.bestSellersSection}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Best Sellers</h2>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9823b3515429997fafb1cdf4630539623a25d0edc8680d3c68c755342e3519ff?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
                  alt=""
                  className={styles.menuIcon}
                />
              </div>
              <div className={styles.bestSellersList}>
                {bestSellers.map((item, index) => (
                  <BestSellerItem key={index} {...item} />
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};
