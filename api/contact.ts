import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Optional: handle preflight
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const receiver = process.env.RECEIVER_EMAIL;
  const sender = process.env.SENDER_EMAIL;

  if (!apiKey || !receiver || !sender) {
    return res.status(500).json({
      error: "Server misconfigured",
      detail: "Missing RESEND_API_KEY / RECEIVER_EMAIL / SENDER_EMAIL",
    });
  }

  try {
    const { name, email, company, message } = req.body ?? {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const resend = new Resend(apiKey);

    const safeName = escapeHtml(String(name));
    const safeEmail = escapeHtml(String(email));
    const safeCompany = escapeHtml(String(company ?? "N/A"));
    const safeMessage = escapeHtml(String(message));

    const { data, error } = await resend.emails.send({
      from: sender,
      to: receiver,
      replyTo: safeEmail, // Resend SDK uses replyTo (camelCase)
      subject: `New Contact Message from ${safeName}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Company:</strong> ${safeCompany}</p>
        <p><strong>Message:</strong><br/>${safeMessage.replaceAll("\n", "<br/>")}</p>
      `,
    });

    if (error) {
      return res.status(500).json({ error: "Email failed to send", detail: error.message });
    }

    return res.json({ success: true, id: data?.id });
  } catch (err: any) {
    return res.status(500).json({ error: "Email failed to send", detail: err?.message });
  }
}
