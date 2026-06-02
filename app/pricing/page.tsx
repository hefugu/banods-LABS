import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import Section from "@/components/section";
import { CTAButtons } from "@/components/ui";

export const metadata: Metadata = {
  title: "料金 | Bot・Web・拡張機能・アプリ開発",
  description:
    "Discord Bot開発、Discordサーバー構築、Webページ制作、ブラウザ拡張機能、簡易アプリ・ツール制作、継続保守の料金目安を掲載しています。初回相談・見積もりは無料です。",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="料金"
        description="Discordサーバー構築、Bot開発、Webページ制作、ブラウザ拡張機能、簡易アプリ・ツール制作、継続保守の料金目安です。初回相談・見積もりは無料です。"
      />

      <Section title="料金目安">
        <div className="grid-3">
          <div className="card glass">
            <div className="badge">Discord Light</div>
            <h3 className="card-title">Discord小規模調整</h3>
            <div className="price">¥5,000〜</div>
            <ul className="list">
              <li>Discordサーバーの軽微な設定修正</li>
              <li>既存Botの初期設定</li>
              <li>チャンネル構成整理の一部対応</li>
              <li>ロール・権限設定の簡易調整</li>
            </ul>
          </div>

          <div className="card glass">
            <div className="badge">Discord Standard</div>
            <h3 className="card-title">Discord新規構築・整理</h3>
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
            <div className="badge">Bot Custom</div>
            <h3 className="card-title">Bot開発</h3>
            <div className="price">個別見積もり</div>
            <ul className="list">
              <li>Discord向けカスタムBot開発</li>
              <li>問い合わせ導線や通知処理の自動化</li>
              <li>独自要件への対応</li>
              <li>Bot機能追加・改善</li>
              <li>運用支援</li>
            </ul>
          </div>

          <div className="card glass">
            <div className="badge">Web</div>
            <h3 className="card-title">Webページ制作</h3>
            <div className="price">¥10,000〜</div>
            <ul className="list">
              <li>個人サイト・活動紹介ページ</li>
              <li>店舗・団体サイト</li>
              <li>LP・告知ページ</li>
              <li>問い合わせフォーム付きページ</li>
              <li>簡易なSEO・OGP設定</li>
            </ul>
          </div>

          <div className="card glass">
            <div className="badge">Extension</div>
            <h3 className="card-title">ブラウザ拡張機能</h3>
            <div className="price">¥5,000〜</div>
            <ul className="list">
              <li>作業効率化ツール</li>
              <li>入力補助・表示改善</li>
              <li>既存ページの操作補助</li>
              <li>無料配布ツールへの機能追加</li>
              <li>専用カスタム対応</li>
            </ul>
          </div>

          <div className="card glass">
            <div className="badge">App / Tool</div>
            <h3 className="card-title">簡易アプリ・ツール制作</h3>
            <div className="price">¥10,000〜</div>
            <ul className="list">
              <li>簡易Webアプリ</li>
              <li>データ整理・集計ツール</li>
              <li>計算ツール</li>
              <li>学校・部活・個人作業向けツール</li>
              <li>既存ツールへの機能追加</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: 20 }} className="card glass">
          <div className="badge">Free Tools</div>
          <h3 className="card-title">無料配布ツールについて</h3>
          <p className="card-text">
            汎用的に使えるブラウザ拡張機能や簡易アプリは、無料ツールとして公開する場合があります。
            ただし、特定用途に合わせた専用カスタム、機能追加、導入支援、保守、商用利用向け調整は有料対応です。
          </p>
        </div>

        <div style={{ marginTop: 20 }} className="card glass">
          <div className="badge">Management</div>
          <h3 className="card-title">運営管理・継続支援</h3>
          <div className="price">¥10,000〜 / 月</div>
          <ul className="list">
            <li>Discordサーバー設定の調整</li>
            <li>Bot管理・軽微な修正</li>
            <li>Webページ更新</li>
            <li>拡張機能・アプリの軽微な改修</li>
            <li>トラブル時の確認・改善相談</li>
          </ul>
        </div>

        <div style={{ marginTop: 28 }} className="card glass">
          <h3 className="card-title">相談・見積もりについて</h3>
          <p className="card-text">
            初回相談・見積もりは無料です。Discordサーバー構築、Bot開発、
            Webページ制作、ブラウザ拡張機能、簡易アプリ制作など、
            要件が固まっていない段階でも相談可能です。
            内容・規模・納期によって金額は変動するため、
            詳細を確認したうえで見積もりを提示します。
          </p>
        </div>

        <div style={{ marginTop: 28 }}>
          <CTAButtons
            primaryHref="/contact"
            primaryLabel="無料で相談する"
            secondaryHref="/services"
            secondaryLabel="サービスを見る"
          />
        </div>
      </Section>
    </>
  );
}