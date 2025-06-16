import { Geist, Geist_Mono } from "next/font/google";
import "../styles/index.min.css";
import Header from "@/composant/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Eglise saint Pierre",
  description: "Développeur / Intégrateur web by Jv design&tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Header/>
        {children}
      </body>
    </html>
  );
}
