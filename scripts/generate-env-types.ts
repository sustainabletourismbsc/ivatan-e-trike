import fs from "node:fs";
import path from "node:path";

const ROOT_DIRECTORY = process.cwd();
const OUTPUT_FILE = path.join(ROOT_DIRECTORY, ".env.d.ts");

function getEnvFiles() {
  return fs
    .readdirSync(ROOT_DIRECTORY, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isFile() &&
        entry.name.startsWith(".env") &&
        entry.name !== ".env.d.ts",
    )
    .map((entry) => entry.name)
    .sort();
}

function getEnvKeys(fileName: string) {
  const contents = fs.readFileSync(path.join(ROOT_DIRECTORY, fileName), "utf8");
  const keys: string[] = [];

  for (const line of contents.split(/\r?\n/)) {
    const match = line.trim().match(/^(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=/);

    if (match) keys.push(match[1]);
  }

  return keys;
}

const envFiles = getEnvFiles();
const keys = [...new Set(envFiles.flatMap(getEnvKeys))].sort();
const output = [
  "declare global {",
  "  namespace NodeJS {",
  "    interface ProcessEnv {",
  ...keys.map((key) => `      ${key}: string;`),
  "    }",
  "  }",
  "}",
  "",
  "export {};",
  "",
].join("\n");

fs.writeFileSync(OUTPUT_FILE, output);

console.log(`Generated .env.d.ts from ${envFiles.length} env file(s)`);