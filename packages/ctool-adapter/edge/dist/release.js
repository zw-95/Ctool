"use strict";

// src/release.ts
var import_ctool_adapter_base = require("ctool-adapter-base");
var import_ctool_config = require("ctool-config");
var import_fs = require("fs");
var import_path = require("path");
(async () => {
  const tempPath = (0, import_path.join)(__dirname, "../_temp");
  (0, import_fs.rmSync)(tempPath, { recursive: true, force: true });
  (0, import_fs.mkdirSync)(tempPath);
  (0, import_ctool_adapter_base.copyCoreDist)(tempPath);
  (0, import_fs.cpSync)((0, import_path.join)(__dirname, "../resources"), tempPath, { recursive: true });
  (0, import_ctool_adapter_base.replaceFileContent)((0, import_path.join)(tempPath, "manifest.json"), "##version##", (0, import_ctool_adapter_base.version)());
  const permissions = import_ctool_config.proxy.getManifestPermissions();
  (0, import_ctool_adapter_base.replaceFileContent)(
    (0, import_path.join)(tempPath, "manifest.json"),
    '"##permissions##",',
    permissions.length === 0 ? "" : `"${permissions.join('",\n"')}",
`
  );
  console.info(`edge: ${await (0, import_ctool_adapter_base.release)(tempPath, "edge")}`);
  (0, import_fs.rmSync)(tempPath, { recursive: true, force: true });
})();
