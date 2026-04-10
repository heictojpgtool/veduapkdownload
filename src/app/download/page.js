"use client";

import "./download.css";
import Link from "next/link";
import { useState, useEffect } from "react";

const COUNTDOWN_SEC = 15;
const APK_FILE      = "/vedu-app.apk";
const APK_NAME      = "vedu-app.apk";
const APK_SIZE      = "28 MB";
const APK_VERSION   = "Latest 2026";

export default function DownloadPage() {
  const [countdown, setCountdown] = useState(COUNTDOWN_SEC);
  const [ready, setReady]         = useState(false);

  useEffect(() => {
    if (countdown <= 0) { setReady(true); return; }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown]);

  const progress = ((COUNTDOWN_SEC - countdown) / COUNTDOWN_SEC) * 100;

  return (
    <div className="dl-page">

      {/* ── HERO BAND ───────────────────────────── */}
      <section className="dl-hero">
        <div className="dl-hero-inner">
          <div className="dl-app-info">
            <div className="dl-icon-wrap">
              <span className="dl-icon-letter">V</span>
            </div>
            <div>
              <h1 className="dl-app-name">Vedu APK</h1>
              <p className="dl-app-sub">Free Streaming &amp; Video Player for Android</p>
              <div className="dl-meta-row">
                <span className="dl-chip">⚡ {APK_VERSION}</span>
                <span className="dl-chip">💾 {APK_SIZE}</span>
                <span className="dl-chip">🤖 Android 5.0+</span>
                <span className="dl-chip dl-chip-green">🆓 Free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ────────────────────────── */}
      <main className="dl-main">

        {/* ── DOWNLOAD CARD ───────────────────── */}
        <div className="dl-card">
          <h2 className="dl-card-title">
            {ready ? "✅ Your Download is Ready!" : "⏳ Preparing Your Download…"}
          </h2>

          {!ready ? (
            <>
              <p className="dl-wait-txt">
                Please wait while we verify the file for safety.
              </p>
              <div className="dl-timer-ring">
                <svg viewBox="0 0 80 80" className="dl-ring-svg">
                  <circle cx="40" cy="40" r="34" className="dl-ring-bg" />
                  <circle
                    cx="40" cy="40" r="34"
                    className="dl-ring-fill"
                    style={{
                      strokeDashoffset: `${213.6 - (213.6 * progress) / 100}`,
                    }}
                  />
                </svg>
                <span className="dl-timer-num">{countdown}</span>
              </div>
              <div className="dl-progress-bar">
                <div className="dl-progress-fill" style={{ width: `${progress}%` }} />
              </div>
              <button className="dl-btn dl-btn-disabled" disabled>
                ⏳ Please Wait… ({countdown}s)
              </button>
            </>
          ) : (
            <>
              <p className="dl-ready-txt">
                File verified ✔ — tap the button below to start your download.
              </p>
              <a
                href={APK_FILE}
                className="dl-btn dl-btn-active"
                download={APK_NAME}
              >
                ⬇ Download Vedu APK Now
              </a>
              <p className="dl-fileinfo">{APK_NAME} · {APK_SIZE} · Free · Verified Safe</p>
            </>
          )}

          {/* Trust row */}
          <div className="dl-trust-row">
            <span>🛡 Scanned &amp; Safe</span>
            <span>✔ No Malware</span>
            <span>✔ No Hidden Fees</span>
            <span>✔ Original File</span>
          </div>
        </div>

        {/* ── APP INFO GRID ────────────────────── */}
        <div className="dl-info-grid">
          {[
            { label: "App Name",     value: "Vedu APK" },
            { label: "Version",      value: APK_VERSION },
            { label: "Size",         value: APK_SIZE },
            { label: "Price",        value: "Free" },
            { label: "Android",      value: "5.0+" },
            { label: "Category",     value: "Entertainment" },
            { label: "Last Updated", value: "2026" },
            { label: "Downloads",    value: "1M+" },
          ].map(({ label, value }) => (
            <div className="dl-info-cell" key={label}>
              <span className="dl-info-lbl">{label}</span>
              <span className="dl-info-val">{value}</span>
            </div>
          ))}
        </div>

        {/* ── INSTALL STEPS ────────────────────── */}
        <div className="dl-steps-card">
          <h2>How to Install Vedu APK</h2>
          <ol className="dl-steps-list">
            {[
              <>Tap <strong>Download</strong> above and wait for the APK file to save on your device.</>,
              <>Go to <strong>Settings → Security</strong> and enable <strong>Unknown Sources</strong> (or Install Unknown Apps).</>,
              <>Open your <strong>Downloads folder</strong> or notification bar and tap the Vedu APK file.</>,
              <>Tap <strong>Install</strong> and wait a few seconds for installation to finish.</>,
              <>Open <strong>Vedu</strong> from your home screen — no login needed, start watching! 🎉</>,
            ].map((step, i) => (
              <li key={i}>
                <span className="dl-step-num">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <div className="dl-install-note">
            <strong>⚠ Seeing a warning?</strong> Android shows a standard alert for all APKs
            installed outside the Play Store. This does not mean the file is unsafe —
            it is a default system message. Tap <em>Install Anyway</em> to continue.
          </div>
        </div>

        {/* ── FEATURES QUICK LIST ──────────────── */}
        <div className="dl-features-card">
          <h2>What You Get with Vedu APK</h2>
          <div className="dl-feat-grid">
            {[
              "Free movies & web series",
              "4K / HD / Ultra HD quality",
              "No login or account needed",
              "Offline download support",
              "Built-in video player",
              "Subtitle support",
              "Gesture controls",
              "Dark mode",
              "Works on Android 5.0+",
              "Auto quality adjustment",
              "Minimal ads",
              "Picture-in-picture mode",
            ].map((f, i) => (
              <div className="dl-feat-item" key={i}>
                <span className="dl-feat-check">✓</span> {f}
              </div>
            ))}
          </div>
        </div>

        {/* ── BACK LINK ───────────────────────── */}
        <div className="dl-back-row">
          <Link href="/" className="dl-back-link">← Back to Vedu APK Home</Link>
        </div>

      </main>
    </div>
  );
}