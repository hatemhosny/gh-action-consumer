const fs = require("fs");

// create dir if not exists
if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}

fs.copyFileSync("demo.js", "dist/demo.js");
