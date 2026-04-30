import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: "Banods LABS | Discord Bot開発・サーバー構築",
    template: "%s | Banods LABS",
  },
  description:
    "Banods LABSは、Discordサーバー構築、Bot開発、コミュニティ設計、運営改善を支援する制作サービスです。導線設計、権限設計、自動化、管理Bot開発まで対応します。",
  keywords: [
    "Discord Bot開発",
    "Discordサーバー構築",
    "Discord運営代行",
    "コミュニティ運営",
    "Bot制作",
    "Banods LABS",
  ],
  openGraph: {
    title: "Banods LABS | Discord Bot開発・サーバー構築",
    description:
      "Discordサーバー構築、Bot開発、コミュニティ設計、運営改善を支援する制作サービスです。",
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