"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.navLogo}>
          <span className={styles.logoIcon}>▶</span>
          Stream India
        </Link>

        <button className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <div className={`${styles.navMenu} ${isOpen ? styles.active : ""}`}>
          <Link href="/" className={styles.navItem}>Home</Link>
          <Link href="#about" className={styles.navItem}>About</Link>
          <Link href="#features" className={styles.navItem}>Features</Link>
          <Link href="#screenshots" className={styles.navItem}>Screenshots</Link>
          <Link href="#faqs" className={styles.navItem}>FAQs</Link>
          <Link href="download" className={styles.navItemBtn}>Download APK</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;