import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Banods LABS | 小規模開発スタジオ",
    template: "%s | Banods LABS",
  },
  description:
    "Banods LABSは、Discord Bot開発、Discordサーバー構築、Webサイト制作、ブラウザ拡張機能、簡易アプリ・ツール制作に対応する小規模開発スタジオです。必要な機能を必要な分だけ、実運用を前提に制作します。",
  keywords: [
    "Discord Bot開発",
    "Discordサーバー構築",
    "Webサイト制作",
    "ブラウザ拡張機能",
    "アプリ制作",
    "小規模開発",
    "Bot制作",
    "Banods LABS",
  ],
  openGraph: {
    title: "Banods LABS | 小規模開発スタジオ",
    description:
      "Discord Bot、Webサイト、ブラウザ拡張機能、簡易アプリ・ツール制作まで対応する小規模開発スタジオです。",
    url: "https://banods-labs.vercel.app/",
    siteName: "Banods LABS",
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "https://banods-labs.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <div className="site-shell">
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}