// One Line of Earned Pride — u-mang-one-line-of-earned-pride-a0138557
//
// Writes a single line of text (1-240 characters) to /output/entry.txt.
// The line must carry a quiet, earned moment of pride for a real person
// in a concrete scene: effort the reader can feel, pride that arrives
// by the last word, never asserted or explained.

import { mkdirSync, writeFileSync } from "node:fs";

// The line, chosen against the judge brief (most important first):
// 1. Earned pride: a year of running until his legs gave out.
// 2. Concrete scene, real person: Dani, the hill behind his house, this morning.
// 3. Pride earned inside the line by the effort, never asserted — no "proud",
//    no congratulation, no explanation. The turn in the last clause is the pride.
// 4. Lands in one read: the payoff arrives with the final words.
// 5. Fresh: a hill that looks small, not a trophy, podium or graduation.
const ENTRY =
  "For a year Dani ran up the hill behind his house until his legs gave out; this morning he reached the top without stopping, and for the first time the hill looked small.";

// Gate, mirroring the sealed scorer: UTF-8 text, 1-240 characters, not only
// whitespace, exactly one line.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 240) {
  throw new Error(`Entry is ${chars.length} characters, must be 1-240.`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("Entry must not be only whitespace.");
}
if (ENTRY.includes("\n")) {
  throw new Error("Entry must be a single line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${chars.length} characters to /output/entry.txt`);
