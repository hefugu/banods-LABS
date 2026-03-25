import PageHero from "@/components/page-hero";
import Section from "@/components/section";
import { InfoCard } from "@/components/ui";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="サービス"
        description=""
      />

      <Section
        title="提供サービス">
        <div className="grid-2">
          <InfoCard
            badge="01"
            title="Discordサーバー構築"
            text="新規立ち上げや既存サーバー整理に対応。チャンネル設計、ロール設計、認証導線、ルール整理、荒らし対策まで。"
          />
          <InfoCard
            badge="02"
            title="Bot開発・Bot導入支援"
            text="既存Botの導入・設定から、要件に合わせたカスタムBot開発まで対応。"
          />
          <InfoCard
            badge="03"
            title="運営改善"
            text="参加者の迷いを減らし、運営者の管理コストを下げるための導線・権限・対応フローを見直します。"
          />
          <InfoCard
            badge="04"
            title="継続保守"
            text="構築後の変更、Bot調整、機能追加、障害確認などにも継続対応します。"
          />
        </div>
      </Section>

      <Section
        title="周辺開発"
        subtitle="Web制作、アプリ開発、サーバー運用はオプション扱いにします。主役にすると軸がぼけます。"
      >
        <div className="grid-3">
          <InfoCard
            title="LP / 公式サイト"
            text="Discord導線と連携する簡易サイト、案内ページ、申し込みページ。"
          />
          <InfoCard
            title="管理ダッシュボード"
            text="運営やBot管理のための内部向け画面。"
          />
          <InfoCard
            title="サーバー運用"
            text="必要に応じたホスティング、監視、簡易運用の相談。"
          />
        </div>
      </Section>
    </>
  );
}