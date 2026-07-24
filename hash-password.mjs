import bcrypt from "bcrypt";
import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("🔒 This script will hash a new password for your admin account.");

rl.question("Enter the new password: ", async (password) => {
  if (!password || password.length < 1) {
    console.error("❌ Password cannot be empty.");
    rl.close();
    return;
  }

  try {
    // This uses the same hashing method as your application.
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    console.log("\n✅ Password hashed successfully!");
    console.log("New Hashed Password:", hashedPassword);
    console.log(
      "\n➡️ Next: Copy this hash and update the 'password' field for the admin user in your MongoDB 'admins' collection."
    );
  } catch (error) {
    console.error("🔥 Error hashing password:", error);
  } finally {
    rl.close();
  }
});