"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>

        {/* LOGO */}
        <Link href="/" className={styles.navLogo}>
          <span className={styles.logoIcon}>▶</span>
          Vedu APK
        </Link>

        {/* HAMBURGER */}
        <button
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>

        {/* MENU */}
        <div className={`${styles.navMenu} ${isOpen ? styles.active : ""}`}>
          <Link href="/"            className={styles.navItem} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/#about"      className={styles.navItem} onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/#features"   className={styles.navItem} onClick={() => setIsOpen(false)}>Features</Link>
          <Link href="/#screenshots"className={styles.navItem} onClick={() => setIsOpen(false)}>Screenshots</Link>
          <Link href="/#faqs"       className={styles.navItem} onClick={() => setIsOpen(false)}>FAQs</Link>
          <Link href="/download"    className={styles.navItemBtn} onClick={() => setIsOpen(false)}>
            ⬇ Download APK
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;