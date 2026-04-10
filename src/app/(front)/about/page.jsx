"use client";

import "./about.css";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="ab-page">

      {/* HERO */}
      <section className="ab-hero">
        <div className="ab-hero-inner">
          <div className="ab-breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span>About</span>
          </div>
          <h1>About Vedu APK</h1>
          <p className="ab-hero-sub">
            Who we are, what we do, and why millions of Android users trust Vedu
            for free streaming every day.
          </p>
        </div>
      </section>

      <div className="ab-wrap">

        {/* WHO WE ARE */}
        <section className="ab-section">
          <h2>Who We Are</h2>
          <div className="ab-box">
            <p>
              We are a small team of Android app enthusiasts and tech reviewers
              based in India. Our goal is simple — help everyday users find the
              best free apps for Android without wasting time on apps that are
              full of ads, broken links, or hidden costs.
            </p>
            <p>
              This website is dedicated to Vedu APK — one of the most popular
              free streaming apps in India in 2026. We test every version before
              publishing, write honest reviews, and keep all download links clean
              and verified. We are not affiliated with any paid streaming service
              and we do not promote any subscription-based product.
            </p>
          </div>
        </section>

        {/* WHAT IS VEDU */}
        <section className="ab-section">
          <h2>What is Vedu APK</h2>
          <div className="ab-box">
            <p>
              Vedu APK is a free streaming and video player app for Android. It
              lets you watch Bollywood, Hollywood, South Indian, and regional
              movies, web series, and dramas — all without any subscription,
              account, or login. The app also works as a built-in video player
              for local files, supporting formats like MP4, MKV, and AVI.
            </p>
            <p>
              Vedu is not available on the Google Play Store and is distributed
              as an APK file. It supports Android 5.0 and above, runs smoothly
              on budget devices, and offers 4K and HD streaming quality where
              available. Features like offline download, subtitle support, dark
              mode, and gesture controls make it one of the most complete free
              streaming apps available today.
            </p>
          </div>
        </section>

        {/* TRUST SIGNALS */}
        <section className="ab-section">
          <h2>Why Trust This Website</h2>
          <div className="ab-trust-grid">
            {[
              {
                icon: "✅",
                title: "APK Personally Tested",
                desc: "Every version of Vedu APK we publish has been installed and tested on a real Android device before going live. We never post untested or modified files.",
              },
              {
                icon: "🔄",
                title: "Regularly Updated",
                desc: "We update this website whenever a new version of Vedu APK is released. All download links are checked and refreshed to ensure you always get the latest version.",
              },
              {
                icon: "🔒",
                title: "Safe & Verified Files",
                desc: "All APK files available here are scanned for malware before publishing. We do not host modified, cracked, or tampered versions of any app.",
              },
              {
                icon: "📢",
                title: "No Paid Promotions",
                desc: "Our reviews and comparisons are based on genuine testing. We do not accept payment to rank apps higher or recommend products we have not tested ourselves.",
              },
              {
                icon: "👨‍💻",
                title: "Android App Experts",
                desc: "Our team has been reviewing Android apps and APKs for years. We understand what real users need — performance, simplicity, and no hidden fees.",
              },
              {
                icon: "📱",
                title: "Tested on Real Devices",
                desc: "We test apps on both flagship and budget Android phones to make sure our recommendations work for everyone, not just high-end device users.",
              },
            ].map(({ icon, title, desc }, i) => (
              <div className="ab-trust-card" key={i}>
                <span className="ab-trust-icon">{icon}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* OUR MISSION */}
        <section className="ab-section">
          <h2>Our Mission</h2>
          <div className="ab-box">
            <p>
              Paid streaming services are great, but not everyone can afford
              them. In India, millions of users rely on free apps to watch
              entertainment on their phones. Our mission is to make sure those
              users have access to accurate, honest, and up-to-date information
              about the best free Android apps available.
            </p>
            <p>
              We believe everyone deserves quality entertainment regardless of
              their budget. That is why we focus entirely on free, no-subscription
              apps — and why we take the time to test, verify, and review every
              app before recommending it to our readers.
            </p>
          </div>
        </section>

        {/* WHAT WE COVER */}
        <section className="ab-section">
          <h2>What We Cover on This Website</h2>
          <div className="ab-cover-grid">
            {[
              ["📥", "Vedu APK Downloads",    "Latest verified APK files for every version."],
              ["📝", "App Reviews",           "Detailed honest reviews with pros, cons, and verdicts."],
              ["🆚", "App Comparisons",       "Side-by-side comparisons of top free streaming apps."],
              ["🔧", "Install Guides",        "Step-by-step guides for installing APKs safely."],
              ["🛡",  "Safety Information",   "Tips for staying safe when using third-party APKs."],
              ["❓", "FAQs",                  "Answers to the most common questions about Vedu APK."],
            ].map(([icon, title, desc], i) => (
              <div className="ab-cover-card" key={i}>
                <span className="ab-cover-icon">{icon}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DISCLAIMER NOTE */}
        <section className="ab-section">
          <h2>Important Disclaimer</h2>
          <div className="ab-disclaimer-box">
            <p>
              This website is an independent information and download resource
              for Vedu APK. We are not the official developers of Vedu APK and
              are not affiliated with the original creators of the app. All
              trademarks and app names belong to their respective owners.
            </p>
            <p>
              We strongly recommend using Vedu APK only for content you have
              the right to access. Users are responsible for ensuring their use
              of the app complies with the laws of their country or region.
              For full details, please read our{" "}
              <Link href="/disclaimer">Disclaimer</Link> and{" "}
              <Link href="/privacy">Privacy Policy</Link>.
            </p>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="ab-section ab-contact-section">
          <h2>Get in Touch</h2>
          <div className="ab-box">
            <p>
              Have a question, found a broken link, or want to report an issue
              with a download? We would love to hear from you. Reach out via
              our contact page and we will get back to you as soon as possible.
            </p>
            <div className="ab-cta-row">
              <Link href="/contact" className="ab-btn-outline">Contact Us</Link>
              <Link href="/download" className="ab-btn">⬇ Download Vedu APK</Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}