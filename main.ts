import { copyFileSync, mkdirSync, statSync } from "node:fs";

mkdirSync("/output", { recursive: true });
copyFileSync("entry.png", "/output/entry.png");
const src = statSync("entry.png").size;
const dst = statSync("/output/entry.png").size;
if (src !== dst) throw new Error(`entry.png size mismatch: ${src} vs ${dst}`);
console.log(`entry.png copied to /output/entry.png (${dst} bytes, verified)`);
