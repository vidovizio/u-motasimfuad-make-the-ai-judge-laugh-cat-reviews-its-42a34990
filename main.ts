const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const fs = require("fs");
fs.mkdirSync(outDir, { recursive: true });
const entry = "Human occupies heated keyboard 14 hours daily, calls it 'work' — emails lack purr motor, 1/5 would not recommend as nap surface.";
fs.writeFileSync(outDir + "/entry.txt", entry, "utf-8");