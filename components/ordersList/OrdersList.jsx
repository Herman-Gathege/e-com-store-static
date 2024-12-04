import React from 'react';
import styles from './OrdersList.module.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

const orders = [
  { id: '25426', date: 'Nov 8th,2023', customer: { name: 'Kavin', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/80ea4d0a7a98f08b10d070a0fcfb7418dcbf3838027a3a50f1225618fa74db48?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb' }, status: 'delivered', amount: '200.00' },
  { id: '25425', date: 'Nov 7th,2023', customer: { name: 'Komael', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2681ae064aaebf762007cd1fe8a7775adaf97a3b6eb860337b26bc9f17b1f63a?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb' }, status: 'canceled', amount: '200.00' },
  { id: '25424', date: 'Nov 6th,2023', customer: { name: 'Nikhil', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/35775fd7f08a447ef095fd111b72e74c0b9e47758d1d44b419ab2ab28580688d?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb' }, status: 'delivered', amount: '200.00' },
  { id: '25423', date: 'Nov 5th,2023', customer: { name: 'Shivam', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b1edf7363de582ebdb0ffa5c2076d5cdb5c97680b5a91d06f8579a4ed993daa5?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb' }, status: 'canceled', amount: '200.00' },
  { id: '25422', date: 'Nov 4th,2023', customer: { name: 'Shadab', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b991003b8954c3ad45da2afaacfa2a5e815b5a1dba14df7eaf6ad31e85dff430?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb' }, status: 'delivered', amount: '200.00' },
  { id: '25421', date: 'Nov 2nd,2023', customer: { name: 'Yogesh', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/40a7bef7e37e038f272133cc59a3e081dca6f9bf561c9a0db064e8fec72bb84f?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb' }, status: 'delivered', amount: '200.00' },
  { id: '25423', date: 'Nov 1st,2023', customer: { name: 'Sunita', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/13fd33407fe0f962e6792ee807a197d9a265bc229b5bfc3cb8102f41ba58bddc?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb' }, status: 'canceled', amount: '200.00' },
  { id: '25421', date: 'Nov 1st,2023', customer: { name: 'Priyanka', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f55c34e1a7466e157901a04709215977c92164b4c62d7a2031dd86a0e2fe197d?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb' }, status: 'delivered', amount: '200.00' }
];

const paginationItems = [
  { number: '1', active: true },
  { number: '2', active: false },
  { number: '3', active: false },
  { number: '4', active: false },
  { number: '10', active: false }
];

export default function OrdersList() {
  return (
    <div className={styles.ordersList}>
      <div className={styles.layout}>
        <div className={styles.sidebarWrapper}>
          <Sidebar />
        </div>
        <div className={styles.mainContent}>
          <div className={styles.contentWrapper}>
            <Header />
            <div className={styles.orderListContainer}>
              <div className={styles.headerContainer}>
                <div className={styles.titleWrapper}>
                  <div className={styles.title}>Orders List</div>
                  <div className={styles.breadcrumb}>Home > Order List</div>
                </div>
                <div className={styles.dateFilter}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b9aa49a4c92f4098f3a583688b03bf02d984fc8750b69e060415a1f85a7bbdd?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
                    className={styles.calendarIcon}
                    alt="Calendar"
                  />
                  <div className={styles.dateRange}>Feb 16,2022 - Feb 20,2022</div>
                </div>
              </div>
              <div className={styles.statusFilter}>
                <div className={styles.filterDropdown}>
                  <div className={styles.dropdownContent}>
                    <div className={styles.filterText}>Change Status</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9af99d0aa5d136ca082eaef4a6055a9fc29792d46749bed965aa5a5ad737045?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
                      className={styles.dropdownIcon}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className={styles.purchasesContainer}>
                <div className={styles.purchasesContent}>
                  <div className={styles.purchasesHeader}>
                    <div className={styles.purchasesTitle}>Recent Purchases</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9823b3515429997fafb1cdf4630539623a25d0edc8680d3c68c755342e3519ff?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
                      className={styles.headerIcon}
                      alt=""
                    />
                  </div>
                  <div className={styles.divider} />
                  <div className={styles.tableHeader}>
                    <div className={styles.headerCell}>
                      <div className={styles.headerText}>Product</div>
                    </div>
                    <div className={styles.headerCell}>
                      <div className={styles.headerText}>Order ID</div>
                    </div>
                    <div className={styles.headerCell}>
                      <div className={styles.headerText}>Date</div>
                    </div>
                    <div className={styles.headerCell}>
                      <div className={styles.headerText}>Customer Name</div>
                    </div>
                    <div className={styles.headerCell}>
                      <div className={styles.headerText}>Status</div>
                    </div>
                    <div className={styles.headerCell}>
                      <div className={styles.headerText}>Amount</div>
                    </div>
                  </div>
                  {orders.map((order, index) => (
                    <div key={index} className={styles.tableRow}>
                      <div className={styles.productCell}>
                        <div className={styles.productIcon}>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a2afc95949710277e869a22b73dd8fcd51d9141c619b7df758aced9f3038d0c?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
                            className={styles.productImage}
                            alt=""
                          />
                        </div>
                        <div className={styles.productName}>Lorem Ipsum</div>
                      </div>
                      <div className={styles.orderCell}>#{order.id}</div>
                      <div className={styles.orderCell}>{order.date}</div>
                      <div className={styles.customerCell}>
                        <img
                          loading="lazy"
                          src={order.customer.avatar}
                          className={styles.customerAvatar}
                          alt={`${order.customer.name}'s avatar`}
                        />
                        <div className={styles.customerName}>{order.customer.name}</div>
                      </div>
                      <div className={styles.statusCell}>
                        <div className={`${styles.statusIndicator} ${
                          order.status === 'delivered' ? styles.statusIndicatorDelivered : styles.statusIndicatorCanceled
                        }`} />
                        <div className={styles.statusText}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </div>
                      </div>
                      <div className={styles.amountCell}>₹{order.amount}</div>
                    </div>
                  ))}
                </div>
                <div className={styles.pagination}>
                  {paginationItems.map((item, index) => (
                    <React.Fragment key={index}>
                      <div className={styles.paginationButton}>
                        <div className={`${styles.paginationButtonContent} ${
                          item.active ? styles.paginationButtonActive : styles.paginationButtonBorder
                        }`}>
                          {item.number}
                        </div>
                      </div>
                      {index === 4 &&