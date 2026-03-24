import PageHero from "@/components/page-hero";
import Section from "@/components/section";
/*現在フォームを入力して、連絡することはできない*/
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
        <div className="card glass">
          <form className="form-grid">
            <div>
              <label className="label" htmlFor="name">
                お名前 / ハンドルネーム
              </label>
              <input
                id="name"
                className="input"
                type="text"
                placeholder="例: Helo"
              />
            </div>

            <div>
              <label className="label" htmlFor="email">
                連絡先
              </label>
              <input
                id="email"
                className="input"
                type="email"
                placeholder="example@mail.com"
              />
            </div>

            <div>
              <label className="label" htmlFor="purpose">
                サーバーの用途
              </label>
              <input
                id="purpose"
                className="input"
                type="text"
                placeholder="例: 配信者コミュニティ / 企業サポート / オンラインサロン"
              />
            </div>

            <div>
              <label className="label" htmlFor="content">
                相談内容
              </label>
              <textarea
                id="content"
                className="textarea"
                placeholder="現在の状況、困っていること、依頼したい内容、希望納期などを書いてください。"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              無料で相談する
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}