"use server";

import { Resend } from "resend";

export type ContactFormState = {
  success: boolean;
  message: string;
};

function getValue(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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

  if (!isValidEmail(email)) {
    return {
      success: false,
      message: "連絡先メールアドレスの形式が不正です。",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey) {
    console.error("Missing env: RESEND_API_KEY");
    return {
      success: false,
      message: "RESEND_API_KEY が未設定です。",
    };
  }

  if (!toEmail) {
    console.error("Missing env: CONTACT_TO_EMAIL");
    return {
      success: false,
      message: "CONTACT_TO_EMAIL が未設定です。",
    };
  }

  if (!fromEmail) {
    console.error("Missing env: CONTACT_FROM_EMAIL");
    return {
      success: false,
      message: "CONTACT_FROM_EMAIL が未設定です。",
    };
  }

  try {
    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
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

    console.log("Resend result:", result);

    if (result.error) {
      console.error("Resend API error:", result.error);
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
    console.error("Unexpected sendContactEmail error:", error);
    return {
      success: false,
      message: "送信中にエラーが発生しました。",
    };
  }
}