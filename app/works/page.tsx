import PageHero from "@/components/page-hero";
import Section from "@/components/section";
import { InfoCard } from "@/components/ui";

export default function WorksPage() {
  return (
    <>
      <PageHero
        title="実績"
        description="公開可能な範囲で掲載しています。案件によっては匿名または概要のみの掲載です。空欄の実績ページは信用を落とすので、最初から仮でも埋めます。"
      />

      <Section
        title="事例"
        subtitle="作ったものではなく、何を改善したかで見せたほうが強いです。"
      >
        <div className="grid-3">
          <InfoCard
            badge="Community"
            title="4,000人規模コミュニティのBot運用支援"
            text="Botの管理、設定調整、継続運用サポートを担当。運営フローに合わせた対応を実施。"
          />
          <InfoCard
            badge="Structure"
            title="サーバー構成の見直し"
            text="既存サーバーのチャンネル、ロール、参加後導線を整理し、運営しやすい形へ再設計。"
          />
          <InfoCard
            badge="Automation"
            title="カスタム機能の設計・実装"
            text="手動運用の一部をBot化し、作業負担を削減。"
          />
        </div>
      </Section>
    </>
  );
}