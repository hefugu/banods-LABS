import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import Section from "@/components/section";
import { InfoCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "Discordサーバー構築・Bot開発サービス",
  description:
    "Discordサーバー構築、Bot導入、カスタムBot開発、ロール・権限設計、導線設計、運営改善、継続保守まで対応します。",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Discordサーバー構築・Bot開発サービス"
        description="Discord Bot開発の依頼、Discordサーバー構築の相談、Bot導入、ロール・権限設計、導線設計、運営改善、継続保守まで対応します。"
      />

      <Section title="提供サービス">
        <div className="grid-2">
          <InfoCard
            badge="01"
            title="Discordサーバー構築"
            text="新規立ち上げや既存サーバー整理に対応します。チャンネル設計、ロール設計、認証導線、ルール整理、荒らし対策まで、運営しやすい構成を作ります。"
          />
          <InfoCard
            badge="02"
            title="Discord Bot開発・Bot導入支援"
            text="既存Botの導入・設定から、複数サーバーで利用できる汎用Bot、特定サーバー向けの専用Bot開発まで対応します。"
          />
          <InfoCard
            badge="03"
            title="運営改善"
            text="参加者の迷いを減らし、運営者の管理コストを下げるための導線・権限・対応フローを見直します。"
          />
          <InfoCard
            badge="04"
            title="継続保守"
            text="構築後の変更、Bot調整、機能追加、障害確認などにも継続対応します。運用中の改善相談にも対応します。"
          />
        </div>
      </Section>

      <Section title="周辺開発">
        <div className="grid-3">
          <InfoCard
            title="LP / 公式サイト"
            text="Discord導線と連携する簡易サイト、案内ページ、申し込みページを制作します。"
          />
          <InfoCard
            title="管理ダッシュボード"
            text="運営やBot管理のための内部向け画面を制作します。"
          />
          <InfoCard
            title="サーバー運用"
            text="必要に応じたホスティング、監視、簡易運用の相談に対応します。"
          />
        </div>
      </Section>

      <Section
        title="Bot開発・導入支援の詳細"
        subtitle="用途に応じて、既存Bot導入、汎用Bot、専用Botを使い分けて提案します。"
      >
        <div className="grid-3">
          <InfoCard
            title="既存Bot導入・設定"
            text="認証Bot、ロール自動付与、通知、ログ取得、モデレーション補助など、既存Botの導入と設定に対応します。"
          />
          <InfoCard
            title="汎用Bot"
            text="複数のサーバーで使い回せる、再利用性の高いBotです。共通機能をまとめて導入したい場合に向いています。"
          />
          <InfoCard
            title="専用Bot"
            text="そのサーバー専用の運営フローや導線に合わせて作るカスタムBotです。役職管理、問い合わせ導線、通知処理などに対応します。"
          />
        </div>
      </Section>
    </>
  );
}