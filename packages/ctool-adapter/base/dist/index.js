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
  copyCoreDist: () => copyCoreDist,
  getAdditionData: () => getAdditionData,
  getCoreDistPath: () => getCoreDistPath,
  getPath: () => getPath,
  getRootPackageJson: () => getRootPackageJson,
  release: () => release,
  replaceFileContent: () => replaceFileContent,
  version: () => version
});
module.exports = __toCommonJS(src_exports);
var import_path = require("path");
var import_fs = require("fs");
var getPath = (path = "") => {
  return (0, import_path.join)(__dirname, "../../../../", path);
};
var getCoreDistPath = () => {
  const path = getPath("packages/ctool-core/dist");
  if (!(0, import_fs.existsSync)(path)) {
    throw new Error(`core dist path "${path}" not found`);
  }
  return path;
};
var copyCoreDist = (path) => {
  if (!(0, import_fs.existsSync)(path)) {
    throw new Error(`"${path}" not found`);
  }
  (0, import_fs.cpSync)(getCoreDistPath(), path, { recursive: true });
};
var getReleasePath = () => {
  const path = getPath("_release");
  if (!(0, import_fs.existsSync)(path)) {
    (0, import_fs.mkdirSync)(path);
  }
  return path;
};
var release = async (path, name) => {
  name = `ctool_${name}`;
  if (!(0, import_fs.existsSync)(path)) {
    throw new Error(`release path "${path}" not found`);
  }
  const isFile = (0, import_fs.statSync)(path).isFile();
  let releaseFile = "";
  if (isFile) {
    releaseFile = (0, import_path.join)(getReleasePath(), name);
    (0, import_fs.copyFileSync)(path, releaseFile);
  } else {
    releaseFile = (0, import_path.join)(getReleasePath(), `${name}.zip`);
    await require("zip-a-folder").zip(path, releaseFile);
  }
  return releaseFile;
};
var replaceFileContent = (path, search, replace) => {
  if (!(0, import_fs.existsSync)(path)) {
    throw new Error(`file "${path}" not found`);
  }
  (0, import_fs.writeFileSync)(path, (0, import_fs.readFileSync)(path).toString().replace(new RegExp(search, "g"), replace));
};
var getRootPackageJson = () => {
  return JSON.parse((0, import_fs.readFileSync)(getPath("package.json")).toString());
};
var getAdditionData = () => {
  return JSON.parse((0, import_fs.readFileSync)(getPath("packages/ctool-core/dist/ctool.addition.json")).toString());
};
var version = () => {
  return getRootPackageJson()["version"] || "";
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  copyCoreDist,
  getAdditionData,
  getCoreDistPath,
  getPath,
  getRootPackageJson,
  release,
  replaceFileContent,
  version
});
