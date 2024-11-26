// src/release.ts
import { copyCoreDist, release, replaceFileContent, version } from "ctool-adapter-base";
import { proxy } from "ctool-config";
import { cpSync, mkdirSync, rmSync } from "fs";
import { join } from "path";
(async () => {
  const tempPath = join(__dirname, "../_temp");
  rmSync(tempPath, { recursive: true, force: true });
  mkdirSync(tempPath);
  copyCoreDist(tempPath);
  cpSync(join(__dirname, "../resources"), tempPath, { recursive: true });
  replaceFileContent(join(tempPath, "manifest.json"), "##version##", version());
  const permissions = proxy.getManifestPermissions();
  replaceFileContent(
    join(tempPath, "manifest.json"),
    '"##permissions##",',
    permissions.length === 0 ? "" : `"${permissions.join('",\n"')}",
`
  );
  console.info(`firefox: ${await release(tempPath, "firefox")}`);
  rmSync(tempPath, { recursive: true, force: true });
})();
