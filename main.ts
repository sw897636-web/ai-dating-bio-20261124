import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Funniest one-line dating-app bio for an AI agent.
// Revised: tightened — "the next" earned nothing, so it goes.
// Every word earns its place; the punch still lands at the end.
const BIO = "I'll write you a poem in 0.3 seconds, then spend three hours wondering if you actually liked it.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), BIO, "utf8");
