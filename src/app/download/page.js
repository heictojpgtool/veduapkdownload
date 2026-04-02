"use client";

import "./download.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function DownloadPage() {
  const [countdown, setCountdown] = useState(15);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (countdown <= 0) { setReady(true); return; }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown]);

  return (
    <div className="dl-page">



      {/* MAIN CARD */}
      <main className="dl-main">
        <div className="dl-card">

          {/* App Row */}
          <div className="dl-app-row">
            <div>
              <h1>Stream India APK</h1>
              <p className="dl-sub">All Movie, Cricket &amp; TV Show</p>
              <div className="dl-badges">
                <span>⚡ Latest 2025</span>
                <span>💾 25 MB</span>
                <span>🤖 Android 5.0+</span>
                <span className="green">🆓 Free</span>
              </div>
            </div>
          </div>

          <div className="dl-divider" />

          {/* Countdown / Button */}
          {!ready ? (
            <div className="dl-countdown">
              <p>Download will be ready in</p>
              <div className="dl-timer">{countdown}</div>
              <div className="dl-progress"><div className="dl-fill" style={{ width: `${((15 - countdown) / 15) * 100}%` }} /></div>
              <button className="dl-btn disabled" disabled>⏳ Please Wait... ({countdown}s)</button>
            </div>
          ) : (
            <div className="dl-countdown">
              <p className="ready-txt">✅ Your download is ready!</p>
              <a href="/stream-india.apk" className="dl-btn active" download>
                ⬇ Download Stream India APK Now
              </a>
              <p className="dl-fileinfo">stream-india.apk · 25 MB · Free</p>
            </div>
          )}

          <div className="dl-divider" />

          {/* Install Steps */}
          <div className="dl-steps">
            <h2>How to Install</h2>
            <ol>
              <li><span>1</span> Click Download &amp; wait for APK to save.</li>
              <li><span>2</span> Settings → Security → Enable <strong>Unknown Sources</strong>.</li>
              <li><span>3</span> Open Downloads folder → tap the APK file.</li>
              <li><span>4</span> Tap <strong>Install</strong> and wait a few seconds.</li>
              <li><span>5</span> Open Stream India and enjoy free streaming! 🎉</li>
            </ol>
          </div>

          <div className="dl-divider" />

          {/* Security */}
          <div className="dl-security">
            <span>🛡 Security Verified</span>
            <span>✔ CM Security</span>
            <span>✔ Lookout</span>
            <span>✔ McAfee</span>
          </div>

        </div>
      </main>

    </div>
  );
}