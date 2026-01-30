import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

// load server/.env (server runs from project root)
dotenv.config({ path: './server/.env' });

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: process.env.SMTP_USER
    ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    : undefined,
});

app.post('/api/enroll', async (req, res) => {
  const { name, email, phone, course, message } = req.body || {};
  if (!name || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const to = process.env.ENROLL_TO || 'm.salah.azim@gmail.com';
  const subject = `New Enrollment: ${course || 'Course'} - ${name}`;
  const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || ''}\nCourse: ${course || ''}\nMessage:\n${message || ''}`;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to,
      subject,
      text,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error('sendMail error:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// verify transporter and then start server
transporter.verify().then(() => {
  app.listen(PORT, () => console.log(`Enroll server listening on http://localhost:${PORT}`));
}).catch((err) => {
  console.error('SMTP transporter verify failed:', err);
  // still start server so front-end can show errors
  app.listen(PORT, () => console.log(`Enroll server listening on http://localhost:${PORT} (SMTP verify failed)`));
});
