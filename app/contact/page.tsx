import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import Section from "@/components/section";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Discord Bot開発・サーバー構築の問い合わせ",
  description:
    "Discord Bot開発、Discordサーバー構築、既存サーバー改善、Bot導入、運営改善の相談・見積もりを受け付けています。初回相談・見積もりは無料です。",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Discord Bot開発・サーバー構築の問い合わせ"
        description="新規構築、既存サーバーの改善、Bot相談、運営改善まで対応します。要件が固まっていなくても問題ありません。初回相談・見積もりは無料です。"
      />

      <Section
        title="お問い合わせフォーム"
        subtitle="Discordサーバー構築、Bot開発、運営改善について、まずは現状を送ってください。相談段階でも問題ありません。無料で内容を確認し、必要に応じて見積もりを提示します。"
      >
        <ContactForm />
      </Section>
    </>
  );
}