"use server";

import { Resend } from "resend";

export type ContactFormState = {
  success: boolean;
  message: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

function getValue(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = getValue(formData, "name");
  const email = getValue(formData, "email");
  const purpose = getValue(formData, "purpose");
  const content = getValue(formData, "content");

  if (!name || !email || !purpose || !content) {
    return {
      success: false,
      message: "未入力の項目があります。全部埋めてください。",
    };
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      success: false,
      message: "RESEND_API_KEY が未設定です。",
    };
  }

  if (!process.env.CONTACT_TO_EMAIL) {
    return {
      success: false,
      message: "CONTACT_TO_EMAIL が未設定です。",
    };
  }

  if (!process.env.CONTACT_FROM_EMAIL) {
    return {
      success: false,
      message: "CONTACT_FROM_EMAIL が未設定です。",
    };
  }

  try {
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `【Banods LABS 問い合わせ】${purpose} / ${name}`,
      text: [
        "Banods LABS の問い合わせフォームから送信されました。",
        "",
        `名前: ${name}`,
        `連絡先: ${email}`,
        `用途: ${purpose}`,
        "",
        "相談内容:",
        content,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        message: "メール送信に失敗しました。設定を確認してください。",
      };
    }

    return {
      success: true,
      message: "送信しました。こちらから確認後、返信します。",
    };
  } catch (error) {
    console.error("Unexpected error:", error);
    return {
      success: false,
      message: "送信中にエラーが発生しました。",
    };
  }
}