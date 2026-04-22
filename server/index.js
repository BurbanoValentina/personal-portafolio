import cors from "cors";
import express from "express";
import fs from "node:fs";
import path from "node:path";
import sqlite3 from "sqlite3";

const app = express();
const PORT = Number(process.env.PORT || 8787);

const dataDir = path.resolve(process.cwd(), "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, "contacts.sqlite");
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `);
});

const runStatement = (sql, params = []) =>
  new Promise((resolve, reject) => {
    db.run(sql, params, function onRun(err) {
      if (err) {
        reject(err);
        return;
      }
      resolve(this);
    });
  });

const onlyDigits = /^\d+$/;
const nameRegex = /^[a-zA-ZáéíóúñÁÉÍÓÚÑüÜ\s'-]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validatePayload = (payload) => {
  const normalized = {
    name: String(payload?.name ?? "").trim(),
    email: String(payload?.email ?? "").trim(),
    phone: String(payload?.phone ?? "").trim(),
    subject: String(payload?.subject ?? "").trim(),
    message: String(payload?.message ?? "").trim(),
  };

  if (normalized.name.length < 2 || normalized.name.length > 80 || !nameRegex.test(normalized.name)) {
    return { valid: false, reason: "Invalid name" };
  }

  if (!emailRegex.test(normalized.email) || normalized.email.length > 254) {
    return { valid: false, reason: "Invalid email" };
  }

  if (normalized.phone) {
    if (!onlyDigits.test(normalized.phone)) {
      return { valid: false, reason: "Phone must contain digits only" };
    }
    if (normalized.phone.length < 7 || normalized.phone.length > 15) {
      return { valid: false, reason: "Invalid phone length" };
    }
    if (/^(\d)\1+$/.test(normalized.phone)) {
      return { valid: false, reason: "Phone cannot be repeated digits only" };
    }
  }

  if (normalized.subject.length < 3 || normalized.subject.length > 120) {
    return { valid: false, reason: "Invalid subject" };
  }

  if (normalized.message.length < 10 || normalized.message.length > 2000) {
    return { valid: false, reason: "Invalid message" };
  }

  return { valid: true, data: normalized };
};

app.use(cors({ origin: true }));
app.use(express.json({ limit: "64kb" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  const validation = validatePayload(req.body);

  if (!validation.valid) {
    res.status(400).json({ ok: false, message: validation.reason });
    return;
  }

  try {
    const { name, email, phone, subject, message } = validation.data;
    await runStatement(
      `INSERT INTO contact_messages (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)`,
      [name, email, phone || null, subject, message]
    );

    res.status(201).json({ ok: true, message: "Stored" });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ ok: false, message: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Contact API running on http://localhost:${PORT}`);
  console.log(`SQLite file: ${dbPath}`);
});
