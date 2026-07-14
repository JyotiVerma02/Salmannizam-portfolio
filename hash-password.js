const bcrypt = require("bcrypt");

(async () => {
  const password = process.argv[2] || "MyPortfolio@2026";
  const hash = await bcrypt.hash(password, 10);

  console.log("Password:", password);
  console.log("Hash:", hash);
})();