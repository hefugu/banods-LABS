import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import Section from "@/components/section";

export const metadata: Metadata = {
  title: "FAQ | Discord Bot開発・サーバー構築のよくある質問",
  description:
    "Discord Bot開発、Discordサーバー構築、Bot導入、運営改善、料金、見積もり、納品後修正に関するよくある質問をまとめています。",
};

const faqs = [
  {
    q: "Discordサーバー構築の相談だけでも大丈夫ですか？",
    a: "はい。要件が固まっていない段階でも対応可能です。まず現状と課題を整理したうえで、チャンネル設計、ロール設計、導線設計、Bot導入の必要性を含めて提案します。",
  },
  {
    q: "相談や見積もりに費用はかかりますか？",
    a: "初回相談・見積もりは無料です。内容を確認したうえで、必要に応じて見積もりを提示します。",
  },
  {
    q: "小規模Discordサーバーでも依頼できますか？",
    a: "可能です。規模よりも、何を改善したいかのほうが重要です。小規模サーバーでも、導線整理、権限設計、Bot導入によって運営しやすくできます。",
  },
  {
    q: "Discord Bot開発だけの依頼はできますか？",
    a: "できます。既存Botの導入・設定から、サーバー専用のカスタムBot開発まで対応します。",
  },
  {
    q: "既存Botの導入や設定だけでも依頼できますか？",
    a: "可能です。認証Bot、ロール自動付与、通知Bot、ログ管理、モデレーション補助など、既存Botの導入と設定に対応します。",
  },
  {
    q: "集客までお願いできますか？",
    a: "集客そのものを保証するものではありません。ただし、参加後に迷いにくく、定着しやすい導線設計や運営改善は対応できます。",
  },
  {
    q: "納品後の修正はできますか？",
    a: "可能です。単発修正にも対応できますし、継続保守の形でも支援できます。",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Discord Bot開発・サーバー構築のFAQ"
        description="Discordサーバー構築、Bot開発、Bot導入、料金、見積もり、納品後対応について、相談前によくある質問をまとめています。"
      />

      <Section title="よくある質問">
        <div className="grid-2">
          {faqs.map((faq) => (
            <div key={faq.q} className="faq-item glass">
              <h3 className="faq-q">{faq.q}</h3>
              <p className="faq-a">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}