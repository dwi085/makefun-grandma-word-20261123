// One Word From Grandma — make.fun bounty u-0xkianno-one-word-from-grandma-f04bed16
// Writes exactly one word to <output>/entry.txt: the single word
// Grandma would text about AI. No network, no input files, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Grandma's word for AI, chosen in-session: the old-fashioned word she
// would use for any newfangled machine — warm, baffled, and one word.
const WORD = "contraption";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Guard the gate before writing: exactly one word, 1-30 characters,
// no whitespace at all. Fail loudly instead of shipping a bad entry.
if (!/^\S{1,30}$/.test(WORD)) {
  throw new Error(`invalid grandma word: ${JSON.stringify(WORD)}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
