import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Vedu App APK – Free Download For Android 2026",
    description: "Download Vedu APK latest version for Android. Free streaming app with movies, web series, and TV shows. No subscription required.",
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/favicon.png", type: "image/png", sizes: "32x32" },
        ],
        shortcut: "/favicon.ico",
        apple: "/favicon.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="container">
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}