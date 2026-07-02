import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function getTextField(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function parseSmtpPort(value: string | undefined): number {
  const parsed = Number(value ?? "587");
  return Number.isFinite(parsed) ? parsed : 587;
}

function parseSmtpSecure(value: string | undefined, port: number): boolean {
  if (typeof value === "string") {
    return value.toLowerCase() === "true";
  }
  return port === 465;
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const name = getTextField(formData, "name");
  const company = getTextField(formData, "company");
  const website = getTextField(formData, "website");
  const email = getTextField(formData, "email");
  const message = getTextField(formData, "message");
  const service = getTextField(formData, "service");

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields: name, email, message" },
      { status: 400 },
    );
  }

  const host = process.env.MAILJET_SMTP_HOST ?? "in-v3.mailjet.com";
  const port = parseSmtpPort(process.env.MAILJET_SMTP_PORT);
  const secure = parseSmtpSecure(process.env.MAILJET_SMTP_SECURE, port);
  const user = process.env.MAILJET_API_KEY ?? process.env.MAILJET_SMTP_USER;
  const pass = process.env.MAILJET_SECRET_KEY ?? process.env.MAILJET_SMTP_PASS;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  try {
    if (!user || !pass || !from || !to) {
      throw new Error(
        "Missing required Mailjet/API/contact environment variables",
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const subject = `New Contact Request${service ? ` - ${service}` : ""}`;
    const text = [
      "New contact request received.",
      "",
      `Name: ${name}`,
      `Company: ${company || "-"}`,
      `Website: ${website || "-"}`,
      `Email: ${email}`,
      `Service Interest: ${service || "-"}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const result = await transporter.sendMail({
      from,
      to,
      subject,
      text,
      replyTo: email,
    });

    const mailId = typeof result.messageId === "string" ? result.messageId : "";
    const response = typeof result.response === "string" ? result.response : "";

    console.info("[contact] Email accepted by SMTP provider", {
      messageId: mailId,
      response,
      to,
      from,
    });

    return NextResponse.redirect(
      new URL("/contact-us?status=success", request.url),
      { status: 303 },
    );
  } catch (error) {
    console.error("[contact] Failed to send email", {
      error,
      host,
      port,
      secure,
      from,
      to,
    });

    return NextResponse.redirect(
      new URL("/contact-us?status=error", request.url),
      { status: 303 },
    );
  }
}
