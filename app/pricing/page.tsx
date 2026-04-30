import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import Section from "@/components/section";

export const metadata: Metadata = {
  title: "Discord Bot開発・サーバー構築の料金",
  description:
    "Discord Bot開発、Discordサーバー構築、Bot導入、運営改善、継続保守の料金目安を掲載しています。初回相談・見積もりは無料です。",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="Discord Bot開発・サーバー構築の料金"
        description="Discordサーバー構築、Bot導入、カスタムBot開発、運営改善、継続保守の料金目安を掲載しています。初回相談・見積もりは無料です。"
      />

      <Section title="料金目安">
        <div className="grid-3">
          <div className="card glass">
            <div className="badge">Light</div>
            <h3 className="card-title">小規模調整</h3>
            <div className="price">¥5,000〜</div>
            <ul className="list">
              <li>Discordサーバーの軽微な設定修正</li>
              <li>既存Botの初期設定</li>
              <li>チャンネル構成整理の一部対応</li>
              <li>ロール・権限設定の簡易調整</li>
            </ul>
          </div>

          <div className="card glass">
            <div className="badge">Standard</div>
            <h3 className="card-title">新規構築・整理</h3>
            <div className="price">¥20,000〜50,000</div>
            <ul className="list">
              <li>Discordサーバー構築</li>
              <li>ロール・権限設計</li>
              <li>参加後の導線整備</li>
              <li>Bot導入支援</li>
              <li>運営しやすい構成への再設計</li>
            </ul>
          </div>

          <div className="card glass">
            <div className="badge">Custom</div>
            <h3 className="card-title">Bot開発・継続保守</h3>
            <div className="price">個別見積もり</div>
            <ul className="list">
              <li>Discord向けカスタムBot開発</li>
              <li>問い合わせ導線や通知処理の自動化</li>
              <li>独自要件への対応</li>
              <li>Bot機能追加・改善</li>
              <li>運用支援</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: 20 }} className="card glass">
          <div className="badge">Management</div>
          <h3 className="card-title">運営管理・継続支援</h3>
          <div className="price">¥10,000〜 / 月</div>
          <ul className="list">
            <li>Discordサーバー設定の調整</li>
            <li>Bot管理・軽微な修正</li>
            <li>導線改善の提案</li>
            <li>継続的な運営支援</li>
            <li>トラブル時の確認・改善相談</li>
          </ul>
        </div>

        <div style={{ marginTop: 28 }} className="card glass">
          <h3 className="card-title">相談・見積もりについて</h3>
          <p className="card-text">
            初回相談・見積もりは無料です。Discordサーバー構築、Bot導入、
            カスタムBot開発、運営改善など、要件が固まっていない段階でも相談可能です。
            内容・規模・納期によって金額は変動するため、
            詳細を確認したうえで見積もりを提示します。
          </p>
        </div>
      </Section>
    </>
  );
}