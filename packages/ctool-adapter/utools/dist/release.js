"use strict";

// src/release.ts
var import_ctool_adapter_base = require("ctool-adapter-base");
var import_ctool_config2 = require("ctool-config");

// src/config.ts
var import_ctool_config = require("ctool-config");
var customCmds = /* @__PURE__ */ new Map();
customCmds.set(
  (0, import_ctool_config.getTool)("time").getFeature("timestamp"),
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
  (0, import_ctool_config.getTool)("qrCode").getFeature("generate"),
  [
    {
      "type": "over",
      "minLength": 10
    }
  ]
);
customCmds.set(
  (0, import_ctool_config.getTool)("ip").firstFeature(),
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
  (0, import_ctool_config.getTool)("unicode").getFeature("decoder"),
  [
    {
      "type": "regex",
      "match": "/\\\\u[0-9a-f]{4}/i",
      "minLength": 6
    }
  ]
);

// src/release.ts
var import_path = require("path");
var import_fs = require("fs");
var tempPath = (0, import_path.join)(__dirname, "../_temp");
(0, import_fs.rmSync)(tempPath, { recursive: true, force: true });
(0, import_fs.mkdirSync)(tempPath);
(0, import_ctool_adapter_base.copyCoreDist)(tempPath);
(0, import_fs.cpSync)((0, import_path.join)(__dirname, "../resources"), tempPath, { recursive: true });
var i18n = (0, import_ctool_adapter_base.getAdditionData)()["i18n"];
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
import_ctool_config2.tools.forEach((tool) => {
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
  (0, import_ctool_adapter_base.replaceFileContent)((0, import_path.join)(tempPath, "plugin.json"), "##version##", (0, import_ctool_adapter_base.version)());
  (0, import_ctool_adapter_base.replaceFileContent)((0, import_path.join)(tempPath, "plugin.json"), '"##features##"', JSON.stringify(utoolsFeature));
  console.info(`utools: ${await (0, import_ctool_adapter_base.release)(tempPath, "utools")}`);
  (0, import_fs.rmSync)(tempPath, { recursive: true, force: true });
})();
