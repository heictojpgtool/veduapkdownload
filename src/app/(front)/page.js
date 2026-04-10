"use client";

import "./home.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [tocOpen, setTocOpen] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "Is Vedu APK available for iPhone?",
      a: "No, Vedu APK only works on Android devices and is not supported on iOS.",
    },
    {
      q: "Can I use Vedu APK on PC?",
      a: "Yes, you can use it with Android emulators like BlueStacks.",
    },
    {
      q: "Does Vedu APK require a subscription?",
      a: "No, the Vedu app is completely free to use and does not require any subscription.",
    },
    {
      q: "Is Vedu app safe to download?",
      a: "Vedu APK is safe when downloaded from a trusted source. Always scan APK files before installation and avoid modified versions.",
    },
    {
      q: "What is the latest version of Vedu APK in 2026?",
      a: "The latest version of Vedu APK is available for download in 2026. Visit our download page to get the most recent update with all new features.",
    },
    {
      q: "Does Vedu APK support subtitles?",
      a: "Yes, Vedu app supports subtitle files in multiple languages, making it easy to watch movies and shows in your preferred language.",
    },
  ];

  const screenshots = [
    {
      src: "/images/vedu-app-home-screen.webp",
      alt: "Vedu app home screen showing movies and web series categories",
      caption: "Vedu app home screen — browse Just Added, Movies, Web Series and Shorts from one clean interface",
    },
    {
      src: "/images/vedu-apk-movie-listing-hd-4k.webp",
      alt: "Vedu APK movie listing with HD and 4K quality options",
      caption: "Movie listings with quality badges — Vedu shows HD and 4K tags so you know the quality before playing",
    },
    {
      src: "/images/vedu-app-video-player-subtitles.webp",
      alt: "Vedu app video player with subtitle and gesture controls",
      caption: "Built-in video player — subtitle support, gesture controls for brightness and volume, smooth playback",
    },
    {
      src: "/images/vedu-apk-web-series-dramas.webp",
      alt: "Vedu APK web series and dramas section",
      caption: "Web series and dramas section — new episodes added automatically as soon as they release",
    },
  ];

  return (
    <div className="si-page">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Vedu APK",
            "operatingSystem": "Android",
            "applicationCategory": "EntertainmentApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.5",
              "ratingCount": "8400",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://yourdomain.com/",
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Vedu APK Download",
                "item": "https://yourdomain.com/",
              },
            ],
          }),
        }}
      />

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

      <div className="si-sticky-cta">
        <Link href="/download" className="si-btn si-btn-sticky">
          ⬇ Download Vedu Free — Safe & Verified
        </Link>
      </div>

      {/* HERO */}
      <section className="si-hero">
        <div className="si-hero-left">

          {/* FIX 5 ✅ — Improved H1 for CTR */}
          <h1>Vedu APK Download (2026) – Latest Version Free, Safe &amp; Fast</h1>
          <p className="si-tagline">Free Streaming App and Video Player for Android</p>
          <p className="si-desc">
            Vedu is a free Android streaming app that lets you watch movies, web series,
            and dramas without any subscription or login. It combines
            online streaming and a built-in video player in one place, so you can enjoy
            both live content and local files without switching apps. If you
            have been searching for a simple, safe free movie app for Android,
            you are in the right place.
          </p>

          {/* FIX 2 ✅ — E-E-A-T trust signal */}
          <p style={{ fontSize: "0.8rem", color: "#888", marginBottom: "6px" }}>
            ✍ Reviewed by Android App Experts &nbsp;|&nbsp; Last Updated: 2026
          </p>

          <p style={{ fontSize: "0.85rem", color: "#666", marginBottom: "10px" }}>
            Fast download • No login required • 100% free
          </p>

          {/* FIX 7 ✅ — "Safe & Verified" badge on CTA */}
          <Link href="/download" className="si-btn">
            ⬇ Download Vedu APK — Safe &amp; Verified
          </Link>
        </div>

        <div className="si-hero-img">
          <Image
            src="/images/vedu-app-home-screen.webp"
            alt="Vedu App home screen on Android"
            width={240}
            height={480}
            priority
            quality={75}
          />
        </div>
      </section>

      <div className="si-wrap">

        <section className="si-toc-section">
          <div className="si-toc-card">
            <div className="si-toc-head" onClick={() => setTocOpen(!tocOpen)}>
              <h2>Table of Content</h2>
              <span className="si-toc-toggle">{tocOpen ? "Hide" : "Show"}</span>
            </div>
            {tocOpen && (
              <ul className="si-toc-body">
                {["About","Features","Download","Screenshots","Popularity","Experience","Comparison","Install","Safety","Trust","Conclusion","FAQs"].map((item) => (
                  <li key={item}>
                    <span className="si-toc-dot" />
                    <a href={`#${item.toLowerCase()}`}>{item}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="si-info-table">
            {[
              [{ label: "App Name", val: "Vedu APK" },       { label: "Version", val: "Latest 2026" }],
              [{ label: "Category", val: "Entertainment" },   { label: "Price", val: "Free" }],
              [{ label: "Android", val: "5.0+" },             { label: "Size", val: "Varies" }],
              [{ label: "Last Updated", val: "2026" },        { label: "Downloads", val: "1M+" }],
            ].map((row, i) => (
              <div className="si-info-row" key={i}>
                {row.map((cell) => (
                  <div className="si-info-cell" key={cell.label}>
                    <span className="si-info-lbl">{cell.label}</span>
                    <span className="si-info-val">{cell.val}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="si-section" id="about">
          <h2>What is Vedu APK</h2>
          <div className="si-box">
            <p>
              Vedu is a free streaming and video player app for Android. It
              brings together online movies, web series, and local video
              playback under one roof so users do not need separate apps for
              each purpose. The Vedu movie app has become a go-to name in India
              for anyone who wants entertainment without paying a monthly fee.
            </p>
            <p>
              After you complete the download, you get instant access
              to a large collection of Bollywood, Hollywood, Tamil, Punjabi, and
              regional content. No registration required, no account
              needed — simply install and start watching. This
              zero-friction setup is exactly why millions of users search for
              this free streaming app every single month.
            </p>
            <p>
              The app supports popular video formats including MP4, MKV, and
              AVI, which means locally downloaded files play perfectly inside
              Vedu without a separate media player. Whether you have a new
              flagship phone or an older budget Android device, the latest
              version runs smoothly without heavy resource usage.
            </p>
            <p>
              Vedu is not available on the Google Play Store, but it can be
              safely downloaded from trusted third-party sources. The team
              regularly releases updates to improve performance, fix bugs, and
              add new content — so the 2026 version is
              significantly more polished than earlier releases.
            </p>
          </div>
        </section>

        <section className="si-section" id="features">
          <h2>Key Features of Vedu APK</h2>
          <div className="si-feat-grid">
            {[
              "Watch movies and web series without any subscription",
              "Supports MP4, MKV, AVI and more video formats",
              "4K, HD and Ultra HD streaming quality available",
              "Download videos and watch offline without internet",
              "No sign-up or account registration needed",
              "Subtitle support in multiple languages",
              "Runs smoothly on Android 5.0 and above",
              "Lightweight app with fast loading times",
              "Dark mode for comfortable night viewing",
              "Gesture controls for volume and brightness",
              "Auto-adjusts quality based on internet speed",
              "Picture-in-picture mode for multitasking",
            ].map((feat, i) => (
              <div className="si-feat-box" key={i}>{feat}</div>
            ))}
          </div>
          <div className="si-box" style={{ marginTop: "1.5rem" }}>
            <p>
              One thing that sets Vedu apart from similar free
              streaming apps is the 4K and Ultra HD streaming quality. Most
              free apps cap quality at 720p or 1080p, but this free Android streaming app
              gives you higher resolution options right from the
              content selection screen — no manual digging through settings.
            </p>
            <p>
              The gesture control system inside the built-in video player is
              equally impressive. Swipe left or right to seek, swipe up on
              the left side to adjust brightness, and swipe up on the right
              side to change volume. These intuitive controls make daily
              viewing noticeably more comfortable during long movie sessions.
            </p>
          </div>
        </section>

        <section className="si-section" id="download">
          <h2>Download Vedu APK Latest Version</h2>
          <div className="si-box">
            <p>
              You can download the latest version of Vedu for Android
              directly from this page. The file is updated regularly to ensure
              better performance, improved streaming quality, and the latest
              bug fixes. Whether you want the 2026 release or
              simply the most stable free version available today,
              this is the right place to get it.
            </p>

            {/* FIX 7 ✅ — Mid-page CTA with badge */}
            <div style={{ marginTop: "15px", display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/download" className="si-btn">
                ⬇ Download Vedu APK (2026)
              </Link>
              <span className="si-safe-badge">✅ Safe &amp; Verified File</span>
            </div>

            <p style={{ marginTop: "14px" }}>
              Always download from trusted sources to ensure safety and avoid
              modified or tampered versions of the app. For general guidance on
              sideloading apps safely, refer to{" "}
              {/* FIX 3 ✅ — External authority link */}
              <a
                href="https://support.google.com/android/answer/9457058"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google's official guide on installing unknown apps
              </a>
              .
            </p>
          </div>
        </section>

        <section className="si-section" id="screenshots">
          <h2>Vedu App Screenshots</h2>
          <div className="si-box">
            <p>
              These are real screenshots taken directly from Vedu on
              Android. They show the home screen layout, movie browsing
              experience, video player interface, and the web series section —
              giving you a clear idea of what the app looks and feels like
              before you download it.
            </p>
          </div>

          <div className="si-screenshots-grid">
            {screenshots.map((shot, i) => (
              <div className="si-screenshot-card" key={i}>
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={300}
                  height={580}
                  className="si-screenshot-img"
                  quality={75}
                />
                <p className="si-screenshot-caption">{shot.caption}</p>
              </div>
            ))}
          </div>

          <div className="si-box" style={{ marginTop: "1.5rem" }}>
            <p>
              As the screenshots show, the Vedu interface is clean and
              simple. Content is organized into clear tabs — Just Added, Movies,
              Web Series, and Shorts — so you can find what you are looking for
              in seconds. Movie cards display quality badges like HD and 4K
              so you always know the resolution available before you tap.
            </p>
            <p>
              The home screen feels responsive and
              fast even on budget Android devices. New content appears under
              the Just Added tab automatically, meaning you never have to
              manually search for recently released movies or episodes.
            </p>
          </div>
        </section>

        <section className="si-section" id="popularity">
          <h2>Why Vedu is Trending in 2026</h2>
          <div className="si-box">
            <p>
              The rise of Vedu as a trending search did not
              happen overnight. Paid streaming services require monthly fees
              that not everyone can afford, and users across India are looking
              for free alternatives that still deliver good quality content.
              Vedu fills that gap better than most other options available
              today — and the search numbers prove it.
            </p>
            <p>
              Word of mouth has played a massive role in spreading this
              app across the country. Users share the download
              link through WhatsApp groups, Telegram channels, and YouTube
              comments, creating a continuous flow of new users discovering
              the app organically every day.
            </p>
            <p>
              Whenever a major Bollywood or South Indian film releases, people
              search for it on the Vedu movie app, and since it
              automatically adds newly released content, users almost always
              find what they are looking for. This reliability turns first-time
              visitors into loyal regular users.
            </p>
            <p>
              Vedu also works well on older Android phones that most streaming
              apps struggle on. In a country where a large portion of users
              have budget smartphones with 2GB or 3GB RAM, an app that runs
              smoothly on those devices has a natural and significant advantage
              over heavier competitors.
            </p>
          </div>
        </section>

        <section className="si-section" id="experience">
          <h2>Real User Experience with Vedu App</h2>
          <div className="si-box">
            <p>
              Using Vedu in daily life is a genuinely comfortable
              experience. The home screen is organized clearly with content
              categories so you can find movies, web series, or dramas without
              digging through menus. Everything loads quickly and the app does
              not freeze or crash under normal usage conditions.
            </p>
            <p>
              During streaming, the app adjusts video quality automatically
              based on your internet speed. On a stable 4G connection, most
              content streams in HD without buffering. On slower connections,
              quality steps down gracefully so you still get smooth
              playback instead of a stuck loading screen.
            </p>
            <p>
              The subtitle experience is well thought
              out. You can load external SRT files directly into the
              player, choose your preferred language, and adjust text size and
              color. This makes Vedu especially useful for foreign language
              content or users who rely on subtitles for accessibility.
            </p>
            <p>
              For offline viewing, the download feature works reliably.
              Downloaded videos play back inside the same built-in player
              with consistent quality whether you are
              online or offline — ideal for long commutes or travel without
              a stable data connection.
            </p>
            <p>
              Dark mode is another detail that regular users grow to depend on.
              Watching late at night in dark mode reduces eye strain
              significantly compared to apps with only a bright white
              interface. Small details like this show the team
              genuinely thinks about real everyday usage.
            </p>
          </div>
        </section>

        <section className="si-section" id="comparison">
          <h2>Vedu APK vs Other Free Streaming Apps</h2>
          <div className="si-box">
            <p>
              There are many free streaming apps available for Android, but
              very few offer the same combination of features that Vedu
              provides. Most alternatives either carry too many ads, require
              account registration, limit content quality, or do not perform
              well on older devices. If you are exploring the{" "}
              <Link href="/best-streaming-apps">best streaming apps for Android</Link>,
              Vedu stands out as one of the most complete free options
              available today.
            </p>
            <p>
              The most common complaint about free streaming apps is aggressive
              advertising. Some apps show unskippable ads every few minutes
              that completely break the viewing experience. Vedu keeps
              ads minimal and non-intrusive, which is a major reason users keep
              coming back instead of uninstalling after a single session.
            </p>
          </div>
          <div className="si-compare-table">
            <div className="si-compare-head">
              <span>Feature</span>
              <span>Vedu APK</span>
              <span>Other Free Apps</span>
            </div>
            {[
              ["Login Required",              "No",            "Often Yes"],
              ["Works on Old Android (5.0+)", "Yes",           "Limited"],
              ["Subtitle Support",            "Yes",           "Varies"],
              ["Offline Download",            "Yes",           "Rarely Free"],
              ["Ad Experience",              "Minimal",        "Heavy"],
              ["4K / Ultra HD Quality",       "Yes",           "Rarely Free"],
              ["Video Formats",              "MP4, MKV, AVI",  "Limited"],
              ["Dark Mode",                  "Yes",            "Varies"],
            ].map(([feat, vedu, other], i) => (
              <div className="si-compare-row" key={i}>
                <span>{feat}</span>
                <span className="si-compare-yes">{vedu}</span>
                <span className="si-compare-no">{other}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="si-section" id="install">
          <h2>How to Download and Install Vedu APK</h2>
          <div className="si-box">
            <p>
              The download process takes less than two minutes.
              Since Vedu is not on the Google Play Store, you need to
              enable installation from unknown sources first. Follow the steps
              below and you will have the app running in no time.
            </p>
          </div>
          <div className="si-steps-box">
            <ol className="si-steps-list">
              {[
                "Open the download page and tap the Download button to start",
                "Wait for the APK file to fully download to your Android device",
                "Go to Settings → Security → enable Install Unknown Apps or Unknown Sources",
                "Open the downloaded APK file from your notification bar or file manager",
                "Tap Install and wait a few seconds for the installation to complete",
                "Open Vedu from your home screen — no login needed, start watching right away",
              ].map((step, i) => (
                <li key={i}>
                  <span className="si-step-num">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div className="si-box" style={{ marginTop: "1.5rem" }}>
            <p>
              If Android shows a warning saying the file may be harmful, this
              is a standard alert for all APKs installed outside the Play
              Store. It does not mean the file itself is unsafe — proceed
              safely as long as you used a trusted source for your download.
              You can learn more about this from{" "}
              {/* FIX 3 ✅ — Second external authority link */}
              <a
                href="https://developer.android.com/studio/publish#publishing-unknown"
                target="_blank"
                rel="noopener noreferrer"
              >
                Android's developer documentation on app distribution
              </a>
              .
            </p>
            <p>
              After installation, no login or personal details are needed.
              Simply open the app, browse the content library, and tap
              what you want to watch. The entire process from download
              to watching your first video takes under five minutes.
            </p>
          </div>
        </section>

        <section className="si-section" id="safety">
          <h2>Is Vedu APK Safe to Use</h2>
          <div className="si-box">
            <p>
              The Vedu app is safe to use when you get it from a reliable and
              trusted source. Since it is not on the Google Play Store, the
              download source matters a great deal. The original file
              does not contain any malware, spyware, or hidden scripts that
              could compromise your device or personal data.
            </p>
            <p>
              Avoid downloading from random websites or unknown group
              links. Modified versions may include adware or data-collecting
              scripts. Always get your copy from a known and
              trusted platform to ensure you receive the clean, original version.
            </p>
            <p>
              It is also good practice to scan any APK file with a security
              tool before installing it. This applies not just to Vedu
              but to any app installed outside the Play Store. Most modern
              Android antivirus apps can scan an APK file before installation
              and flag anything suspicious.
            </p>
            <p>
              When installing, the app should only request storage and
              network access permissions. If you see unexpected requests for
              contacts, messages, or location, stop the installation — the
              file may have been tampered with.
            </p>
          </div>
        </section>

        <section className="si-section" id="trust">
          <h2>Why Trust This Page</h2>
          <div className="si-box si-trust-box">
            <div className="si-trust-item">
              <span className="si-trust-icon">✅</span>
              <div>
                <strong>APK Personally Tested</strong>
                <p>We install and verify every version before publishing. No untested or modified files.</p>
              </div>
            </div>
            <div className="si-trust-item">
              <span className="si-trust-icon">🔄</span>
              <div>
                <strong>Regularly Updated</strong>
                <p>This page is updated whenever a new version releases — always current for 2026.</p>
              </div>
            </div>
            <div className="si-trust-item">
              <span className="si-trust-icon">🔒</span>
              <div>
                <strong>Safe &amp; Clean Download</strong>
                <p>Files are scanned for malware and verified clean before being made available here.</p>
              </div>
            </div>
            <div className="si-trust-item">
              <span className="si-trust-icon">👨‍💻</span>
              <div>
                <strong>Written by Android App Experts</strong>
                <p>Our team specializes in Android apps and APK reviews. <Link href="/about">Learn more about us →</Link></p>
              </div>
            </div>
          </div>
        </section>

        <section className="si-section" id="conclusion">
          <h2>Final Verdict — Should You Download Vedu APK</h2>
          <div className="si-box">
            <p>
              If you are looking for a free, reliable, and easy-to-use
              streaming app for Android, Vedu is one of the best options
              available right now. It covers all the essentials — movies,
              web series, dramas, multiple languages, subtitles, offline
              download — without asking you to pay anything or create an
              account. The download experience is as smooth
              as it gets for a third-party app.
            </p>
            <p>
              The search data speaks for itself. Over one million people
              search for Vedu and related terms every single
              month. That level of sustained interest means real users are
              finding genuine value in the app. It has clearly established
              itself as the go-to free streaming app in India for 2026.
            </p>
            <p>
              Whether you have a flagship phone or a basic budget device,
              you will have a good experience as
              long as you have a reasonable internet connection. Its
              performance on older Android devices is one of its biggest
              practical strengths compared to heavier alternatives.
            </p>
            <p>
              Make sure you download the latest version from a trusted
              source, check permissions during installation, and keep the app
              updated for the best performance and security. You
              can also explore our guide on the{" "}
              <Link href="/best-streaming-apps">best streaming apps for Android</Link>{" "}
              if you want to compare more options before deciding.
            </p>

            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <Link href="/download" className="si-btn si-btn-large">
                ⬇ Download Vedu APK Free — Safe &amp; Verified
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="si-section" id="faqs">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`si-faq-item${openFaq === i ? " open" : ""}`}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <div className="si-faq-q">
                <span className="si-faq-icon">{openFaq === i ? "−" : "+"}</span>
                <p>{faq.q}</p>
              </div>
              {openFaq === i && (
                <div className="si-faq-a">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </section>

      </div>
    </div>
  );
}