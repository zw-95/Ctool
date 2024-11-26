// src/init.ts
import { join } from "path";
import { copyCoreDist, version, getRootPackageJson } from "ctool-adapter-base";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "fs";
var tempPath = join(__dirname, "web");
rmSync(tempPath, { recursive: true, force: true });
mkdirSync(tempPath);
copyCoreDist(tempPath);
writeFileSync(join(tempPath, "index.html"), readFileSync(join(__dirname, "../index.html")).toString());
var configFilePath = join(__dirname, "../src-tauri/tauri.conf.json5");
var iconsPath = join(__dirname, "../src-tauri/icons");
var targetPath = join(__dirname, "../src-tauri/target");
rmSync(configFilePath, { force: true });
rmSync(iconsPath, { recursive: true, force: true });
rmSync(targetPath, { recursive: true, force: true });
var config = readFileSync(join(__dirname, "../src-tauri/tauri.conf.template.json5")).toString().replace(new RegExp("##version##", "g"), version()).replace(new RegExp("##description##", "g"), getRootPackageJson()["description"]);
writeFileSync(configFilePath, `// \u7A0B\u5E8F\u81EA\u52A8\u751F\u6210 => ./tauri.conf.template.json5
${config}`);
