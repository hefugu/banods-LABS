import PageHero from "../../components/page-hero";
import Section from "../../components/section";
import ContactForm from "../../components/contact-form";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="問い合わせ"
        description="新規構築、既存サーバーの改善、Bot相談などに対応します。要件が固まっていなくても問題ありません。初回相談・見積もりは無料です。"
      />

      <Section
        title="お問い合わせフォーム"
        subtitle="まずは状況を送ってください。相談段階でも問題ありません。無料で内容を確認し、必要に応じて見積もりを提示します。"
      >
        <ContactForm />
      </Section>
    </>
  );
}