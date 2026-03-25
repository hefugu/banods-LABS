"use client";

import { useActionState } from "react";
import {
  sendContactEmail,
  type ContactFormState,
} from "../app/contact/actions";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialState
  );

  return (
    <div className="card glass">
      <form action={formAction} className="form-grid">
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
          />
        </div>

        <div>
          <label className="label" htmlFor="email">
            連絡先
          </label>
          <input
            id="email"
            name="email"
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
            name="purpose"
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
            name="content"
            className="textarea"
            placeholder="現在の状況、困っていること、依頼したい内容、希望納期などを書いてください。"
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