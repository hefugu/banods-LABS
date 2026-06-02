import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import Section from "@/components/section";
import { CTAButtons, InfoCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "サービス | Bot・Web・拡張機能・アプリ開発",
  description:
    "Banods LABSの提供サービス一覧です。Discordサーバー構築、Bot開発、Webサイト制作、ブラウザ拡張機能、簡易アプリ・ツール制作、継続保守まで対応します。",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Bot・Web・拡張機能・アプリ開発サービス"
        description="Discord Bot開発、Discordサーバー構築、Webサイト制作、ブラウザ拡張機能、簡易アプリ・ツール制作まで、必要な機能を必要な分だけ制作します。"
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
            text="既存Botの導入・設定から、特定サーバー向けの専用Bot開発まで対応します。通知、ロール付与、問い合わせ導線、ログ管理、自動化などに対応します。"
          />

          <InfoCard
            badge="03"
            title="Webページ制作"
            text="個人サイト、活動紹介ページ、店舗・団体サイト、LP、問い合わせフォーム付きサイトなど、小規模向けのWebページ制作に対応します。"
          />

          <InfoCard
            badge="04"
            title="ブラウザ拡張機能制作"
            text="作業効率化、入力補助、表示改善、ページ上の自動整形、既存サービスの使いやすさ改善など、用途に合わせた拡張機能を制作します。"
          />

          <InfoCard
            badge="05"
            title="簡易アプリ・ツール制作"
            text="データ整理、計算、集計、学校・部活・個人作業向けツール、簡易Webアプリなど、必要な機能に絞った小さなアプリを制作します。"
          />

          <InfoCard
            badge="06"
            title="継続保守・機能追加"
            text="構築後の変更、Bot調整、機能追加、障害確認、Webページ更新、拡張機能の改修などにも継続対応します。"
          />
        </div>
      </Section>

      <Section
        title="Discord / Bot"
        subtitle="Discord運営に必要な構築・Bot・導線改善をまとめて対応します。"
      >
        <div className="grid-3">
          <InfoCard
            title="サーバー設計"
            text="カテゴリ、チャンネル、ロール、権限、認証導線、案内導線を整理します。"
          />
          <InfoCard
            title="Bot導入・設定"
            text="認証Bot、ロール自動付与、通知、ログ取得、モデレーション補助などの導入と設定に対応します。"
          />
          <InfoCard
            title="カスタムBot開発"
            text="そのサーバー専用の運営フローに合わせたBotを制作します。"
          />
        </div>
      </Section>

      <Section
        title="Web制作"
        subtitle="大規模なWeb開発ではなく、必要な情報を伝える小規模サイトやLPを中心に対応します。"
      >
        <div className="grid-3">
          <InfoCard
            title="個人・活動紹介サイト"
            text="ポートフォリオ、活動紹介、団体紹介、クリエイター向けページなどを制作します。"
          />
          <InfoCard
            title="LP / 告知ページ"
            text="イベント、サービス、コミュニティ、企画の案内ページを制作します。"
          />
          <InfoCard
            title="問い合わせフォーム"
            text="メール送信、相談受付、簡易な入力フォーム付きページにも対応します。"
          />
        </div>
      </Section>

      <Section
        title="拡張機能・アプリ"
        subtitle="無料公開できる汎用ツールから、専用カスタム・機能追加まで対応します。"
      >
        <div className="grid-2">
          <InfoCard
            title="ブラウザ拡張機能"
            text="Chrome系ブラウザ向けの作業補助、表示改善、入力補助、ページ操作の効率化などに対応します。"
          />
          <InfoCard
            title="簡易アプリ・ツール"
            text="Webアプリ、データ整理ツール、計算ツール、学校・部活・個人作業向けの小さなアプリ制作に対応します。"
          />
        </div>
      </Section>

      <Section
        title="相談から制作までの流れ"
        subtitle="要件が固まっていなくても、現状を聞いたうえで必要な形に整理します。"
      >
        <div className="grid-3">
          <InfoCard
            badge="Step 1"
            title="相談"
            text="作りたいもの、困っていること、現在の状況を送ってください。"
          />
          <InfoCard
            badge="Step 2"
            title="内容整理・見積もり"
            text="必要な機能、制作範囲、納期、費用感を整理して見積もりを出します。"
          />
          <InfoCard
            badge="Step 3"
            title="制作・納品"
            text="合意した内容に沿って制作し、動作確認後に納品します。必要に応じて保守も対応します。"
          />
        </div>
      </Section>

      <Section
        title="制作相談"
        subtitle="Discord、Bot、Web、拡張機能、アプリなど、まずは作りたいものを送ってください。"
      >
        <CTAButtons
          primaryHref="/contact"
          primaryLabel="無料で相談する"
          secondaryHref="/pricing"
          secondaryLabel="料金を見る"
        />
      </Section>
    </>
  );
}