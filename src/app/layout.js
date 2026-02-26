import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "IC Markets",
    description: "Financial market education and research resources.",
    verification: {
        other: {
            "facebook-domain-verification": "ci2ale5hqzg0ojsqe5nszdjutbv2s",
        },
    },
    icons: {
        icon: "favicons/favicon.ico",
        apple: "favicons/apple-touch-icon.png",
        other: [
            {
                rel: "icon",
                url: "favicons/android-chrome-192x192.png",
                sizes: "192x192",
            },
            {
                rel: "icon",
                url: "favicons/android-chrome-512x512.png",
                sizes: "512x512",
            },
        ],
    },
    manifest: "favicons/site.webmanifest",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
