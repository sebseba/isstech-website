import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

// 1) ENV'yi EN BAŞTA yükle
const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";

// Eğer bu dosya backend klasörünün içindeyse:
dotenv.config({ path: `backend/${envFile}` });
// Eğer bu kodu backend klasörünün içinden çalıştırıyorsan, şunu kullan:
// dotenv.config({ path: envFile });

// 2) Sonra app setup
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// 3) Resend'i env yüklendikten sonra oluştur
const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/api/contact", async (req, res) => {
  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.SENDER_EMAIL,
      to: process.env.RECEIVER_EMAIL,
      reply_to: email,
      subject: `New Contact Message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res
        .status(500)
        .json({ error: "Email failed to send", detail: error.message });
    }

    return res.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Email failed to send" });
  }
});

// 4) Listen en sonda
const PORT = process.env.PORT || 6363;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
