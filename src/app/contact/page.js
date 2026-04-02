"use client";

import { useState } from "react";
import styles from "./legal.module.css";
import contactStyles from "./contact.module.css";


export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.legalPage}>
      <div className={styles.legalContainer}>
        <h1>Contact Us</h1>
        <p className={styles.lastUpdated}>We&apos;d love to hear from you</p>

        <div className={styles.legalBox}>
          <p>
            Have a question, suggestion, or concern about Stream India? Feel free to
            reach out to us using the form below. We typically respond within 24–48 hours.
          </p>
        </div>

        <div className={contactStyles.contactGrid}>

          <div className={contactStyles.contactInfo}>
            <div className={contactStyles.infoCard}>
              <span className={contactStyles.infoIcon}>📧</span>
              <div>
                <h3>Email</h3>
                <p>support@streamindia.app</p>
              </div>
            </div>
            <div className={contactStyles.infoCard}>
              <span className={contactStyles.infoIcon}>⏱</span>
              <div>
                <h3>Response Time</h3>
                <p>Within 24–48 hours</p>
              </div>
            </div>
            <div className={contactStyles.infoCard}>
              <span className={contactStyles.infoIcon}>🌐</span>
              <div>
                <h3>Website</h3>
                <p>streamindia.app</p>
              </div>
            </div>
          </div>

          <div className={contactStyles.contactForm}>
            {submitted ? (
              <div className={contactStyles.successMsg}>
                <span>✅</span>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={contactStyles.formGroup}>
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={contactStyles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={contactStyles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className={contactStyles.submitBtn}>
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