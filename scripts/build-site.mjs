import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");

const staticPaths = [
  "account.html",
  "add.html",
  "assets",
  "data",
  "index.html",
  "library.html",
  "practice.html",
  "src",
  "templates"
];

function jsString(value) {
  return JSON.stringify(value || "");
}

async function copyPath(relativePath) {
  const source = path.join(root, relativePath);
  const target = path.join(dist, relativePath);

  if (!existsSync(source)) {
    return;
  }

  await cp(source, target, { recursive: true });
}

async function writeSupabaseConfig() {
  const url = process.env.SUPABASE_URL || "";
  const key = process.env.SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_ANON_KEY || "";
  const configPath = path.join(dist, "config", "supabase-config.js");

  await mkdir(path.dirname(configPath), { recursive: true });
  await writeFile(
    configPath,
    `window.CARS_SUPABASE_CONFIG = {\n  url: ${jsString(url)},\n  anonKey: ${jsString(key)}\n};\n`
  );
}

await rm(dist, { force: true, recursive: true });
await mkdir(dist, { recursive: true });
await Promise.all(staticPaths.map(copyPath));
await writeSupabaseConfig();

console.log("Built static site in dist/");
