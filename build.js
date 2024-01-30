const fs = require("fs");

// create dir if not exists
if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}

// copy index.txt
fs.copyFileSync("index.txt", "dist/index.txt");
