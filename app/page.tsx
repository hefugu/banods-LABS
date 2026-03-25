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
                  Discord構築・Bot開発・運営改善を行う
                  <br />
                  開発チーム
                </span>
              </h1>

              <p className="hero-lead">
                配信者・企業・オンラインコミュニティ向けに、
                参加しやすく運営しやすいDiscord環境を設計・構築します。
                構築だけでなく、Bot導入・運営改善・継続保守まで対応します。
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
                4,000人規模コミュニティでのBot運用経験あり。
                初回相談・見積もり無料。
              </p>

              <CTAButtons
                primaryHref="/contact"
                primaryLabel="無料で相談する"
                secondaryHref="/works"
                secondaryLabel="実績を見る"
              />
            </div>

            <div className="stats-grid">
              <div className="stat-card glass">
                <div className="stat-label">何をするか</div>
                <div className="stat-value">Discord × Bot × 運営</div>
                <div className="stat-note">
                  サーバー構築だけで終わらず、
                  導線設計と運営改善まで含めて支援します。
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
                  要件が固まっていない段階でも相談可能。
                  まずは現状と課題を整理します。
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        title="活動実績"
        subtitle=""
      >
        <div className="grid-3">
          <InfoCard
            badge="Community"
            title="4,000人規模コミュニティでのBot運用経験"
            text="規模のあるコミュニティでのBot管理・運用支援経験をもとに、実用性を重視した設計を行います。"
          />
          <InfoCard
            badge="Operations"
            title="Discordサーバー構築・整理"
            text="チャンネル設計、ロール整理、権限調整、参加後導線の改善に対応。"
          />
          <InfoCard
            badge="Development"
            title="Bot設計・調整・自動化"
            text="既存Botの導入だけでなく、要件に応じたカスタム対応や運営フローの自動化も視野に入れます。"
          />
        </div>

        <div style={{ marginTop: 28 }}>
          <Link href="/works" className="btn btn-secondary">
            実績ページを見る
          </Link>
        </div>
      </Section>

      <Section
        title="Banods LABS の強み"
        subtitle=""
      >
        <div className="grid-3">
          <InfoCard
            badge="Design"
            title="Discordに特化した設計"
            text="見た目だけ整ったサーバーではなく、参加者が迷いにくく、運営しやすい構成を重視します。"
          />
          <InfoCard
            badge="Bot Development"
            title="Bot開発に対応"
            text="既存Botの導入・調整だけでなく、要件に応じたカスタムBot開発にも対応します。"
          />
          <InfoCard
            badge="Operations"
            title="運営改善まで視野に入れる"
            text="導線整理、問い合わせ削減、自動化による負担軽減など、運営面も含めて改善します。"
          />
        </div>
      </Section>

      <Section
        title="対応できること"
        subtitle=""
      >
        <div className="grid-2">
          <InfoCard title="Discordサーバー構築">
            <ul className="list">
              <li>チャンネル設計</li>
              <li>ロール・権限設計</li>
              <li>認証導線の整備</li>
              <li>荒らし対策・ルール整備</li>
            </ul>
          </InfoCard>

          <InfoCard title="Bot開発・導入支援">
            <ul className="list">
              <li>認証Bot</li>
              <li>ロール自動付与</li>
              <li>通知・ログ取得</li>
              <li>独自フロー対応Bot</li>
            </ul>
          </InfoCard>

          <InfoCard title="運営改善">
            <ul className="list">
              <li>参加後導線の見直し</li>
              <li>問い合わせ削減</li>
              <li>役職構成の整理</li>
              <li>運営負荷の削減</li>
            </ul>
          </InfoCard>

          <InfoCard title="継続保守">
            <ul className="list">
              <li>構築後の調整</li>
              <li>機能追加</li>
              <li>障害時の確認</li>
              <li>継続改善・月額支援</li>
            </ul>
          </InfoCard>
        </div>
      </Section>

      <Section
        title="まずは無料相談から!"
        subtitle="要件が固まっていなくても問題ありません。新規構築、既存サーバー改善、Bot相談まで対応します。"
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