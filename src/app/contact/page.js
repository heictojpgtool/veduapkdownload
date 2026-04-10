"use client";

import { useState } from "react";
import styles from "../privacy/legal.module.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.legalPage}>
      <div className={styles.legalContainer}>
        <h1>Contact Us</h1>
        <span className={styles.lastUpdated}>We usually respond within 24–48 hours</span>

        <div className={styles.legalBox}>
          <p>
            Have a question, suggestion, or concern about Vedu APK? We are happy to hear
            from you. Fill out the form below or reach us through the details provided
            and we will get back to you as soon as possible.
          </p>
        </div>

        <div className={styles.contactGrid}>

          {/* LEFT — INFO CARDS */}
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>📧</span>
              <div>
                <h3>Email</h3>
                <p>support@veduapk.com</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>⏱️</span>
              <div>
                <h3>Response Time</h3>
                <p>Within 24–48 hours on business days</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>🌐</span>
              <div>
                <h3>Website</h3>
                <p>veduapkdownload.com</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>📱</span>
              <div>
                <h3>Support</h3>
                <p>APK downloads, install issues, general queries</p>
              </div>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className={styles.contactForm}>
            {submitted ? (
              <div className={styles.successMsg}>
                <span>✅</span>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We will get back to you within 24–48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What is this about?"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Write your message here..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}