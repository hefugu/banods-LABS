import PageHero from "@/components/page-hero";
import Section from "@/components/section";

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="料金"
        description="価格は目安です。最初から細かく固定しすぎると後で破綻します。今は目安を出しつつ、初回相談・見積もり無料を明記して問い合わせの心理障壁を下げます。"
      />

      <Section
        title="料金目安"
        subtitle="安売り競争には入らない。ただし、入口のハードルは下げる。価格は後から調整していいが、空欄にはするな。"
      >
        <div className="grid-3">
          <div className="card glass">
            <div className="badge">Light</div>
            <h3 className="card-title">小規模調整</h3>
            <div className="price">¥5,000〜</div>
            <ul className="list">
              <li>軽微な設定修正</li>
              <li>Bot初期設定</li>
              <li>構成整理の一部対応</li>
            </ul>
          </div>

          <div className="card glass">
            <div className="badge">Standard</div>
            <h3 className="card-title">新規構築・整理</h3>
            <div className="price">¥20,000〜50,000</div>
            <ul className="list">
              <li>サーバー構築</li>
              <li>ロール・権限設計</li>
              <li>導線整備</li>
              <li>Bot導入支援</li>
            </ul>
          </div>

          <div className="card glass">
            <div className="badge">Custom</div>
            <h3 className="card-title">Bot開発・継続保守</h3>
            <div className="price">個別見積もり</div>
            <ul className="list">
              <li>カスタムBot開発</li>
              <li>独自要件対応</li>
              <li>継続改善</li>
              <li>運用支援</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: 28 }} className="card glass">
          <h3 className="card-title">相談・見積もりについて</h3>
          <p className="card-text">
            初回相談・見積もりは無料です。
            要件が固まっていない段階でも相談可能です。
            内容・規模・納期によって金額は変動するため、
            詳細を確認したうえで見積もりを提示します。
          </p>
        </div>
      </Section>
    </>
  );
}