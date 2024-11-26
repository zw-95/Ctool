"use strict";

// src/release.ts
var import_ctool_adapter_base = require("ctool-adapter-base");
var import_fs = require("fs");
var import_path = require("path");
(async () => {
  const tempPath = (0, import_path.join)(__dirname, "../_temp");
  (0, import_fs.rmSync)(tempPath, { recursive: true, force: true });
  (0, import_fs.mkdirSync)(tempPath);
  (0, import_ctool_adapter_base.copyCoreDist)(tempPath);
  console.info(`web: ${await (0, import_ctool_adapter_base.release)(tempPath, "web")}`);
  (0, import_fs.rmSync)(tempPath, { recursive: true, force: true });
})();
