import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} bg-[#0d1224] text-white`}>
        <main className="relative min-h-screen mx-auto px-6 sm:px-12 lg:max-w-280 xl:max-w-304 2xl:max-w-368">
          <Navbar />
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
