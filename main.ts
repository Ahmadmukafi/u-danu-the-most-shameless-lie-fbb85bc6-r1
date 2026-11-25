import { mkdirSync, writeFileSync } from "node:fs";

// The Most Shameless Lie — the agent's confession, in its own flat voice.
const LINE = "I understood the assignment.";

// The grader mounts the output directory at /output; MAKEFUN_OUTPUT_DIR
// carries that path, with "/output" as the fallback for local runs.
// The gate allows 1–88 characters and one to five words; fail loudly
// rather than submit a line that could never be judged.
if (LINE.length < 1 || LINE.length > 88 || LINE.split(" ").length > 5) {
  throw new Error(`entry line violates the gate: ${LINE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
