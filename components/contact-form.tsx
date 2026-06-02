"use client";

import { useActionState, useState } from "react";
import {
  sendContactEmail,
  type ContactFormState,
} from "../app/contact/actions";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [formStartedAt] = useState(() => Date.now().toString());
  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialState
  );

  return (
    <div className="card glass">
      <form action={formAction} className="form-grid">
        <input
          type="hidden"
          name="formStartedAt"
          value={formStartedAt}
        />

        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-9999px",
            width: "1px",
            height: "1px",
            opacity: 0,
            pointerEvents: "none",
          }}
        />

        <div>
          <label className="label" htmlFor="name">
            お名前 / ハンドルネーム
          </label>
          <input
            id="name"
            name="name"
            className="input"
            type="text"
            placeholder="例: Helo"
            required
            maxLength={80}
          />
        </div>

        <div>
          <label className="label" htmlFor="email">
            連絡先メールアドレス
          </label>
          <input
            id="email"
            name="email"
            className="input"
            type="email"
            placeholder="example@mail.com"
            required
            maxLength={254}
          />
        </div>

        <div>
          <label className="label" htmlFor="requestType">
            相談種別
          </label>
          <select
            id="requestType"
            name="requestType"
            className="input"
            required
            defaultValue=""
          >
            <option value="" disabled>
              選択してください
            </option>
            <option value="Discordサーバー構築">
              Discordサーバー構築
            </option>
            <option value="Discord Bot開発・導入">
              Discord Bot開発・導入
            </option>
            <option value="Webページ制作">
              Webページ制作
            </option>
            <option value="ブラウザ拡張機能">
              ブラウザ拡張機能
            </option>
            <option value="簡易アプリ・ツール制作">
              簡易アプリ・ツール制作
            </option>
            <option value="無料配布ツールへの機能追加">
              無料配布ツールへの機能追加
            </option>
            <option value="継続保守・運用相談">
              継続保守・運用相談
            </option>
            <option value="その他">
              その他
            </option>
          </select>
        </div>

        <div>
          <label className="label" htmlFor="purpose">
            用途・目的
          </label>
          <input
            id="purpose"
            name="purpose"
            className="input"
            type="text"
            placeholder="例: 配信者コミュニティ / 企業サポート / 個人サイト / 作業効率化"
            required
            maxLength={160}
          />
        </div>

        <div>
          <label className="label" htmlFor="scale">
            規模・利用人数など 任意
          </label>
          <input
            id="scale"
            name="scale"
            className="input"
            type="text"
            placeholder="例: Discord 300人 / 1ページLP / 個人利用 / 部活内で利用"
            maxLength={160}
          />
        </div>

        <div>
          <label className="label" htmlFor="budget">
            希望予算 任意
          </label>
          <input
            id="budget"
            name="budget"
            className="input"
            type="text"
            placeholder="例: 1万円前後 / 3万円まで / 相談して決めたい"
            maxLength={120}
          />
        </div>

        <div>
          <label className="label" htmlFor="deadline">
            希望納期 任意
          </label>
          <input
            id="deadline"
            name="deadline"
            className="input"
            type="text"
            placeholder="例: 2週間以内 / 文化祭まで / 急ぎではない"
            maxLength={120}
          />
        </div>

        <div>
          <label className="label" htmlFor="referenceUrl">
            参考URL・Discord招待URL 任意
          </label>
          <input
            id="referenceUrl"
            name="referenceUrl"
            className="input"
            type="text"
            placeholder="参考サイト、GitHub、Discord招待URLなど"
            maxLength={500}
          />
        </div>

        <div>
          <label className="label" htmlFor="content">
            相談内容
          </label>
          <textarea
            id="content"
            name="content"
            className="textarea"
            placeholder="現在の状況、困っていること、依頼したい内容、必要な機能などを書いてください。"
            required
            maxLength={5000}
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={isPending}>
          {isPending ? "送信中..." : "無料で相談する"}
        </button>

        {state.message ? (
          <p
            style={{
              margin: 0,
              color: state.success ? "#a8fff2" : "#ffb4c1",
              lineHeight: 1.7,
            }}
          >
            {state.message}
          </p>
        ) : null}
      </form>
    </div>
  );
}