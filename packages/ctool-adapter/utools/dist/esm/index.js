// src/index.ts
import {
  toolExists,
  getTool,
  tools
} from "ctool-config";

// src/storage.ts
var PREFIX = "_system_";
var keyName = (key) => {
  return `${PREFIX}${key}`;
};
var storage = class {
  get(key) {
    return window.utools.dbStorage.getItem(keyName(key)) || "";
  }
  set(key, value) {
    window.utools.dbStorage.setItem(keyName(key), value);
  }
  remove(key) {
    window.utools.dbStorage.removeItem(keyName(key));
  }
  clear() {
    for (let key of this.getAllKey()) {
      this.remove(key);
    }
  }
  getAllKey() {
    return window.utools.db.allDocs(PREFIX).map(({ _id }) => {
      return _id.replace(PREFIX, "");
    });
  }
};
var storage_default = new storage();

// src/index.ts
var $t = (key) => {
  return window["$t"](key);
};
var setFeatures = (items) => {
  try {
    window.utools.setFeature(items);
  } catch (e) {
  }
};
var runtime = new class {
  name = "utools";
  is() {
    return navigator.userAgent.includes("uTools");
  }
  openUrl(url) {
    return window.utools.shellOpenExternal(url);
  }
  storage() {
    return storage_default;
  }
  getLocale() {
    return "zh_CN";
  }
  initialize(initializer) {
    try {
      if (window.utools.getFeatures().length === 0) {
        this.resetFeatures();
      }
    } catch (e) {
    }
    window.utools.onPluginEnter(({ code, type, payload }) => {
      window.utools.showMainWindow();
      if (!code.includes("ctool-")) {
        return;
      }
      const [, _tool, _feature] = code.split("-");
      if (!toolExists(_tool)) {
        return;
      }
      const tool = getTool(_tool);
      if (!tool.existFeature(_feature)) {
        return;
      }
      const feature = tool.getFeature(_feature);
      const query = {};
      if (["over", "regex"].includes(type) && payload !== "") {
        initializer.storage().setNoVersion("_temp_input_storage", payload, 10);
        query["_t"] = `${Math.random()}`;
      }
      if (type === "text" && payload !== "") {
        query.keyword = payload;
      }
      initializer.push(feature.getRouter(), query);
    });
  }
  getFeatures() {
    const result = /* @__PURE__ */ new Map();
    tools.forEach((tool) => {
      tool.features.forEach((feature) => result.set(feature, []));
    });
    window.utools.getFeatures().filter((item) => item.code.includes("ctool-") && item.code.includes("-customize")).forEach((item) => {
      const [, _tool, _feature] = item.code.split("-");
      if (!toolExists(_tool)) {
        return null;
      }
      const tool = getTool(_tool);
      if (!tool.existFeature(_feature)) {
        return null;
      }
      const feature = tool.getFeature(_feature);
      result.set(feature, item.cmds);
    });
    return result;
  }
  resetFeatures() {
    let features = [];
    tools.forEach((tool) => {
      tool.features.forEach((feature) => {
        features.push({
          feature,
          cmds: [
            ...new Set(
              [
                tool.name,
                feature.name,
                tool.isSimple() ? `ctool-${tool.name}` : `ctool-${tool.name}-${feature.name}`,
                $t(`tool_${tool.name}`),
                $t(`tool_${tool.name}_${feature.name}`),
                ...$t(`tool_${tool.name}_${feature.name}_keywords`).split(","),
                `${tool.isSimple() ? "" : $t(`tool_${tool.name}`) + " - "}${$t(`tool_${tool.name}_${feature.name}`)}`
              ].map((item) => item.trim().toLowerCase()).filter((item) => item !== "")
            )
          ]
        });
      });
    });
    this.setFeatures(features);
  }
  setFeatures(features) {
    setFeatures({
      "code": "Ctool",
      "explain": "ctool - \u7A0B\u5E8F\u5F00\u53D1\u5E38\u7528\u5DE5\u5177",
      "cmds": [
        "Ctool"
      ]
    });
    window.utools.getFeatures().forEach((item) => {
      if (item.code.includes("ctool-") && item.code.includes("-customize")) {
        window.utools.removeFeature(item.code);
      }
    });
    features.forEach(({ feature, cmds }) => {
      if (cmds.length > 0) {
        setFeatures({
          "code": `ctool-${feature.getKey()}-customize`,
          "explain": `${feature.tool.isSimple() ? "" : $t(`tool_${feature.tool.name}`) + " - "}${$t(`tool_${feature.tool.name}_${feature.name}`)}`,
          "cmds": cmds
        });
      }
    });
  }
}();
export {
  runtime
};
