import Link from "next/link";
import Section from "@/components/section";
import { CTAButtons, InfoCard } from "@/components/ui";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-card glass">
              <div className="hero-eyebrow">Banods LABS</div>

              <h1 className="hero-title">
                <span className="gradient-text">
                  Bot・Web・拡張機能・アプリを
                  <br />
                  使える形にする小規模開発スタジオ
                </span>
              </h1>

              <p className="hero-lead">
                Discordサーバー構築、Bot開発、Webサイト制作、
                ブラウザ拡張機能、簡易アプリ・ツール制作まで対応します。
                大きな開発会社に頼むほどではないけれど、
                自分で作るには面倒な部分を、実運用に合わせて形にします。
              </p>

              <p
                style={{
                  color: "var(--text-soft)",
                  marginTop: "-6px",
                  marginBottom: "24px",
                  lineHeight: 1.8,
                  fontSize: "0.98rem",
                }}
              >
                4,000人規模コミュニティでのBot運用経験。
                初回相談・見積もり無料。
              </p>

              <CTAButtons
                primaryHref="/contact"
                primaryLabel="無料で相談する"
                secondaryHref="/services"
                secondaryLabel="サービスを見る"
              />
            </div>

            <div className="stats-grid">
              <div className="stat-card glass">
                <div className="stat-label">対応領域</div>
                <div className="stat-value">Bot × Web × Tools</div>
                <div className="stat-note">
                  Discord Botだけでなく、Webページ、拡張機能、
                  簡易アプリ制作まで対応します。
                </div>
              </div>

              <div className="stat-card glass">
                <div className="stat-label">活動実績</div>
                <div className="stat-value">4,000人規模コミュニティ</div>
                <div className="stat-note">
                  Botの管理・調整・継続運用をもとに、
                  実運用を前提とした提案を行います。
                </div>
              </div>

              <div className="stat-card glass">
                <div className="stat-label">相談しやすさ</div>
                <div className="stat-value">初回相談・見積もり無料</div>
                <div className="stat-note">
                  要件が固まっていない段階でも相談可能です。
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section title="できること" subtitle="">
        <div className="grid-2">
          <InfoCard
            badge="Discord / Bot"
            title="Discord構築・Bot開発"
            text="チャンネル設計、ロール・権限設計、認証導線、Bot導入、カスタムBot開発、運営改善、継続保守まで対応します。"
          />

          <InfoCard
            badge="Web"
            title="Webページ制作"
            text="個人サイト、活動紹介ページ、店舗・団体サイト、LP、問い合わせフォーム付きサイトなど、小規模向けのWeb制作に対応します。"
          />

          <InfoCard
            badge="Extension"
            title="ブラウザ拡張機能"
            text="作業効率化、入力補助、表示改善、既存サービスの使いやすさ改善など、用途に合わせた拡張機能を制作します。"
          />

          <InfoCard
            badge="App / Tool"
            title="簡易アプリ・ツール制作"
            text="データ整理、計算、集計、学校・部活・個人作業向けの簡易Webアプリやツール制作に対応します。"
          />
        </div>

        <div style={{ marginTop: 28 }}>
          <Link href="/services" className="btn btn-secondary">
            サービス一覧を見る
          </Link>
        </div>
      </Section>

      <Section title="Banods LABS の強み" subtitle="">
        <div className="grid-3">
          <InfoCard
            badge="Small"
            title="小規模開発に向いている"
            text="大規模な受託開発ではなく、必要な機能を絞って、まず使える形にすることを重視します。"
          />
          <InfoCard
            badge="Practical"
            title="実運用を前提に作る"
            text="見た目だけでなく、実際に運営・利用するときの導線、管理のしやすさ、修正しやすさを考えて制作します。"
          />
          <InfoCard
            badge="Flexible"
            title="周辺開発まで対応"
            text="Discord、Web、Bot、拡張機能、簡易アプリなど、目的に合わせて必要なものを組み合わせて提案できます。"
          />
        </div>
      </Section>

      <Section title="公開ツール・無料配布" subtitle="">
        <div className="grid-3">
          <InfoCard
            badge="Free Tools"
            title="汎用ツールは無料公開"
            text="誰でも使える汎用的な拡張機能や簡易アプリは、無料配布ツールとして公開していく予定です。"
          />
          <InfoCard
            badge="Custom"
            title="専用カスタムは有料対応"
            text="特定の用途に合わせた機能追加、専用調整、導入支援、保守などは有料で対応します。"
          />
          <InfoCard
            badge="Request"
            title="作ってほしい機能の相談"
            text="既存ツールへの機能追加や、新しいツール制作の相談も受け付けています。"
          />
        </div>

        <div style={{ marginTop: 28 }}>
          <Link href="/tools" className="btn btn-secondary">
            ツール一覧を見る
          </Link>
        </div>
      </Section>

      <Section
        title="まずは無料相談から"
        subtitle="Discord構築、Bot開発、Web制作、拡張機能、簡易アプリ制作まで、要件が固まっていない段階でも相談できます。"
      >
        <CTAButtons
          primaryHref="/contact"
          primaryLabel="無料で問い合わせる"
          secondaryHref="/pricing"
          secondaryLabel="料金を見る"
        />
      </Section>
    </>
  );
}