"use client";
import styles from "./legal.module.css";

export default function PrivacyClient() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.legalContainer}>
        <h1>Privacy Policy</h1>
        <span className={styles.lastUpdated}>Last Updated: January 2025</span>
        <div className={styles.legalBox}>
          <p>Welcome to Vedu APK. This Privacy Policy explains how we collect, use, and protect your information when you visit our website. By using our website, you agree to the terms described in this policy.</p>
        </div>
        <section className={styles.legalSection}>
          <h2>Information We Collect</h2>
          <p>We may collect certain non-personal information automatically when you visit our website. This includes your browser type, device type, operating system, referring URLs, pages viewed, and the time and date of your visit. This information is collected through standard web analytics tools and is used solely to improve the quality and performance of our website.</p>
          <p>We do not require users to create an account or provide personal information such as names, email addresses, or phone numbers to access content on this website.</p>
        </section>
        <section className={styles.legalSection}>
          <h2>Cookies</h2>
          <p>Our website may use cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us understand how visitors use our site. You can choose to disable cookies through your browser settings at any time, though this may affect some functionality of the website.</p>
        </section>
        <section className={styles.legalSection}>
          <h2>Third-Party Links</h2>
          <p>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those external sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
        </section>
        <section className={styles.legalSection}>
          <h2>Advertising</h2>
          <p>We may display third-party advertisements on our website. These advertisers may use cookies or similar technologies to serve ads based on your interests. We do not control the data collection practices of third-party advertisers.</p>
        </section>
        <section className={styles.legalSection}>
          <h2>Children&apos;s Privacy</h2>
          <p>Our website is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will take appropriate action.</p>
        </section>
        <section className={styles.legalSection}>
          <h2>Changes to This Policy</h2>
          <p>We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with a revised date. We encourage you to review this page periodically to stay informed.</p>
        </section>
        <section className={styles.legalSection}>
          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please feel free to reach out to us through our Contact page.</p>
        </section>
      </div>
    </div>
  );
}