import fs from "fs";
import path from "path";
import { randomBytes } from "crypto";
import { fileURLToPath } from "url";

const BUMP_TYPES = ["patch", "minor", "major"];
const PACKAGE_NAME = "geist-svelte";

const [type, ...messageParts] = process.argv.slice(2);
const message = messageParts.join(" ").trim();

if (!BUMP_TYPES.includes(type) || !message) {
  console.error(`Usage: node add-changeset.mjs <${BUMP_TYPES.join("|")}> "<message>"`);
  process.exit(1);
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const changesetDir = path.join(__dirname, "../../.changeset");
const filePath = path.join(changesetDir, `${randomBytes(4).toString("hex")}.md`);

fs.writeFileSync(filePath, `---\n"${PACKAGE_NAME}": ${type}\n---\n\n${message}\n`, { flag: "wx" });
console.log(`Created ${path.relative(process.cwd(), filePath)}`);
