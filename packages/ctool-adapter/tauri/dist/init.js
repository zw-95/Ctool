"use strict";

// src/init.ts
var import_path = require("path");
var import_ctool_adapter_base = require("ctool-adapter-base");
var import_fs = require("fs");
var tempPath = (0, import_path.join)(__dirname, "web");
(0, import_fs.rmSync)(tempPath, { recursive: true, force: true });
(0, import_fs.mkdirSync)(tempPath);
(0, import_ctool_adapter_base.copyCoreDist)(tempPath);
(0, import_fs.writeFileSync)((0, import_path.join)(tempPath, "index.html"), (0, import_fs.readFileSync)((0, import_path.join)(__dirname, "../index.html")).toString());
var configFilePath = (0, import_path.join)(__dirname, "../src-tauri/tauri.conf.json5");
var iconsPath = (0, import_path.join)(__dirname, "../src-tauri/icons");
var targetPath = (0, import_path.join)(__dirname, "../src-tauri/target");
(0, import_fs.rmSync)(configFilePath, { force: true });
(0, import_fs.rmSync)(iconsPath, { recursive: true, force: true });
(0, import_fs.rmSync)(targetPath, { recursive: true, force: true });
var config = (0, import_fs.readFileSync)((0, import_path.join)(__dirname, "../src-tauri/tauri.conf.template.json5")).toString().replace(new RegExp("##version##", "g"), (0, import_ctool_adapter_base.version)()).replace(new RegExp("##description##", "g"), (0, import_ctool_adapter_base.getRootPackageJson)()["description"]);
(0, import_fs.writeFileSync)(configFilePath, `// \u7A0B\u5E8F\u81EA\u52A8\u751F\u6210 => ./tauri.conf.template.json5
${config}`);
