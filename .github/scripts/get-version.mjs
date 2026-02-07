import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pkgPath = path.join(__dirname, "../../packages/geist-svelte/package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
console.log(pkg.version);
