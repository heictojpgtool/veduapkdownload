"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "./footer.css";

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(document.documentElement.scrollTop > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="si-footer">
      <div className="si-footer-inner">

        {/* ── BRAND ───────────────────────────── */}
        <div className="si-footer-brand">
          <span className="si-footer-logo">
            <span className="si-footer-icon">▶</span> Vedu APK
          </span>
          <p>
            Free streaming app for Android — watch movies, web series &amp; dramas.
            No subscription. No login required.
          </p>
        </div>

        {/* ── 3 COLUMN LINKS ──────────────────── */}
        <div className="si-footer-cols">

          {/* Col 1 — Quick Links */}
          <div className="si-footer-col">
            <h3 className="si-footer-col-title">Quick Links</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/#features">Features</Link></li>
              <li><Link href="/#screenshots">Screenshots</Link></li>
              <li><Link href="/#faqs">FAQs</Link></li>
              <li><Link href="/download">Download APK</Link></li>
            </ul>
          </div>

          {/* Col 2 — Legal */}
          <div className="si-footer-col">
            <h3 className="si-footer-col-title">Legal</h3>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3 — App Info */}
          <div className="si-footer-col">
            <h3 className="si-footer-col-title">App Info</h3>
            <ul>
              <li><span className="si-footer-tag">Version: Latest 2026</span></li>
              <li><span className="si-footer-tag">Size: 28 MB</span></li>
              <li><span className="si-footer-tag">Android: 5.0+</span></li>
              <li><span className="si-footer-tag">Price: Free</span></li>
              <li><span className="si-footer-tag">Category: Entertainment</span></li>
            </ul>
          </div>

        </div>

        {/* ── DIVIDER ─────────────────────────── */}
        <div className="si-footer-divider" />

        {/* ── BOTTOM BAR ──────────────────────── */}
        <div className="si-footer-bottom">
          <p className="si-footer-copy">
            © {new Date().getFullYear()} VeduAPK — All Rights Reserved.
          </p>
          <div className="si-footer-legal-row">
            <Link href="/privacy">Privacy Policy</Link>
            <span>·</span>
            <Link href="/disclaimer">Disclaimer</Link>
            <span>·</span>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

      </div>

      {/* ── SCROLL TO TOP ───────────────────── */}
      {visible && (
        <button
          className="si-scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </footer>
  );
}