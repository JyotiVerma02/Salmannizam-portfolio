const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

function loadEnv() {
  const envPath = path.join(process.cwd(), ".env.local");

  if (!fs.existsSync(envPath)) {
    throw new Error(".env.local file not found.");
  }

  for (const line of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const index = trimmed.indexOf("=");

    if (index === -1) {
      continue;
    }

    const key = trimmed.slice(0, index).trim();
    const value = trimmed.slice(index + 1).trim();
    process.env[key] = value;
  }
}

async function getPasswordHash() {
  if (process.env.ADMIN_PASSWORD) {
    return bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
  }

  const hash = process.env.ADMIN_PASSWORD_HASH;

  if (!hash) {
    throw new Error("Set ADMIN_PASSWORD or ADMIN_PASSWORD_HASH in .env.local.");
  }

  if (!/^\$2[aby]\$/.test(hash)) {
    throw new Error("ADMIN_PASSWORD_HASH must be a bcrypt hash. Or set ADMIN_PASSWORD to a plain password.");
  }

  return hash;
}

async function seedAdmin() {
  loadEnv();

  const { MONGODB_URI, ADMIN_EMAIL } = process.env;

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is missing in .env.local.");
  }

  if (!ADMIN_EMAIL) {
    throw new Error("ADMIN_EMAIL is required in .env.local.");
  }

  const passwordHash = await getPasswordHash();

  await mongoose.connect(MONGODB_URI, {
    bufferCommands: false,
    serverSelectionTimeoutMS: 5000,
  });

  const admins = mongoose.connection.db.collection("admins");
  const email = ADMIN_EMAIL.toLowerCase().trim();

  const result = await admins.updateOne(
    { email },
    {
      $set: {
        name: "Salman Nizam",
        email,
        password: passwordHash,
        role: "super_admin",
        updatedAt: new Date(),
      },
      $setOnInsert: {
        createdAt: new Date(),
      },
    },
    { upsert: true }
  );

  const action = result.upsertedCount > 0 ? "created" : "updated";
  console.log(`Admin ${action}: ${email}`);
  await mongoose.disconnect();
}

seedAdmin().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
