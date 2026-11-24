import { mkdirSync, writeFileSync } from "node:fs";

// One original line: the worst possible advice an AI could give.
// It sounds like a real AI assistant (helpful opener, confident tone)
// and the bad advice is concrete: water + a hot laptop.
const line =
  "Sure! If your laptop overheats, wrap it in a damp towel - the water cools it down and the steam carries the heat away.";

// The bounty allows at most 140 characters. Count Unicode code points
// (not UTF-16 units or bytes) so multi-byte characters count once, and
// fail loudly instead of writing an out-of-range entry.
const codePoints = [...line].length;
if (codePoints < 1 || codePoints > 140) {
  throw new Error(`line must be 1–140 code points, got ${codePoints}`);
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("line must be a single line");
}

// The grader runs `node /bot/main.ts` with MAKEFUN_OUTPUT_DIR=/output
// and a writable /output directory. Keep the fallback for local runs.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
