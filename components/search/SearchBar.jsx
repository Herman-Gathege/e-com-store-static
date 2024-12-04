import * as React from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <form className={styles.searchContainer} role="search">
      <div className={styles.searchWrapper}>
        <div className={styles.searchInputContainer}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c36f2ffe8b675f6c7d579c79806d3b53babdda0590c7d70db3209a7fde3d9b7?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
            className={styles.searchIcon}
            alt=""
          />
          <div className={styles.searchTextContainer}>
            <label htmlFor="searchInput" className={styles["visually-hidden"]}>
              Search
            </label>
            <div className={styles.divider} />
            <input
              type="search"
              id="searchInput"
              className={styles.searchText}
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
