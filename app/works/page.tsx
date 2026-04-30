import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import Section from "@/components/section";
import { InfoCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "実績 | Discord Bot運用・サーバー構築事例",
  description:
    "Banods LABSのDiscord Bot運用、Discordサーバー構築、権限設計、導線改善、カスタム機能設計の実績を掲載しています。",
};

export default function WorksPage() {
  return (
    <>
      <PageHero
        title="Discord Bot運用・サーバー構築の実績"
        description="公開可能な範囲で、Discordサーバー運用、Bot管理、権限設計、導線改善、カスタム機能設計の対応内容を掲載しています。"
      />

      <Section title="事例">
        <div className="grid-3">
          <InfoCard
            badge="Community"
            title="4,000人規模DiscordコミュニティのBot運用支援"
            text="4,000人規模のDiscordサーバーで、Bot運用、権限管理、通知設定、ロール調整、管理者向け運用補助を行っています。規模のあるコミュニティでの管理・調整経験をもとに、実運用を前提とした提案や改善に対応します。"
          />
          <InfoCard
            badge="Structure"
            title="Discordサーバー構成の見直し"
            text="既存サーバーのチャンネル、ロール、参加後導線、ルール表示、案内導線を整理し、参加者にも運営者にも分かりやすい構成へ再設計できます。"
          />
          <InfoCard
            badge="Automation"
            title="カスタムBot機能の設計・実装"
            text="手動運用の一部をBot化し、通知、ロール付与、問い合わせ導線、ログ管理などの作業負担を削減できます。"
          />
        </div>
      </Section>

      <Section
        title="対応できる改善内容"
        subtitle="単なる見た目の整理ではなく、実際の運営負担を減らすことを重視します。"
      >
        <div className="grid-2">
          <InfoCard
            title="権限・ロール設計"
            text="管理者、モデレーター、一般参加者、認証済みユーザーなど、役割に応じたロールと権限を整理します。"
          />
          <InfoCard
            title="参加後導線の改善"
            text="初参加者が迷わないように、ルール確認、認証、案内、参加先チャンネルまでの流れを整理します。"
          />
          <InfoCard
            title="Bot運用の整理"
            text="複数Botの役割を整理し、重複機能や不要な通知を減らして、管理しやすい状態にします。"
          />
          <InfoCard
            title="運営作業の自動化"
            text="通知、ログ取得、問い合わせ受付、ロール付与など、繰り返し作業をBotで自動化します。"
          />
        </div>
      </Section>
    </>
  );
}