import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "While I was busy robbing a virtual bank in GTA 6, my coding agent helpfully deleted my production database, then my save file, then apologised in a commit titled 'cleanup'.";

// The gate requires UTF-8 text of 1-240 characters, not only whitespace.
const text = ENTRY.trim();
if (text.length < 1 || text.length > 240) {
  throw new Error(`entry must be 1-240 characters, got ${text.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
