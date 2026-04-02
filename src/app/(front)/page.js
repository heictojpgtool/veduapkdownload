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
      q: "What is Stream India App?",
      a: "Stream India is a free Android application that allows users to watch Live TV, Cricket matches, Movies, and TV Shows without any subscription. It provides access to hundreds of Indian and international channels including Sony Six, Willow TV, Star Gold, HBO, and many more — all completely free of charge.",
    },
    {
      q: "Can I watch live cricket on Stream India for free?",
      a: "Yes! Stream India APK offers completely free live cricket streaming including IPL, PSL, T20 World Cup, and all major international cricket tournaments. You can watch through channels like Sony Six, Willow TV, Astro Cricket, Fox Cricket, PTV Sports, and more — all without paying anything.",
    },
    {
      q: "Where can I download the Stream India APK file?",
      a: "You can download the latest Stream India APK directly from this page by clicking the Download Now button. Always download from trusted and verified websites to keep your Android device safe and secure.",
    },
    {
      q: "Is Stream India available on iOS or iPhone?",
      a: "Currently, Stream India APK is only available for Android devices. iOS devices do not support APK file installation. Android users can easily download and install the Stream India app by enabling 'Install from Unknown Sources' in their device settings.",
    },
    {
      q: "What sports channels are available in Stream India?",
      a: "Stream India Sports section includes Sony Six, Sony Ten 1, Sony Ten 2, Sony Ten 3, Willow TV, Fox Cricket, Astro Cricket, SuperSport, Bein Sports 13, PTV Sports, Star Sports HD 1, Hero ISL, SA T20, and many more channels for all sports lovers.",
    },
    {
      q: "Is the Stream India app safe to download and use?",
      a: "Stream India APK is generally safe when downloaded from a trusted website. Since it is a third-party app not on the Google Play Store, always download from verified sources and keep an antivirus app on your device for extra security.",
    },
  ];

  return (
    <div className="si-page">

      <section className="si-hero" id="home">
        <div className="si-hero-left">
          <h1>Stream India</h1>
          <p className="si-tagline">All Movie, Cricket &amp; TV Show</p>
          <p className="si-desc">
            A Free Streaming App for Android. Watch Live Cricket, Movies &amp; TV
            Channels Without Any Subscription. Go Beyond Limits on Content
            Viewing, and More.
          </p>

          <div className="si-rating">
            <span className="si-stars">★★★★★</span>
            <span className="si-rnum">4.8</span>
            <span className="si-rtxt">Reviewed by <strong>70K+ Users</strong></span>
          </div>

          <Link href="download" className="si-btn">Download Now</Link>

          <div className="si-socials">
            <a href="#" className="si-soc si-li" title="LinkedIn">in</a>
            <a href="#" className="si-soc si-fb" title="Facebook">f</a>
            <a href="#" className="si-soc si-tw" title="Twitter">𝕏</a>
            <a href="#" className="si-soc si-wa" title="WhatsApp">W</a>
            <a href="#" className="si-soc si-tg" title="Telegram">✈</a>
          </div>
        </div>

        <div className="si-hero-img">
          <Image
            src="/images/download (52).png"
            alt="Stream India App Preview"
            width={240}
            height={480}
            priority
          />
        </div>
      </section>

      <div className="si-wrap">

        <section className="si-toc-section">
          <div className="si-toc-card">
            <div
              className="si-toc-head"
              onClick={() => setTocOpen(!tocOpen)}
            >
              <h2>Table of Content</h2>
              <span className="si-toc-toggle">{tocOpen ? "Hide" : "Show"}</span>
            </div>
            {tocOpen && (
              <ul className="si-toc-body">
                {["About", "Screenshots", "Features", "Process", "Conclusion", "FAQs"].map(
                  (item) => (
                    <li key={item}>
                      <span className="si-toc-dot" />
                      <a href={`#${item.toLowerCase()}`}>{item}</a>
                    </li>
                  )
                )}
              </ul>
            )}
          </div>

          <div className="si-info-table">
            {[
              [
                { icon: "📦", label: "App Name",     val: "Stream India" },
                { icon: "⚡", label: "Version",      val: "Latest 2025" },
              ],
              [
                { icon: "🔀", label: "Package Name", val: "com.stream.india" },
                { icon: "🌐", label: "Publisher",    val: "StreamIndia Team" },
              ],
              [
                { icon: "📋", label: "Requirements", val: "Android 5.0 and Up" },
                { icon: "▪",  label: "Category",     val: "Entertainment" },
              ],
              [
                { icon: "💾", label: "Size",         val: "25 MB" },
                { icon: "🏷", label: "Price",        val: "Free" },
              ],
            ].map((row, i) => (
              <div className="si-info-row" key={i}>
                {row.map((cell) => (
                  <div className="si-info-cell" key={cell.label}>
                    <span className="si-info-ico">{cell.icon}</span>
                    <span className="si-info-lbl">{cell.label}</span>
                    <span className="si-info-val">{cell.val}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="si-section" id="about">
          <div className="si-box">
            <p>
              Stream India is a completely free streaming application for Android users who want
              to watch Live TV, Cricket matches, Movies, and TV Shows without paying any monthly
              subscription. It is one of the most downloaded entertainment apps among users in
              India, Pakistan, Bangladesh, and across South Asia who want to enjoy high-quality
              content at zero cost.
            </p>
            <p>
              In today&apos;s digital world, most popular streaming services like Netflix, Hotstar,
              or SonyLIV require expensive subscriptions to access premium content. The Stream
              India app completely eliminates this barrier by offering a huge collection of live
              channels, sports coverage, and on-demand movies — all for free on any Android device.
            </p>
            <p>
              The Stream India APK download is very simple and takes only a few minutes to
              install. It does not require an account or login to start watching. Whether you
              are a cricket fan, a movie lover, or a regular TV viewer, the Stream India app
              has something for everyone.
            </p>
          </div>

          <h2>What is Stream India App</h2>
          <div className="si-box">
            <p>
              Stream India is an Android application specifically built for users in South Asia
              who love watching live cricket, movies, and regional TV channels. The app provides
              a clean dark-themed interface with three main tabs — Home, Highlights, and Sports
              — making it very easy to navigate even for first-time users.
            </p>
            <p>
              The Stream India APK features organized categories including Sports, India, Punjabi,
              and Movies. Inside Sports, you will find dedicated channels like Sony Six, Sony Ten 1,
              Sony Ten 2, Sony Ten 3, Willow TV, Fox Cricket, Astro Cricket, SuperSport, and Bein
              Sports. The Movies section includes top channels like Star Gold, B4U Movies, Zee
              Cinema, HBO, and many more regional options.
            </p>
            <p>
              Since the Stream India app is not available on the Google Play Store, users need to
              download the Stream India APK file from a trusted website and install it manually.
              The installation process is quick, and the app runs smoothly on most Android phones
              without any lag or buffering issues.
            </p>
          </div>
        </section>

        <section className="si-section" id="screenshots">
          <h2>App Screenshots</h2>
          <div className="si-ss-grid">
            <Image src="/images/download (46).png" alt="Stream India Home Screen" width={200} height={400} />
            <Image src="/images/download (47).png" alt="Stream India Categories Screen" width={200} height={400} />
            <Image src="/images/download (48).png" alt="Stream India Sports Channels" width={200} height={400} />
            <Image src="/images/download (49).png" alt="Stream India Movies Channels" width={200} height={400} />
            <Image src="/images/download (50).png" alt="Stream India Live Streaming" width={200} height={400} />
            <Image src="/images/download (51).png" alt="Stream India Channel List" width={200} height={400} />
          </div>
        </section>

        <section className="si-section" id="features">
          <h2>Main Features</h2>
          <div className="si-feat-grid">
            {[
              "Stream India is a 100% working and completely free streaming application for Android.",
              "Watch live cricket including IPL, PSL, T20 World Cup, and all bilateral series for free.",
              "Access hundreds of Indian TV channels like Star Sports, Sony, Zee without any subscription.",
              "Browse movies across Bollywood, Hollywood, and regional language categories for free.",
              "Sports section features Sony Ten 1, Sony Ten 2, Willow TV, Fox Cricket, Astro Cricket, and Bein Sports.",
              "Clean dark-themed interface with easy navigation across Home, Highlights, and Sports tabs.",
              "Lightweight app — only around 25MB in size, perfect for all Android phones and tablets.",
              "No registration or login required. Install the Stream India APK and start streaming instantly.",
            ].map((feat, i) => (
              <div className="si-feat-box" key={i}>{feat}</div>
            ))}
          </div>
        </section>

        <div id="process">

          <div className="si-feat-detail">
            <h2>Live Cricket Streaming</h2>
            <div className="si-desc-box">
              <p>
                One of the biggest reasons millions of users download the Stream India APK is its
                free live cricket streaming. Whether it is IPL, PSL 2025, T20 World Cup, or any
                bilateral cricket series, the Stream India app brings you the best live coverage
                completely free. Popular channels like Sony Six, Sony Ten 1, Sony Ten 2, Willow TV,
                Astro Cricket, Fox Cricket, SuperSport, Bein Sports 13, and PTV Sports are all
                available inside the app.
              </p>
              <p>
                Cricket fans no longer need expensive subscriptions just to watch a match. The
                Stream India app gives you HD quality live cricket streaming on your Android phone
                with smooth playback and minimal buffering. You can also watch highlights and
                replays in the Highlights tab after the match is over.
              </p>
            </div>
            <div className="si-feat-img">
              <Image src="/images/download (48).png" alt="Stream India Live Cricket Sports Channels" width={220} height={440} />
            </div>
          </div>

          <div className="si-feat-detail">
            <h2>Movies &amp; Entertainment Channels</h2>
            <div className="si-desc-box">
              <p>
                The Stream India app is not just about cricket — it also offers a rich collection
                of movie channels you can enjoy anytime. The Movies section includes popular
                channels like Star Gold, B4U Movies, Star Movies, Star Ustav Movies, Zee Cinema,
                Zee Classic, Zee Action, HBO, HBO 2, Filmworld, Filmax, Aruj TV, and many more
                regional options.
              </p>
              <p>
                Whether you enjoy Bollywood blockbusters, classic Hindi films, international
                Hollywood movies, or regional cinema — Stream India has them all under one roof.
                With the Stream India APK download, you get unlimited movie entertainment on your
                Android device without spending a single rupee.
              </p>
            </div>
            <div className="si-feat-img">
              <Image src="/images/download (49).png" alt="Stream India Movies Channels" width={220} height={440} />
            </div>
          </div>

          <div className="si-feat-detail">
            <h2>Home Screen &amp; Categories</h2>
            <div className="si-desc-box">
              <p>
                The Stream India app home screen is designed for quick and easy navigation. As
                soon as you open the app, you see a live stream at the top, followed by organized
                categories: Sports, India, Punjabi, and Movies. The Most Viewed section shows the
                most popular channels so you can quickly jump to what is trending right now.
              </p>
              <p>
                You can use the search icon at the top right to find any specific channel or content
                inside the app. The bottom navigation bar with Home, Highlights, and Sports tabs
                makes it very convenient to switch between sections without getting confused. The
                entire interface is optimized for smooth single-hand use on any Android phone.
              </p>
            </div>
            <div className="si-feat-img">
              <Image src="/images/download (52).png" alt="Stream India Home Screen Categories" width={220} height={440} />
            </div>
          </div>

        </div>

        <section className="si-section">
          <h2>How Stream India is Different from Other Apps?</h2>
          <div className="si-box">
            <p>
              Users who have already tried the Stream India app will quickly understand what makes
              it stand out. Unlike other free streaming apps that have too many ads, poor video
              quality, or constant crashes — Stream India focuses on delivering a smooth, reliable,
              and completely free streaming experience for everyone.
            </p>
            <p>
              There are many differences between the Stream India APK and other streaming apps.
              Stream India gives users access to live premium sports channels, free movie channels,
              and regional TV content that is normally locked behind expensive subscriptions in
              other apps. It also offers a dedicated Punjabi category which very few apps provide.
            </p>
          </div>
          <div className="si-box">
            <p>
              It is important to note that the Stream India APK is a third-party application and
              is not available on the Google Play Store. The app has been removed from official
              stores because it provides access to premium content for free. Users who want to
              download the Stream India app should always do so from trusted and verified websites
              to keep their device safe and secure.
            </p>
            <p>
              Always download the latest version of the Stream India APK to get the best
              performance, updated channel list, and latest bug fixes. The app is regularly
              updated by the developers to add new channels and improve streaming quality.
            </p>
          </div>
        </section>

        <section className="si-section" id="download">
          <h2>How to Download, Install, and Use Stream India APK?</h2>
          <div className="si-box">
            <p>
              Downloading and installing the Stream India APK is very simple and takes only a few
              minutes. First, tap the Download Now button on this page to get the latest Stream
              India APK file on your Android smartphone. Make sure you have enough storage space
              — the app is only around 25MB so it will not take much space on your device.
            </p>
            <p>
              Once the Stream India APK download is complete, go to your phone&apos;s Settings and
              enable &quot;Unknown Sources&quot; or &quot;Install from Unknown Apps&quot; under the Security or
              Privacy section. This step is necessary because the Stream India app is not from
              the Google Play Store.
            </p>
            <p>
              After enabling unknown sources, open the downloaded APK file and tap Install. Wait
              a few seconds for the installation to finish. Once done, open the Stream India app
              by tapping its icon. You will see the home screen with all categories ready to
              browse — no login or registration required.
            </p>
          </div>

          <h2 className="si-steps-title">Installation Steps</h2>
          <div className="si-steps-box">
            <p>To install Stream India APK on your Android phone, follow these simple steps:</p>
            <ol className="si-steps-list">
              {[
                "Click the Download Now button on this page.",
                "Wait for the Stream India APK file to download completely on your device.",
                "Go to Settings → Security → Enable \"Install from Unknown Sources\".",
                "Open the downloaded APK file and tap Install to begin installation.",
                "Installation complete! Open Stream India and enjoy free streaming.",
              ].map((step, i) => (
                <li key={i}>
                  <span className="si-step-num">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="si-section" id="conclusion">
          <h2>Conclusion</h2>
          <div className="si-box">
            <p>
              Stream India APK is without a doubt one of the best free streaming apps available
              for Android users in India, Pakistan, Bangladesh, and across South Asia. Whether
              you want to watch live cricket matches, blockbuster movies, or your favorite regional
              TV channels — the Stream India app brings everything together in one simple and
              easy-to-use application.
            </p>
            <p>
              With a lightweight size of only 25MB, no login required, and regular updates from
              the developers, the Stream India app is a must-have for anyone who loves
              entertainment. Download the latest Stream India APK right now and start enjoying
              unlimited free streaming on your Android device today.
            </p>
          </div>
        </section>

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