"use client";

import "./best-streaming-apps.css";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    q: "Which is the best free streaming app for Android in 2026?",
    a: "Vedu APK is one of the best free streaming apps for Android in 2026. It offers movies, web series, and dramas without any subscription or login, with HD and 4K quality support.",
  },
  {
    q: "Can I watch Bollywood movies for free on Android?",
    a: "Yes. Apps like Vedu APK offer a large collection of Bollywood, Hollywood, Tamil, and regional movies completely free without requiring any account.",
  },
  {
    q: "Are free streaming apps safe to use on Android?",
    a: "Free streaming apps are safe when downloaded from trusted sources. Always verify the APK before installing and check that the app only requests storage and network permissions.",
  },
  {
    q: "Do free streaming apps work on old Android phones?",
    a: "Yes. Apps like Vedu APK are designed to run smoothly on Android 5.0 and above, including older budget devices with 2GB or 3GB RAM.",
  },
  {
    q: "Which free streaming app has the least ads?",
    a: "Vedu APK is known for minimal and non-intrusive ads compared to other free alternatives. Most free streaming apps carry heavy ads, but Vedu keeps them manageable.",
  },
];

const apps = [
  {
    rank: 1,
    name: "Vedu APK",
    tag: "Best Overall",
    tagColor: "green",
    desc: "Vedu APK is the top free streaming app for Android in 2026. It combines a massive content library — Bollywood, Hollywood, South Indian, and regional films — with a built-in video player, offline download, subtitle support, and 4K quality. No login, no subscription, no hassle.",
    pros: ["No login or account needed", "4K / HD / Ultra HD quality", "Offline download support", "Subtitle support (multiple languages)", "Works on Android 5.0+", "Built-in video player", "Minimal ads"],
    cons: ["Not on Google Play Store", "Requires unknown sources enabled"],
    verdict: "Best free streaming app for Android — covers everything in one place.",
    link: "/download",
    linkText: "Download Vedu APK",
  },
  {
    rank: 2,
    name: "MX Player",
    tag: "Best Video Player",
    tagColor: "blue",
    desc: "MX Player started as a video player and has grown into a streaming platform. It supports a wide range of local video formats and also has an online content section. Available on the Play Store, it is one of the most downloaded media apps in India.",
    pros: ["Available on Play Store", "Excellent local file playback", "Hardware acceleration", "Wide format support"],
    cons: ["Online content requires account", "Heavy ads on free tier", "Online library smaller than dedicated apps"],
    verdict: "Great for local video playback, but streaming library is limited compared to Vedu.",
    link: null,
  },
  {
    rank: 3,
    name: "Cinema HD",
    tag: "Popular Choice",
    tagColor: "purple",
    desc: "Cinema HD is a popular free streaming APK that aggregates content from multiple sources. It has a clean interface and decent content availability, but depends on third-party links which can be inconsistent in quality.",
    pros: ["Clean interface", "Large content database", "Real-Debrid support"],
    cons: ["Link quality inconsistent", "Not always updated", "No built-in video player"],
    verdict: "Good backup option, but link reliability is hit or miss.",
    link: null,
  },
  {
    rank: 4,
    name: "Teatv",
    tag: "Good for Movies",
    tagColor: "orange",
    desc: "Teatv is another free streaming APK popular in India for Bollywood and Hollywood movies. It has a decent interface and regularly updated content, though it lacks some of the polish of Vedu APK.",
    pros: ["Regular content updates", "Simple interface", "Free to use"],
    cons: ["More ads than Vedu", "No offline download on free version", "Less stable on older devices"],
    verdict: "Decent alternative, but Vedu beats it on overall features and performance.",
    link: null,
  },
  {
    rank: 5,
    name: "Kodi",
    tag: "For Power Users",
    tagColor: "gray",
    desc: "Kodi is an open-source media center that can be extended with add-ons for streaming. It is highly customizable but has a steep learning curve. Best for tech-savvy users who want full control over their media experience.",
    pros: ["Fully open source", "Highly customizable", "Large add-on library"],
    cons: ["Complex setup required", "Not beginner friendly", "Add-on quality varies"],
    verdict: "Powerful but complex. Vedu APK is far easier for everyday users.",
    link: null,
  },
];

