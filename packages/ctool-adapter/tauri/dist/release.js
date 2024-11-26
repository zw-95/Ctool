"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/release.ts
var import_ctool_adapter_base = require("ctool-adapter-base");
var import_path = require("path");
var import_fs = require("fs");
var import_os = __toESM(require("os"));
var platform = ["win32", "darwin"].includes(import_os.default.platform()) ? import_os.default.platform() : "linux";
var getTauriReleaseFile = (dir, name, extension) => {
  const path = (0, import_path.join)(__dirname, "../src-tauri/target/release", dir);
  const files = (0, import_fs.readdirSync)(path).map((item) => (0, import_path.join)(path, item)).filter((item) => {
    return (0, import_fs.statSync)(item).isFile();
  }) || [];
  for (let file of files) {
    const fileInfo = (0, import_path.parse)(file);
    if (fileInfo.name.includes(name) && extension === fileInfo.ext) {
      return file;
    }
  }
  return "";
};
(async () => {
  const files = [];
  const filesPush = (path, name) => {
    if (path === "") {
      return;
    }
    files.push({ path, name: `tauri_${name}` });
  };
  if (platform === "win32") {
    filesPush(getTauriReleaseFile("", "ctool", ".exe"), "win.exe");
    filesPush(getTauriReleaseFile("bundle/msi", "ctool", ".msi"), "win.msi");
  }
  if (platform === "darwin") {
    filesPush(getTauriReleaseFile("bundle/dmg", "ctool", ".dmg"), "mac.dmg");
    const appFile = (0, import_path.join)(__dirname, "../src-tauri/target/release/bundle/macos/ctool.app");
    if ((0, import_fs.existsSync)(appFile)) {
      const appTempDir1 = (0, import_path.join)(__dirname, "../src-tauri/target/release/bundle/macos/ctool");
      const appTempDir2 = (0, import_path.join)(appTempDir1, "ctool.app");
      (0, import_fs.rmSync)(appTempDir1, { recursive: true, force: true });
      (0, import_fs.mkdirSync)(appTempDir2, { recursive: true });
      (0, import_fs.cpSync)(appFile, appTempDir2, { recursive: true });
      filesPush(appTempDir1, "mac_app");
    }
  }
  if (platform === "linux") {
    filesPush(getTauriReleaseFile("bundle/deb", "ctool", ".deb"), "linux.deb");
    filesPush(getTauriReleaseFile("bundle/appimage", "ctool", ".AppImage"), "linux.AppImage");
  }
  for (let file of files) {
    await (0, import_ctool_adapter_base.release)(file.path, file.name);
  }
})();
