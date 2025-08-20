import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from "./components/nav";
import Script from 'next/script';  // <-- import Script

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MyWebsite - Professional Portfolio",
  description: "เว็บไซต์แสดงผลงานมืออาชีพที่สร้างด้วย Next.js และ Bootstrap",
  keywords: "portfolio, web development, design, thailand",
  author: "MyWebsite Team",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0d6efd" />
        <link rel="icon" href="/favicon.ico" />
        {/* Google Fonts: Prompt, Kanit, Inter, Roboto */}
        <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;700&family=Kanit:wght@400;500;700&family=Inter:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main style={{ paddingTop: '76px' }}>
          {children}
        </main>

        {/* ใช้ Next.js Script component */}
        <Script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
