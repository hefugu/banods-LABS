import PageHero from "@/components/page-hero";
import Section from "@/components/section";

const faqs = [
  {
    q: "相談だけでも大丈夫ですか？",
    a: "はい。要件が固まっていない段階でも対応可能です。まず現状と課題を整理したうえで提案します。",
  },
  {
    q: "相談や見積もりに費用はかかりますか？",
    a: "初回相談・見積もりは無料です。内容を確認したうえで、必要に応じて見積もりを提示します。",
  },
  {
    q: "小規模サーバーでも依頼できますか？",
    a: "可能です。規模よりも、何を改善したいかのほうが重要です。",
  },
  {
    q: "Botだけの依頼はできますか？",
    a: "できます。既存Botの導入・設定から、独自Bot開発まで対応します。",
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
        title="FAQ"
        description="相談前によくある質問をまとめています。要件が固まっていない段階でも相談可能です。"
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