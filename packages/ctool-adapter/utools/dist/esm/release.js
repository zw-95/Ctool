// src/release.ts
import { copyCoreDist, release, replaceFileContent, version, getAdditionData } from "ctool-adapter-base";
import { tools } from "ctool-config";

// src/config.ts
import { getTool } from "ctool-config";
var customCmds = /* @__PURE__ */ new Map();
customCmds.set(
  getTool("time").getFeature("timestamp"),
  [
    {
      "type": "regex",
      "match": "/(^\\d{5,}$)|(^\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2}(?:\\.\\d{3})?$)/i",
      "minLength": 5,
      "maxLength": 25
    }
  ]
);
customCmds.set(
  getTool("qrCode").getFeature("generate"),
  [
    {
      "type": "over",
      "minLength": 10
    }
  ]
);
customCmds.set(
  getTool("ip").firstFeature(),
  [
    {
      "type": "over",
      "match": "/\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}/i",
      "minLength": 7,
      "maxLength": 15
    }
  ]
);
customCmds.set(
  getTool("unicode").getFeature("decoder"),
  [
    {
      "type": "regex",
      "match": "/\\\\u[0-9a-f]{4}/i",
      "minLength": 6
    }
  ]
);

// src/release.ts
import { join } from "path";
import { cpSync, mkdirSync, rmSync } from "fs";
var tempPath = join(__dirname, "../_temp");
rmSync(tempPath, { recursive: true, force: true });
mkdirSync(tempPath);
copyCoreDist(tempPath);
cpSync(join(__dirname, "../resources"), tempPath, { recursive: true });
var i18n = getAdditionData()["i18n"];
var getToolTitle = (tool) => {
  var _a;
  return ((_a = i18n.detail.zh_CN[`tool_${tool.name}`]) == null ? void 0 : _a.message) || "";
};
var getToolFeatureTitle = (feature) => {
  var _a;
  return ((_a = i18n.detail.zh_CN[`tool_${feature.tool.name}_${feature.name}`]) == null ? void 0 : _a.message) || "";
};
var utoolsFeature = [{
  "code": "ctool",
  "explain": "\u7A0B\u5E8F\u5F00\u53D1\u5E38\u7528\u5DE5\u5177",
  "cmds": ["ctool", "\u7A0B\u5E8F\u5F00\u53D1\u5E38\u7528\u5DE5\u5177"]
}];
tools.forEach((tool) => {
  tool.features.forEach((feature) => {
    const code = `ctool-${tool.name}-${feature.name}`;
    const explain = `${tool.isSimple() ? "" : getToolTitle(tool) + " - "}${getToolFeatureTitle(feature)}`;
    const cmds = [];
    if (customCmds.has(feature)) {
      cmds.push(...customCmds.get(feature).map((item) => {
        item.label = explain;
        return item;
      }));
    }
    if (cmds.length > 0) {
      utoolsFeature.push({ code, explain, cmds });
    }
  });
});
(async () => {
  replaceFileContent(join(tempPath, "plugin.json"), "##version##", version());
  replaceFileContent(join(tempPath, "plugin.json"), '"##features##"', JSON.stringify(utoolsFeature));
  console.info(`utools: ${await release(tempPath, "utools")}`);
  rmSync(tempPath, { recursive: true, force: true });
})();
