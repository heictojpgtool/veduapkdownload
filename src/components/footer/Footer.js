"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import './footer.css';

export default function Footer() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <footer className="si-footer">
      <div className="si-footer-inner">

        <div className="si-footer-brand">
          <span className="si-footer-logo"><span className="si-footer-icon">▶</span> Stream India</span>
          <p>Free Live TV, Cricket &amp; Movies for Android. No subscription required.</p>
        </div>

        <div className="si-footer-links">
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#features">Features</Link>
          <Link href="#screenshots">Screenshots</Link>
          <Link href="download">Download</Link>
          <Link href="#faqs">FAQs</Link>
        </div>

        <div className="si-footer-legal">
          <Link href="/privacy">Privacy Policy</Link>
          <span>|</span>
          <Link href="/disclaimer">Disclaimer</Link>
          <span>|</span>
          <Link href="/contact">Contact Us</Link>
        </div>

        <div className="si-footer-copy">
          <p>Copyright © StreamIndia.site — All Rights Reserved.</p>
        </div>

      </div>

      {visible && (
        <button className="si-scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
          ↑
        </button>
      )}
    </footer>
  );
}