const tagColors = {
  green:  { bg: "#f0fdf4", color: "#15803d", border: "#bbf7d0" },
  blue:   { bg: "#eff6ff", color: "#1d4ed8", border: "#bfdbfe" },
  purple: { bg: "#f3eeff", color: "#6c2bd9", border: "#ddd6fe" },
  orange: { bg: "#fff7ed", color: "#c2410c", border: "#fed7aa" },
  gray:   { bg: "#f5f5f5", color: "#444",    border: "#e0e0e0" },
};

export default function BestStreamingAppsClient() {
  const [openFaq, setOpenFaq] = useState(null);
  const [tocOpen, setTocOpen] = useState(true);

  return (
    <div className="bsa-page">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Best Streaming Apps for Android (2026) — Free & No Subscription",
            "datePublished": "2026-01-01",
            "dateModified": "2026-04-01",
            "author": { "@type": "Organization", "name": "Vedu APK Team" },
          }),
        }}
      />

      <section className="bsa-hero">
        <div className="bsa-hero-inner">
          <div className="bsa-breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span>Best Streaming Apps</span>
          </div>
          <h1>Best Streaming Apps for Android (2026)</h1>
          <p className="bsa-hero-sub">
            Free, no subscription, no login — the top apps to watch movies,
            web series &amp; dramas on Android right now.
          </p>
          <p className="bsa-meta">
            ✍ Reviewed by Android App Experts &nbsp;|&nbsp; Updated April 2026 &nbsp;|&nbsp; 5 Apps Compared
          </p>
        </div>
      </section>

      <div className="bsa-wrap">

        <section className="bsa-toc-section">
          <div className="bsa-toc-card">
            <div className="bsa-toc-head" onClick={() => setTocOpen(!tocOpen)}>
              <h2>Table of Contents</h2>
              <span>{tocOpen ? "Hide" : "Show"}</span>
            </div>
            {tocOpen && (
              <ul className="bsa-toc-body">
                {[
                  ["#intro",      "Introduction"],
                  ["#app-1",      "1. Vedu APK — Best Overall"],
                  ["#app-2",      "2. MX Player"],
                  ["#app-3",      "3. Cinema HD"],
                  ["#app-4",      "4. Teatv"],
                  ["#app-5",      "5. Kodi"],
                  ["#comparison", "Comparison Table"],
                  ["#verdict",    "Final Verdict"],
                  ["#faqs",       "FAQs"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <span className="bsa-toc-dot" />
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section className="bsa-section" id="intro">
          <h2>Why You Need a Good Free Streaming App</h2>
          <div className="bsa-box">
            <p>Paid streaming platforms like Netflix, Amazon Prime, and Disney+ are excellent — but they cost money every single month. For millions of Android users in India and across South Asia, a reliable free streaming app is not just a convenience, it is a necessity.</p>
            <p>The good news is that several high-quality free streaming apps for Android exist in 2026, offering Bollywood, Hollywood, Tamil, Punjabi, and regional content without any subscription. The challenge is knowing which ones are actually worth installing and which ones waste your time with broken links, heavy ads, or poor performance.</p>
            <p>We tested and compared the top five free streaming apps available for Android in 2026 based on content library, streaming quality, ease of use, ad experience, offline support, and device compatibility. Here is what we found.</p>
          </div>
        </section>

        {apps.map((app, i) => {
          const tc = tagColors[app.tagColor];
          return (
            <section className="bsa-section bsa-app-section" id={`app-${app.rank}`} key={i}>
              <div className="bsa-app-header">
                <div className="bsa-rank-badge">#{app.rank}</div>
                <h2>{app.name}</h2>
                <span className="bsa-app-tag" style={{ background: tc.bg, color: tc.color, borderColor: tc.border }}>
                  {app.tag}
                </span>
              </div>
              <div className="bsa-box"><p>{app.desc}</p></div>
              <div className="bsa-pros-cons">
                <div className="bsa-pros">
                  <h3>✅ Pros</h3>
                  <ul>{app.pros.map((p, j) => <li key={j}>{p}</li>)}</ul>
                </div>
                <div className="bsa-cons">
                  <h3>❌ Cons</h3>
                  <ul>{app.cons.map((c, j) => <li key={j}>{c}</li>)}</ul>
                </div>
              </div>
              <div className="bsa-verdict-row">
                <span className="bsa-verdict-label">Verdict:</span>
                <span className="bsa-verdict-text">{app.verdict}</span>
              </div>
              {app.link && (
                <Link href={app.link} className="bsa-dl-btn">⬇ {app.linkText}</Link>
              )}
            </section>
          );
        })}

        <section className="bsa-section" id="comparison">
          <h2>Comparison Table — All 5 Apps</h2>
          <div className="bsa-box">
            <p>Here is a side-by-side comparison of all five apps across the most important features for everyday streaming on Android.</p>
          </div>
          <div className="bsa-compare-wrap">
            <table className="bsa-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Vedu APK</th>
                  <th>MX Player</th>
                  <th>Cinema HD</th>
                  <th>Teatv</th>
                  <th>Kodi</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["No Login",           "✅","❌","✅","✅","✅"],
                  ["4K Quality",         "✅","✅","✅","❌","✅"],
                  ["Offline Download",   "✅","✅","❌","❌","❌"],
                  ["Subtitle Support",   "✅","✅","❌","❌","✅"],
                  ["Works on Android 5+","✅","✅","✅","✅","✅"],
                  ["Minimal Ads",        "✅","❌","❌","❌","✅"],
                  ["Built-in Player",    "✅","✅","❌","❌","✅"],
                  ["Easy for Beginners", "✅","✅","✅","✅","❌"],
                  ["Play Store",         "❌","✅","❌","❌","✅"],
                ].map(([feat, ...vals], i) => (
                  <tr key={i}>
                    <td className="bsa-feat-cell">{feat}</td>
                    {vals.map((v, j) => (
                      <td key={j} className={v === "✅" ? "bsa-yes" : "bsa-no"}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bsa-section" id="verdict">
          <h2>Final Verdict — Which App Should You Download?</h2>
          <div className="bsa-box">
            <p>After comparing all five apps across content, quality, features, and performance, <strong>Vedu APK is the clear winner for 2026</strong>. It is the only app in this list that combines a large free content library, 4K streaming, offline downloads, subtitle support, no login requirement, and smooth performance on older Android devices — all in a single lightweight app.</p>
            <p>MX Player is excellent if you primarily play local video files and want a Play Store option. Cinema HD works as a backup for users who already use Real-Debrid. Kodi is powerful for technical users who want full customization. But for the average Android user who just wants to open an app and watch a movie for free, Vedu APK is the easiest and most complete solution available today.</p>
            <p>If you have not tried Vedu APK yet, download it from the link below and see for yourself why it is the most searched free streaming app in India in 2026.</p>
            <div style={{ marginTop: "16px" }}>
              <Link href="/download" className="bsa-dl-btn">⬇ Download Vedu APK Free — Safe &amp; Verified</Link>
            </div>
          </div>
        </section>

        <section className="bsa-section" id="faqs">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bsa-faq-item${openFaq === i ? " open" : ""}`}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <div className="bsa-faq-q">
                <span className="bsa-faq-icon">{openFaq === i ? "−" : "+"}</span>
                <p>{faq.q}</p>
              </div>
              {openFaq === i && (
                <div className="bsa-faq-a"><p>{faq.a}</p></div>
              )}
            </div>
          ))}
        </section>

        <div className="bsa-back-row">
          <Link href="/" className="bsa-back-link">← Back to Vedu APK Home</Link>
        </div>

      </div>
    </div>
  );
}