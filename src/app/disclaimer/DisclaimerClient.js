"use client";
import styles from "../privacy/legal.module.css";

export default function DisclaimerClient() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.legalContainer}>
        <h1>Disclaimer</h1>
        <span className={styles.lastUpdated}>Last Updated: January 2025</span>
        <div className={styles.legalBox}>
          <p>Please read this Disclaimer carefully before using the Vedu APK website. By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by this Disclaimer.</p>
        </div>
        <section className={styles.legalSection}>
          <h2>General Information Only</h2>
          <p>The content published on this website is for general informational and educational purposes only. Vedu APK is an informational website that provides guides, reviews, and download links related to third-party Android applications. We do not host, develop, or own any of the applications mentioned or linked on this website.</p>
        </section>
        <section className={styles.legalSection}>
          <h2>Third-Party Applications</h2>
          <p>All APK files and applications referenced on this website are the property of their respective developers and owners. Vedu APK website does not claim ownership of any third-party application. We simply provide information and download assistance to users who are looking for such applications.</p>
          <p>Users are solely responsible for ensuring that they comply with all applicable laws and regulations in their region before downloading or using any third-party application. We strongly recommend that you review the terms of service of any application before installing it on your device.</p>
        </section>
        <section className={styles.legalSection}>
          <h2>No Warranties</h2>
          <p>Vedu APK website makes no warranties or representations about the accuracy, reliability, completeness, or suitability of any information on this website. All content is provided &quot;as is&quot; without any warranty of any kind, either express or implied.</p>
        </section>
        <section className={styles.legalSection}>
          <h2>Copyright &amp; Intellectual Property</h2>
          <p>We respect intellectual property rights. If you believe that any content on this website infringes your copyright or other intellectual property rights, please contact us immediately and we will investigate and take appropriate action, including removing the content if necessary.</p>
        </section>
        <section className={styles.legalSection}>
          <h2>Limitation of Liability</h2>
          <p>Vedu APK website shall not be held liable for any direct, indirect, incidental, special, or consequential damages arising from your use of this website or any applications downloaded through links provided on this website. Use of any third-party application is entirely at your own risk.</p>
        </section>
        <section className={styles.legalSection}>
          <h2>External Links</h2>
          <p>Our website may contain links to external websites. These links are provided for convenience only. Vedu APK website has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.</p>
        </section>
        <section className={styles.legalSection}>
          <h2>Changes to This Disclaimer</h2>
          <p>We reserve the right to modify this Disclaimer at any time. Updates will be posted on this page with a revised date. Continued use of the website after any changes constitutes your acceptance of the updated Disclaimer.</p>
        </section>
      </div>
    </div>
  );
}