"use server";

import { headers } from "next/headers";
import { Resend } from "resend";

const MIN_SUBMISSION_MS = 800;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_SUBMISSIONS = 3;
const MAX_NAME_LENGTH = 80;
const MAX_EMAIL_LENGTH = 254;
const MAX_PURPOSE_LENGTH = 160;
const MAX_CONTENT_LENGTH = 5000;

const submissionHistory = new Map<string, number[]>();

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

function getSuccessMessage(): ContactFormState {
  return {
    success: true,
    message: "送信しました。こちらから確認後、返信します。",
  };
}

function getTemporaryFailureMessage(): ContactFormState {
  return {
    success: false,
    message: "現在お問い合わせ送信を一時停止しています。時間をおいて再度お試しください。",
  };
}

function getClientKeyFromForwarded(forwardedFor: string | null): string | null {
  if (!forwardedFor) {
    return null;
  }
  const first = forwardedFor.split(",")[0]?.trim();
  return first || null;
}

async function getClientKey(): Promise<string> {
  const requestHeaders = await headers();
  const forwarded = getClientKeyFromForwarded(
    requestHeaders.get("x-forwarded-for")
  );
  const realIp = requestHeaders.get("x-real-ip")?.trim() || null;
  const userAgent = requestHeaders.get("user-agent")?.trim() || "unknown";
  return `${forwarded ?? realIp ?? "unknown"}:${userAgent}`;
}

function isRateLimited(clientKey: string, now: number): boolean {
  const recent =
    submissionHistory
      .get(clientKey)
      ?.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS) ?? [];

  if (recent.length >= RATE_LIMIT_MAX_SUBMISSIONS) {
    submissionHistory.set(clientKey, recent);
    return true;
  }

  recent.push(now);
  submissionHistory.set(clientKey, recent);
  return false;
}

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const website = getValue(formData, "website");
  const formStartedAt = Number(getValue(formData, "formStartedAt"));
  const name = getValue(formData, "name");
  const email = getValue(formData, "email");
  const purpose = getValue(formData, "purpose");
  const content = getValue(formData, "content");

  if (website) {
    return getSuccessMessage();
  }

  if (!Number.isFinite(formStartedAt)) {
    return {
      success: false,
      message: "フォームを開き直してから再度お試しください。",
    };
  }

  if (Date.now() - formStartedAt < MIN_SUBMISSION_MS) {
    return {
      success: false,
      message: "送信が速すぎます。少し時間をおいて再度お試しください。",
    };
  }

  if (!name || !email || !purpose || !content) {
    return {
      success: false,
      message: "未入力の項目があります。全部埋めてください。",
    };
  }

  if (
    name.length > MAX_NAME_LENGTH ||
    email.length > MAX_EMAIL_LENGTH ||
    purpose.length > MAX_PURPOSE_LENGTH ||
    content.length > MAX_CONTENT_LENGTH
  ) {
    return {
      success: false,
      message: "入力文字数が上限を超えています。内容を短くして再送してください。",
    };
  }

  if (!isValidEmail(email)) {
    return {
      success: false,
      message: "連絡先メールアドレスの形式が不正です。",
    };
  }

  const clientKey = await getClientKey();
  if (isRateLimited(clientKey, Date.now())) {
    return {
      success: false,
      message:
        "短時間での送信回数が上限に達しました。時間をおいて再度お試しください。",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error("Missing contact email configuration.");
    return getTemporaryFailureMessage();
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

    if (result.error) {
      console.error("Resend API error:", result.error);
      return getTemporaryFailureMessage();
    }

    return getSuccessMessage();
  } catch (error) {
    console.error("Unexpected sendContactEmail error:", error);
    return getTemporaryFailureMessage();
  }
}
