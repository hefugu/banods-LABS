import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import Section from "@/components/section";
import { CTAButtons, InfoCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "ツール | 無料配布・拡張機能・アプリ",
  description:
    "Banods LABSが公開する無料ツール、ブラウザ拡張機能、簡易アプリ、機能追加・カスタム依頼についてのページです。",
};

export default function ToolsPage() {
  return (
    <>
      <PageHero
        title="無料配布ツール・拡張機能・アプリ"
        description="汎用的に使えるブラウザ拡張機能や簡易アプリは無料ツールとして公開していく予定です。専用カスタム、機能追加、導入支援は有料で対応します。"
      />

      <Section title="公開予定のツール">
        <div className="grid-3">
          <InfoCard
            badge="Extension"
            title="ブラウザ拡張機能"
            text="作業効率化、入力補助、ページ表示改善、既存サービスの使いやすさ改善などに使える拡張機能を公開予定です。"
          />

          <InfoCard
            badge="Web App"
            title="簡易Webアプリ"
            text="データ整理、計算、集計、メモ、学校・部活・個人作業向けの小さなWebアプリを公開予定です。"
          />

          <InfoCard
            badge="Utility"
            title="作業補助ツール"
            text="日常作業や運営業務を少し楽にするための軽量ツールを公開予定です。"
          />
        </div>
      </Section>

      <Section
        title="無料と有料の範囲"
        subtitle="無料公開ツールと、専用依頼・カスタム対応は分けて扱います。"
      >
        <div className="grid-2">
          <InfoCard
            title="無料で使えるもの"
            text="公開済みの汎用ツール、簡単なブラウザ拡張機能、個人利用向けの軽量アプリ、試作・サンプル版などは無料で使える形にします。"
          />

          <InfoCard
            title="有料で対応するもの"
            text="専用カスタム、機能追加、デザイン調整、導入支援、管理画面追加、API連携、保守、商用利用向け調整などは有料対応です。"
          />
        </div>
      </Section>

      <Section title="依頼できること">
        <div className="grid-3">
          <InfoCard
            title="既存ツールへの機能追加"
            text="公開済みツールに、特定用途向けの機能を追加します。"
          />

          <InfoCard
            title="専用拡張機能の制作"
            text="特定のWebサービスや作業フローに合わせたブラウザ拡張機能を制作します。"
          />

          <InfoCard
            title="専用アプリ・ツール制作"
            text="個人作業、学校、部活、コミュニティ運営などに合わせた小さなアプリやツールを制作します。"
          />
        </div>
      </Section>

      <Section
        title="現在の公開状況"
        subtitle="公開できるツールが増えたら、このページに順次追加します。"
      >
        <div className="card glass">
          <h3 className="card-title">準備中</h3>
          <p className="card-text">
            現在、公開用ツール一覧を準備中です。
            先に作ってほしい拡張機能やアプリがある場合は、問い合わせフォームから相談できます。
          </p>
        </div>
      </Section>

      <Section
        title="ツール制作・機能追加の相談"
        subtitle="作ってほしい機能、既存作業で面倒なこと、無料ツールへの追加希望などを送ってください。"
      >
        <CTAButtons
          primaryHref="/contact"
          primaryLabel="相談する"
          secondaryHref="/pricing"
          secondaryLabel="料金を見る"
        />
      </Section>
    </>
  );
}