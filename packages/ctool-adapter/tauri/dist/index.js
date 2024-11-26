"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  runtime: () => runtime
});
module.exports = __toCommonJS(src_exports);
var runtime = new class {
  name = "tauri";
  is() {
    return !!window["__TAURI__"];
  }
  openUrl(url) {
    return window.__TAURI__.shell.open(url);
  }
  // 开发工具操作
  toggleDevTools() {
    return window["__TAURI__"].invoke("toggle_dev_tools");
  }
}();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  runtime
});
