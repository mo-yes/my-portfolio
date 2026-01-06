import "./globals.css";
import {  Poppins } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ToastProvider from "@/components/Providers/ToastProvider";
import ScrollToTop from "@/components/helper/ScrollToTop";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]  });

export const metadata = {
  title: "Mohamed Yasser Portfolio",
  description:
    "This is the portfolio of Mohamed Yasser. I build responsive and modern web interfaces using React and Tailwind CSS.",
      icons: [
    { rel: "icon", url: "/favicon-16x16.png" },
    { rel: "icon", url: "/favicon-32x32.png" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    { rel: "icon", url: "/android-chrome-192x192.png" },
    { rel: "icon", url: "/android-chrome-512x512.png" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#0d1224] text-white`}>
        <ToastProvider />
        <Navbar />
        <main className="relative min-h-screen mx-auto px-6 sm:px-12 pt-28 lg:max-w-280 xl:max-w-304 2xl:max-w-368">
          {children}
          <ScrollToTop />
        </main>
        <Footer/>
      </body>
    </html>
  );
}
