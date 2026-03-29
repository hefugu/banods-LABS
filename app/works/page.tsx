import PageHero from "@/components/page-hero";
import Section from "@/components/section";
import { InfoCard } from "@/components/ui";

export default function WorksPage() {
  return (
    <>
      <PageHero
        title="実績"
        description="公開可能な範囲で、対応内容や活動実績を掲載しています。"
      />

      <Section
        title="事例">
        <div className="grid-3">
          <InfoCard
            badge="Community"
            title="4,000人規模コミュニティのBot運用支援"
            text="4,000人規模のサーバーでBot運用を行っています。規模のあるコミュニティでの管理・調整経験をもとに、実運用を前提とした提案や改善に対応します。"
          />
          <InfoCard
            badge="Structure"
            title="サーバー構成の見直し"
            text="既存サーバーのチャンネル、ロール、参加後導線を整理し、運営しやすい形へ再設計ができます。"
          />
          <InfoCard
            badge="Automation"
            title="カスタム機能の設計・実装"
            text="手動運用の一部をBot化し、作業負担を削減できます。"
          />
        </div>
      </Section>
    </>
  );
}