import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { publicPath } from "@/lib/paths";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Y.URATA | Portfolio",
  description:
    "デザインとテクノロジーで、より良い未来をつくる。Y.URATAのポートフォリオサイト。",
  icons: { icon: publicPath("/icon.svg"), apple: publicPath("/apple-icon.png") },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
