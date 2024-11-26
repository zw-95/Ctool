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

// src/generate/i18n.ts
var import_json5 = __toESM(require("json5"));

// src/generate/fileSystem.ts
var import_path = require("path");
var import_fs = require("fs");
var remove = (path) => {
  if ((0, import_fs.existsSync)(path)) {
    if ((0, import_fs.statSync)(path).isFile()) {
      (0, import_fs.unlinkSync)(path);
      return;
    }
    (0, import_fs.readdirSync)(path).forEach((file) => remove((0, import_path.join)(path, file)));
    (0, import_fs.rmdirSync)(path);
  }
};
var Root = (0, import_path.join)(__dirname, "../../ctool-core");
var fileSystem = class {
  base;
  constructor(base = "/") {
    this.base = (0, import_path.join)(Root, base);
  }
  // 相对路径转绝对路径
  getPath(path) {
    return (0, import_path.join)(this.base, path);
  }
  // 路径是否存在
  exists(path) {
    return (0, import_fs.existsSync)(this.getPath(path));
  }
  // 目录是否存在
  isDir(path) {
    return this.exists(path) && (0, import_fs.statSync)(this.getPath(path)).isDirectory();
  }
  // 文件是否存在
  isFile(path) {
    return this.exists(path) && (0, import_fs.statSync)(this.getPath(path)).isFile();
  }
  // 写入文件
  writeFile(file, content = "") {
    let dir = (0, import_path.dirname)(file);
    if (!this.isDir(dir)) {
      throw new Error(`${dir} dir not found`);
    }
    return (0, import_fs.writeFileSync)(this.getPath(file), content);
  }
  // 读取文件
  readFile(file, encoding = "utf-8") {
    return (0, import_fs.readFileSync)(this.getPath(file), encoding).toString();
  }
  // 读取目录
  readdir(dir, include = "") {
    return (0, import_fs.readdirSync)(this.getPath(dir)).filter((item) => {
      return !include || item.includes(include);
    });
  }
  cpSync(src, dest) {
    (0, import_fs.cpSync)(
      src,
      this.getPath(dest),
      { recursive: true }
    );
  }
  mkdir(dir) {
    if (!this.isDir(dir)) {
      (0, import_fs.mkdirSync)(this.getPath(dir), { recursive: true });
    }
  }
  // 移除文件/目录
  remove(path) {
    remove(this.getPath(path));
  }
};
var getFileSystem = (root = "") => {
  return new fileSystem(root.replace(Root, ""));
};
var fileCoreSrc = getFileSystem("src");
var fileCoreRoot = getFileSystem();
var _buildData = [[], []];
var _buildType = [[], []];
var _buildConfig = {};
var buildData = {
  append(str, description) {
    _buildData[1].push(...[...description !== void 0 ? [`// ${description}`] : [], str]);
  },
  prepend(str, description) {
    _buildData[0].push(...[...description !== void 0 ? [`// ${description}`] : [], str]);
  },
  write() {
    fileCoreSrc.writeFile("buildDataTemp.ts", ["// \u7A0B\u5E8F\u81EA\u52A8\u751F\u6210\u6587\u4EF6\u65E0\u9700\u624B\u52A8\u4FEE\u6539\n", ..._buildData[0], `
`, ..._buildData[1]].join("\n"));
  }
};
var buildType = {
  append(str, description) {
    _buildType[1].push(...[...description !== void 0 ? [`// ${description}`] : [], str]);
  },
  prepend(str, description) {
    _buildType[0].push(...[...description !== void 0 ? [`// ${description}`] : [], str]);
  },
  write() {
    fileCoreSrc.writeFile("buildTypeTemp.d.ts", ["// \u7A0B\u5E8F\u81EA\u52A8\u751F\u6210\u6587\u4EF6\u65E0\u9700\u624B\u52A8\u4FEE\u6539\n", ..._buildType[0], `
`, ..._buildType[1]].join("\n"));
  }
};
var buildAddition = {
  add(name, data) {
    _buildConfig[name] = data;
  },
  write() {
    fileCoreRoot.writeFile("public/ctool.addition.json", JSON.stringify(_buildConfig, null, "	"));
  }
};

// src/generate/i18n.ts
var import_lodash3 = require("lodash");

// src/config.ts
var _tools = {
  hash: {
    feature: ["hash"],
    parent_directory: ""
  },
  aes: {
    feature: ["encrypt", "decrypt"],
    parent_directory: "encrypt"
  },
  des: {
    feature: ["encrypt", "decrypt"],
    parent_directory: "encrypt"
  },
  tripleDes: {
    feature: ["encrypt", "decrypt"],
    parent_directory: "encrypt"
  },
  rc4: {
    feature: ["encrypt", "decrypt"],
    parent_directory: "encrypt"
  },
  rabbit: {
    feature: ["encrypt", "decrypt"],
    parent_directory: "encrypt"
  },
  sm2: {
    feature: ["encrypt", "decrypt", "sign", "verify"],
    parent_directory: "encrypt"
  },
  sm4: {
    feature: ["encrypt", "decrypt"],
    parent_directory: "encrypt"
  },
  rsa: {
    feature: ["encrypt", "decrypt"],
    parent_directory: "encrypt"
  },
  sign: {
    feature: ["sign"],
    parent_directory: ""
  },
  base64: {
    feature: ["encoder", "decoder"],
    parent_directory: ""
  },
  json: {
    feature: ["json"],
    parent_directory: ""
  },
  url: {
    feature: ["encoder", "decoder"],
    parent_directory: ""
  },
  qrCode: {
    feature: ["generate", "parse"],
    parent_directory: ""
  },
  barcode: {
    feature: ["barcode"],
    parent_directory: ""
  },
  pinyin: {
    feature: ["pinyin"],
    parent_directory: ""
  },
  ip: {
    feature: ["ip"],
    parent_directory: ""
  },
  code: {
    feature: ["code", "run"],
    parent_directory: ""
  },
  unicode: {
    feature: ["encoder", "decoder"],
    parent_directory: ""
  },
  radix: {
    feature: ["radix"],
    parent_directory: ""
  },
  regex: {
    feature: ["regex"],
    parent_directory: ""
  },
  randomString: {
    feature: ["randomString"],
    parent_directory: ""
  },
  serialize: {
    feature: ["serialize"],
    parent_directory: ""
  },
  diffs: {
    feature: ["diffs"],
    parent_directory: ""
  },
  crontab: {
    feature: ["crontab"],
    parent_directory: ""
  },
  websocket: {
    feature: ["websocket"],
    parent_directory: ""
  },
  unit: {
    feature: ["unit"],
    parent_directory: ""
  },
  time: {
    feature: ["timestamp", "timezone", "calculator"],
    parent_directory: ""
  },
  uuid: {
    feature: ["uuid"],
    parent_directory: ""
  },
  ascii: {
    feature: ["ascii"],
    parent_directory: ""
  },
  variableConversion: {
    feature: ["variableConversion"],
    parent_directory: ""
  },
  jwt: {
    feature: ["jwt"],
    parent_directory: ""
  },
  hexString: {
    feature: ["stringToHex", "hexToString"],
    parent_directory: ""
  },
  text: {
    feature: ["text"],
    parent_directory: ""
  },
  html: {
    feature: ["html"],
    parent_directory: ""
  },
  binary: {
    feature: ["binary"],
    parent_directory: ""
  },
  arm: {
    feature: ["armToHex", "hexToArm"],
    parent_directory: ""
  },
  bcrypt: {
    feature: ["bcrypt"],
    parent_directory: ""
  },
  ipcalc: {
    feature: ["ipv4", "ipv6"],
    parent_directory: ""
  },
  sqlFillParameter: {
    feature: ["sqlFillParameter"],
    parent_directory: ""
  },
  httpSnippet: {
    feature: ["httpSnippet"],
    parent_directory: ""
  },
  dataValidation: {
    feature: ["bcc", "crc", "lrc"],
    parent_directory: ""
  },
  color: {
    feature: ["color"],
    parent_directory: ""
  },
  hmac: {
    feature: ["hmac"],
    parent_directory: ""
  },
  gzip: {
    feature: ["encoder", "decoder"],
    parent_directory: ""
  },
  urlParse: {
    feature: ["urlParse"],
    parent_directory: ""
  },
  asn1: {
    feature: ["asn1"],
    parent_directory: ""
  },
  dockerCompose: {
    feature: ["dockerCompose"],
    parent_directory: ""
  }
};
var _categoryTool = {
  encryption: ["hash", "hmac", "aes", "des", "tripleDes", "rc4", "rabbit", "sm2", "sm4", "rsa", "sign", "base64", "bcrypt"],
  check: ["sign", "regex", "diffs", "crontab", "bcrypt", "dataValidation"],
  encoder_decoder: ["base64", "url", "unicode", "jwt", "hexString", "html", "gzip", "asn1"],
  conversion: ["json", "pinyin", "radix", "serialize", "unit", "time", "ascii", "variableConversion", "hexString", "arm", "httpSnippet", "color", "urlParse", "dockerCompose"],
  generate: ["qrCode", "barcode", "randomString", "uuid", "binary", "ipcalc", "sqlFillParameter", "httpSnippet"],
  other: ["ip", "code", "websocket", "unit", "text"]
};

// src/tool.ts
var Tool = class {
  _name;
  _parentDirectory = "";
  _features = [];
  _categories = [];
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  get features() {
    return this._features;
  }
  get categories() {
    return this._categories;
  }
  set parentDirectory(dir) {
    this._parentDirectory = dir || "";
  }
  get directory() {
    if (this._parentDirectory === "") {
      return `${this._name}`;
    }
    return `${this._parentDirectory}/${this._name}`;
  }
  get root() {
    return `/tools/${this.directory}`;
  }
  addFeature(feature) {
    this._features.push(feature);
  }
  getFeature(name) {
    return this.features.filter((item) => item.name === name)[0];
  }
  addCategory(category) {
    this._categories.push(category);
  }
  inCategory(name) {
    return this.categories.map((item) => item.name).includes(name);
  }
  firstCategory() {
    return this._categories[0];
  }
  firstFeature() {
    return this._features[0];
  }
  existFeature(name) {
    return this.features.map((item) => item.name).includes(name);
  }
  isSimple() {
    return this.features.length < 2;
  }
};

// src/feature.ts
var import_lodash = require("lodash");
var Feature = class {
  _name;
  _tool;
  constructor(tool, name) {
    this._name = name;
    this._tool = tool;
    this._tool.addFeature(this);
  }
  get name() {
    return this._name;
  }
  get tool() {
    return this._tool;
  }
  getComponentPath() {
    return `${this.tool.root}/${(0, import_lodash.upperFirst)(this.name)}.vue`;
  }
  getRouter() {
    return `/tool/${this.tool.directory}${this.tool.isSimple() ? "" : `/${this.name}`}`;
  }
  getQuery(category = "", other = {}) {
    if (!this.tool.inCategory(category)) {
      category = this.tool.firstCategory().name;
    }
    return {
      category,
      ...other
    };
  }
  getKey() {
    return `${this.tool.name}-${this.name}`;
  }
};

// src/category.ts
var Category = class {
  _name;
  _tools = [];
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  get tools() {
    return this._tools;
  }
  addTool(tool) {
    this._tools.push(tool);
    tool.addCategory(this);
  }
  existTool(name) {
    return this.tools.map((item) => item.name).includes(name);
  }
  firstTool() {
    return this._tools[0];
  }
};
var category_default = Category;

// src/index.ts
var import_lodash2 = require("lodash");
var toolContainer = (0, import_lodash2.mapValues)(_tools, (value, name) => {
  const tool = new Tool(name);
  tool.parentDirectory = value.parent_directory;
  for (let feature of value.feature) {
    new Feature(tool, feature);
  }
  return tool;
});
var categoryContainer = (0, import_lodash2.mapValues)(_categoryTool, (items, name) => {
  const category = new category_default(name);
  for (let item of items) {
    category.addTool(toolContainer[item]);
  }
  return category;
});
var tools = Object.values(toolContainer);
var categories = Object.values(categoryContainer);
var localesReal = ["zh_CN", "en"];
var locales = ["_default", ...localesReal];

// src/generate/i18n.ts
var localLists = [
  { code: "_default", name: "\u9ED8\u8BA4(default)" },
  { code: "en", name: "English" },
  { code: "zh_CN", name: "\u7B80\u4F53\u4E2D\u6587" }
];
var placeholder = (message) => {
  let placeholders = [];
  const result = message.match(new RegExp("{.+?}", "g"));
  if (result !== null) {
    result.forEach((item) => {
      item = item.replace("{", "").replace("}", "");
      if (!placeholders.includes(item)) {
        placeholders.push(item);
      }
    });
  }
  return placeholders;
};
var getLocale = (code) => {
  const globalLocaleDir = `i18n/locales/${code}`;
  if (!fileCoreSrc.isDir(globalLocaleDir)) {
    throw new Error(`\u65E0\u6CD5\u83B7\u53D6\u5168\u5C40\u8BED\u8A00\u5305`);
  }
  let locale = {};
  fileCoreSrc.readdir(globalLocaleDir, ".i18n.json5").forEach((file) => {
    let type = file.replace(".i18n.json5", "");
    let config = import_json5.default.parse(fileCoreSrc.readFile(`${globalLocaleDir}/${file}`));
    if (type === "main") {
      locale[`${type}_locale`] = { message: code };
    }
    Object.keys(config).forEach(function(key) {
      let placeholders = placeholder(config[key]);
      locale[`${type}_${key}`] = {
        message: config[key]
      };
      if (placeholders.length > 0) {
        locale[`${type}_${key}`]["placeholders"] = placeholders;
      }
    });
  });
  tools.forEach((tool) => {
    if (tool.isSimple() && `tool_${tool.name}` in locale) {
      locale[`tool_${tool.name}_${tool.firstFeature().name}`] = (0, import_lodash3.cloneDeep)(locale[`tool_${tool.name}`]);
    }
    tool.features.forEach((feature) => {
      const key = `tool_${tool.name}_${feature.name}_keywords`;
      if (!(key in locale)) {
        locale[key] = { message: "" };
      }
    });
  });
  tools.forEach((tool) => {
    const toolLocaleFile = `${tool.root}/i18n/${code}.json5`;
    if (!fileCoreSrc.isFile(toolLocaleFile)) {
      return;
    }
    let config = import_json5.default.parse(fileCoreSrc.readFile(toolLocaleFile));
    Object.keys(config).forEach((key) => {
      let placeholders = placeholder(config[key]);
      locale[`${tool.name}_${key}`] = {
        message: config[key]
      };
      if (placeholders.length > 0) {
        locale[`${tool.name}_${key}`]["placeholders"] = placeholders;
      }
    });
  });
  return locale;
};
var getAllLocales = () => {
  let locales2 = {
    lists: localLists,
    detail: {
      zh_CN: {},
      en: {}
    }
  };
  localLists.forEach(({ code }) => {
    if (code === "_default") {
      return;
    }
    let locale = getLocale(code);
    if (locale !== null) {
      locales2["detail"][code] = locale;
    }
  });
  checkAllLocales(locales2);
  return locales2;
};
var checkAllLocales = (locales2) => {
  const zhKeys = Object.keys(locales2["detail"]["zh_CN"]);
  const enKeys = Object.keys(locales2["detail"]["en"]);
  const zhDiff = (0, import_lodash3.difference)(zhKeys, enKeys);
  if (zhDiff.length > 0) {
    throw new Error(`\u4E2D/\u82F1\u6587\u8BED\u8A00\u5305\u5B58\u5728\u5DEE\u5F02[key](\u82F1\u6587\u7F3A\u5931):${zhDiff.join(",")}`);
  }
  const enDiff = (0, import_lodash3.difference)(enKeys, zhKeys);
  if (enDiff.length > 0) {
    throw new Error(`\u4E2D/\u82F1\u6587\u8BED\u8A00\u5305\u5B58\u5728\u5DEE\u5F02[key](\u4E2D\u6587\u7F3A\u5931):${enDiff.join(",")}`);
  }
  tools.map((tool) => {
    if (!zhKeys.includes(`tool_${tool.name}`)) {
      throw new Error(`tool_${tool.name} \u8BED\u8A00\u5305\u914D\u7F6E\u4E0D\u5B58\u5728`);
    }
    tool.features.forEach((feature) => {
      if (!zhKeys.includes(`tool_${tool.name}_${feature.name}`)) {
        throw new Error(`tool_${tool.name}_${feature.name} \u8BED\u8A00\u5305\u914D\u7F6E\u4E0D\u5B58\u5728`);
      }
    });
  });
};
var allLocales = getAllLocales();
var buildI18n = () => {
  buildData.prepend(`import {AllLocaleStructure} from "@/types"`);
  buildData.append(`export const locales:AllLocaleStructure = ${JSON.stringify(allLocales, null, 4)}`, "\u8BED\u8A00\u5305");
  const typeLists = Object.keys(allLocales["detail"]["zh_CN"]).map((key) => {
    return `"${key}" // ${allLocales["detail"]["zh_CN"][key].message}`;
  });
  buildType.append(`type I18nLocale = "${localesReal.join(`" | "`)}"`, "\u8BED\u8A00\u5730\u533A\u7C7B\u578B");
  buildType.append(`type I18nKey = ${typeLists.join(`
${" ".repeat(4)} | `)}`, "\u8BED\u8A00key\u7C7B\u578B");
  buildType.append(`declare const $t: (key: I18nKey | string, value?: Record<string, any> | any[], locale?: I18nLocale) => string`);
};

// src/generate/router.ts
var buildRoute = () => {
  const indent = " ".repeat(4);
  const config = tools.map((tool) => {
    return tool.features.map((feature) => {
      const filePath = feature.getComponentPath();
      if (!fileCoreSrc.isFile(filePath)) {
        throw new Error(`\u6587\u4EF6 ${filePath} \u4E0D\u5B58\u5728`);
      }
      return [
        `${indent.repeat(1)}{`,
        `${indent.repeat(2)}tool: "${feature.tool.name}",`,
        `${indent.repeat(2)}feature: "${feature.name}",`,
        `${indent.repeat(2)}component: () => import('@${filePath}')`,
        `${indent.repeat(1)}},`
      ].join("\n");
    }).join("\n");
  }).join("\n");
  buildData.prepend(`import {ToolRouteConfig} from "@/types"`);
  buildData.append(
    `export const toolRoutes: ToolRouteConfig[] = [
${config}
]
`,
    "\u8DEF\u7531\u914D\u7F6E"
  );
};

// src/generate/keyword.ts
var import_pinyin_pro = require("pinyin-pro");
var buildKeywords = () => {
  let keywords = [];
  tools.forEach((tool) => {
    tool.features.forEach((feature) => {
      const keywordItem = {
        name: tool.name,
        feature: feature.name,
        keyword: [],
        search: []
      };
      localesReal.forEach((code) => {
        const locale = allLocales.detail[code];
        const items = [];
        items.push(
          keywordItem.name,
          keywordItem.feature,
          locale[`tool_${keywordItem.name}`].message,
          // 工具名称
          locale[`tool_${keywordItem.name}_${keywordItem.feature}`].message,
          ...locale[`tool_${keywordItem.name}_${keywordItem.feature}_keywords`].message.split(",")
          // 功能关键字
        );
        keywordItem.keyword.push(...items);
        items.push(
          ...locale[`tool_${keywordItem.name}_${keywordItem.feature}_keywords`].message.replaceAll(" ", "").split(",")
          // 功能关键字(移除空格)
        );
        keywordItem.search.push(...items);
        if (code === "zh_CN") {
          items.forEach((item) => {
            if (/[\u4e00-\u9fa5]/.test(item)) {
              keywordItem.search.push(
                (0, import_pinyin_pro.pinyin)(item, { toneType: "none", type: "array", v: true }).join("")
              );
              keywordItem.search.push(
                (0, import_pinyin_pro.pinyin)(item, { pattern: "first", toneType: "none", type: "array", v: true }).join("")
              );
            }
          });
        }
      });
      keywordItem.keyword = [
        ...new Set(keywordItem.keyword.map((item) => item.trim()).filter((item) => item !== ""))
      ];
      keywordItem.search = [
        ...new Set(
          keywordItem.search.map((item) => item.trim()).filter((item) => item !== "").map((item) => item.toLowerCase())
        )
      ];
      keywords.push(keywordItem);
    });
  });
  buildData.prepend(`import {ToolType, FeatureType} from "@/config"`);
  buildData.append(
    `export const toolKeywords:{ name: ToolType, feature: FeatureType, keyword: string[], search: string[] }[] = ${JSON.stringify(
      keywords,
      null,
      4
    )}`,
    "\u5DE5\u5177\u5173\u952E\u5B57"
  );
  buildAddition.add("keywords", keywords);
};

// src/generate/icon/clipboard.ts
var clipboard_default = "M192 0c-41.8 0-77.4 26.7-90.5 64H48C21.5 64 0 85.5 0 112V464c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H282.5C269.4 26.7 233.8 0 192 0zm0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm-80 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z";

// src/generate/icon/close.ts
var close_default = [
  "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
];

// src/generate/icon/common.ts
var common_default = [
  "M910.222222 665.601143H682.666667a17.076954 17.076954 0 0 0-16.61974 13.144911l-0.445784 3.920613v227.555555a17.054093 17.054093 0 0 0 13.156341 16.60831l3.909183 0.457214h227.555555a17.076954 17.076954 0 0 0 16.61974-13.156342l0.445784-3.909182V682.666667a17.076954 17.076954 0 0 0-13.156342-16.61974z m0-96.712254a113.777778 113.777778 0 0 1 113.777778 113.777778v227.555555a113.789208 113.789208 0 0 1-113.777778 113.777778H682.666667a113.789208 113.789208 0 0 1-113.777778-113.777778V682.666667a113.777778 113.777778 0 0 1 113.777778-113.777778z m0-472.176635H682.666667a17.076954 17.076954 0 0 0-16.61974 13.167772l-0.445784 3.920612v227.532695a17.054093 17.054093 0 0 0 13.156341 16.585449l3.909183 0.457214h227.555555a17.076954 17.076954 0 0 0 16.61974-13.156341l0.445784-3.909182V113.777778A17.076954 17.076954 0 0 0 914.131404 97.158038z m0-96.712254a113.777778 113.777778 0 0 1 113.777778 113.777778v227.555555a113.789208 113.789208 0 0 1-113.777778 113.743487H682.666667a113.789208 113.789208 0 0 1-113.777778-113.777778V113.777778A113.777778 113.777778 0 0 1 682.666667 0z m-568.888889 665.601143H113.777778A17.076954 17.076954 0 0 0 97.158038 678.746054l-0.445784 3.920613v227.555555a17.054093 17.054093 0 0 0 13.156342 16.60831l3.909182 0.457214h227.555555a17.076954 17.076954 0 0 0 16.61974-13.156342l0.445784-3.909182V682.666667a17.076954 17.076954 0 0 0-13.156341-16.61974z m0-96.712254a113.777778 113.777778 0 0 1 113.777778 113.777778v227.555555a113.789208 113.789208 0 0 1-113.777778 113.777778H113.777778A113.789208 113.789208 0 0 1 0 910.222222V682.666667a113.777778 113.777778 0 0 1 113.777778-113.777778z m0-472.176635H113.777778A17.076954 17.076954 0 0 0 97.158038 109.880026l-0.445784 3.920612v227.532695a17.054093 17.054093 0 0 0 13.156342 16.585449l3.909182 0.457214h227.555555a17.076954 17.076954 0 0 0 16.61974-13.156341l0.445784-3.909182V113.777778A17.076954 17.076954 0 0 0 345.242516 97.158038z m0-96.712254a113.777778 113.777778 0 0 1 113.777778 113.777778v227.555555a113.789208 113.789208 0 0 1-113.777778 113.743487H113.777778A113.789208 113.789208 0 0 1 0 341.299042V113.777778A113.777778 113.777778 0 0 1 113.777778 0z"
];

// src/generate/icon/copy.ts
var copy_default = "M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z";

// src/generate/icon/empty.ts
var empty_default = [
  "M855.6 427.2H168.5c-12.7 0-24.4 6.9-30.6 18L4.4 684.7C1.5 689.9 0 695.8 0 701.8v287.1c0 19.4 15.7 35.1 35.1 35.1H989c19.4 0 35.1-15.7 35.1-35.1V701.8c0-6-1.5-11.8-4.4-17.1L886.2 445.2c-6.2-11.1-17.9-18-30.6-18zM673.4 695.6c-16.5 0-30.8 11.5-34.3 27.7-12.7 58.5-64.8 102.3-127.2 102.3s-114.5-43.8-127.2-102.3c-3.5-16.1-17.8-27.7-34.3-27.7H119c-26.4 0-43.3-28-31.1-51.4l81.7-155.8c6.1-11.6 18-18.8 31.1-18.8h622.4c13 0 25 7.2 31.1 18.8l81.7 155.8c12.2 23.4-4.7 51.4-31.1 51.4H673.4zM819.9 209.5c-1-1.8-2.1-3.7-3.2-5.5-9.8-16.6-31.1-22.2-47.8-12.6L648.5 261c-17 9.8-22.7 31.6-12.6 48.4 0.9 1.4 1.7 2.9 2.5 4.4 9.5 17 31.2 22.8 48 13L807 257.3c16.7-9.7 22.4-31 12.9-47.8zM375.4 261.1L255 191.6c-16.7-9.6-38-4-47.8 12.6-1.1 1.8-2.1 3.6-3.2 5.5-9.5 16.8-3.8 38.1 12.9 47.8L337.3 327c16.9 9.7 38.6 4 48-13.1 0.8-1.5 1.7-2.9 2.5-4.4 10.2-16.8 4.5-38.6-12.4-48.4zM512 239.3h2.5c19.5 0.3 35.5-15.5 35.5-35.1v-139c0-19.3-15.6-34.9-34.8-35.1h-6.4C489.6 30.3 474 46 474 65.2v139c0 19.5 15.9 35.4 35.5 35.1h2.5z"
];

// src/generate/icon/error.ts
var error_default = "M512 64c126.677333 3.328 232.192 47.146667 316.501333 131.498667C912.853333 279.808 956.672 385.28 960 512c-3.328 126.677333-47.146667 232.192-131.498667 316.501333C744.192 912.853333 638.72 956.672 512 960c-126.677333-3.328-232.192-47.146667-316.501333-131.498667C111.146667 744.192 67.328 638.72 64 512c3.328-126.677333 47.146667-232.192 131.498667-316.501333C279.808 111.146667 385.28 67.328 512 64z m0 394.026667L407.978667 354.005333a37.802667 37.802667 0 0 0-27.477334-11.989333 37.034667 37.034667 0 0 0-27.008 11.52c-7.68 7.637333-11.52 16.64-11.477333 26.965333 0 10.368 4.010667 19.541333 11.989333 27.52L458.026667 512l-104.021334 104.021333a37.802667 37.802667 0 0 0-11.989333 27.477334c0 10.325333 3.84 19.328 11.52 27.008 7.637333 7.68 16.64 11.52 26.965333 11.477333a37.930667 37.930667 0 0 0 27.52-11.989333L512 565.973333l104.021333 104.021334c10.666667 9.984 22.954667 13.184 36.992 9.514666a34.773333 34.773333 0 0 0 26.453334-26.496 37.205333 37.205333 0 0 0-9.472-36.992L565.973333 512l104.021334-104.021333a37.802667 37.802667 0 0 0 11.989333-27.477334 37.034667 37.034667 0 0 0-11.52-27.008 36.778667 36.778667 0 0 0-26.965333-11.477333 37.930667 37.930667 0 0 0-27.52 11.989333L512 458.026667z";

// src/generate/icon/full.ts
var full_default = "M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z";

// src/generate/icon/github.ts
var github_default = "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z";

// src/generate/icon/history.ts
var history_default = "M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z";

// src/generate/icon/info.ts
var info_default = "M553.984 553.984l0-256-84.010667 0 0 256 84.010667 0zM553.984 726.016l0-86.016-84.010667 0 0 86.016 84.010667 0zM512 86.016q176 0 301.013333 125.013333t125.013333 301.013333-125.013333 301.013333-301.013333 125.013333-301.013333-125.013333-125.013333-301.013333 125.013333-301.013333 301.013333-125.013333z";

// src/generate/icon/location.ts
var location_default = "M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128s-128 57.3-128 128zm128 80c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80z";

// src/generate/icon/moon.ts
var moon_default = [
  "M518.8 512.7c0-178.9 116.1-330.9 278.5-389.1-45.6-16.3-94.6-25.7-145.9-25.7C417 97.9 227 283.7 227 512.7c0 229.1 190 414.8 424.5 414.8 51.4 0 100.3-9.4 145.9-25.7-162.5-58.1-278.6-210.1-278.6-389.1z"
];

// src/generate/icon/question.ts
var question_default = [
  "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z"
];

// src/generate/icon/right.ts
var right_default = "M887.254 353.743c-20.511-48.423-49.759-91.872-87.139-129.251s-80.828-66.628-129.251-87.139c-50.123-21.238-103.402-31.918-158.257-31.918s-108.134 10.801-158.257 31.918c-48.423 20.511-91.872 49.759-129.251 87.139-37.379 37.379-66.628 80.828-87.139 129.251-21.238 50.123-31.918 103.402-31.918 158.257s10.801 108.134 31.918 158.257c20.511 48.423 49.759 91.872 87.139 129.251 37.379 37.379 80.828 66.628 129.251 87.139 50.123 21.238 103.402 31.918 158.257 31.918s108.134-10.801 158.257-31.918c48.423-20.511 91.872-49.759 129.251-87.139 37.379-37.379 66.628-80.828 87.139-129.251 21.238-50.123 31.918-103.402 31.918-158.257s-10.801-108.134-31.918-158.257zM740.405 401.923l-280.227 280.227c-11.286 11.286-29.855 11.286-41.142 0l-143.209-143.209c-11.286-11.286-11.286-29.855 0-41.142 11.286-11.286 29.855-11.286 41.142 0l122.576 122.576 259.596-259.596c11.286-11.286 29.855-11.286 41.142 0 11.408 11.286 11.408 29.733 0.122 41.142z";

// src/generate/icon/search.ts
var search_default = [
  "M192 480a256 256 0 1 1 512 0 256 256 0 0 1-512 0m631.776 362.496l-143.2-143.168A318.464 318.464 0 0 0 768 480c0-176.736-143.264-320-320-320S128 303.264 128 480s143.264 320 320 320a318.016 318.016 0 0 0 184.16-58.592l146.336 146.368c12.512 12.48 32.768 12.48 45.28 0 12.48-12.512 12.48-32.768 0-45.28"
];

// src/generate/icon/selected.ts
var selected_default = "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z";

// src/generate/icon/setting.ts
var setting_default = "M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z";

// src/generate/icon/success.ts
var success_default = [
  "M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
];

// src/generate/icon/sun.ts
var sun_default = [
  "M298.7 676.2l-52.3 52.3c-9.6 9.6-9.6 25.3 0 34.9 9.6 9.6 25.3 9.6 34.9 0l52.3-52.3c9.6-9.6 9.6-25.3 0-34.9-9.6-9.6-25.3-9.6-34.9 0z m-15-372.7c9.7 9.7 25.5 9.7 35.2 0 9.7-9.7 9.7-25.5 0-35.2l-52.8-52.8c-9.7-9.7-25.5-9.7-35.2 0-9.7 9.7-9.7 25.5 0 35.2l52.8 52.8z m-69.9 168.8h-74.7c-13.8 0-24.9 11.1-24.9 24.9 0 13.8 11.2 24.9 24.9 24.9h74.7c13.8 0 24.9-11.1 24.9-24.9 0-13.7-11.2-24.9-24.9-24.9z m298.8-249c13.8 0 24.9-11.1 24.9-24.9v-74.7c0-13.8-11.1-24.9-24.9-24.9s-24.9 11.1-24.9 24.9v74.7c0 13.8 11.2 24.9 24.9 24.9z m239.6 69.2l52.3-52.3c9.6-9.6 9.6-25.3 0-34.9-9.6-9.6-25.3-9.6-34.9 0l-52.3 52.3c-9.6 9.6-9.6 25.3 0 34.9 9.6 9.7 25.3 9.7 34.9 0z m133.9 179.8h-74.7c-13.8 0-24.9 11.1-24.9 24.9 0 13.8 11.1 24.9 24.9 24.9h74.7c13.8 0 24.9-11.1 24.9-24.9 0-13.7-11.1-24.9-24.9-24.9zM741.5 690.9c-9.7-9.7-25.5-9.7-35.2 0-9.7 9.7-9.7 25.5 0 35.2l52.8 52.8c9.7 9.7 25.5 9.7 35.2 0 9.7-9.7 9.7-25.5 0-35.2l-52.8-52.8zM512.6 273c-123.9 0-224.3 100.4-224.3 224.3s100.4 224.3 224.3 224.3 224.3-100.4 224.3-224.3S636.5 273 512.6 273z m0 498.1c-13.8 0-24.9 11.1-24.9 24.9v74.7c0 13.8 11.1 24.9 24.9 24.9s24.9-11.1 24.9-24.9V796c0-13.7-11.1-24.9-24.9-24.9z"
];

// src/generate/icon/up.ts
var up_default = [
  "M512 614.656 857.344 960 945.344 872 512 438.656 78.656 872 166.656 959.872Z",
  "M512 240.064 857.344 585.344 945.344 497.344 512 64 78.656 497.344 166.656 585.344Z"
];

// src/generate/icon/upload.ts
var upload_default = "M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z";

// src/generate/icon/message.ts
var message_default = "M892 141.6H134c-37.6 0-68 30.4-68 68v534.5c0 37.6 30.4 68 68 68h109.1l18.5 82c8.6 38 55.1 52.5 83.7 26l117-108H892c37.6 0 68-30.4 68-68V209.6c0-37.5-30.5-68-68-68zM314 507.8c-31.8 0-57.5-25.8-57.5-57.5s25.8-57.5 57.5-57.5c31.8 0 57.5 25.8 57.5 57.5s-25.7 57.5-57.5 57.5z m209.4 4c-31.8 0-57.5-25.8-57.5-57.5s25.8-57.5 57.5-57.5c31.8 0 57.5 25.8 57.5 57.5s-25.7 57.5-57.5 57.5z m209.4 0c-31.8 0-57.5-25.8-57.5-57.5s25.8-57.5 57.5-57.5c31.8 0 57.5 25.8 57.5 57.5s-25.7 57.5-57.5 57.5z";

// src/generate/icon/ad.ts
var ad_default = [
  "M535.6544 110.1824L309.7088 264.96H161.1776C128.7168 264.96 102.4 291.328 102.4 323.7888v376.4736c0 32.4608 26.3168 58.7776 58.7776 58.7776h148.5312l225.9456 154.7776a44.032 44.032 0 0 0 68.864-36.3008V146.4832a44.032 44.032 0 0 0-68.864-36.3008zM699.6992 417.792a25.6 25.6 0 0 0-4.8128 35.8912c10.6496 13.8752 16.2304 30.5664 16.2304 48.128 0 17.664-5.632 34.3552-16.3328 48.2816a25.6 25.6 0 0 0 40.6016 31.232c17.664-22.9376 26.9312-50.432 26.9312-79.4624 0-28.928-9.2672-56.32-26.7264-79.2576a25.6512 25.6512 0 0 0-35.8912-4.8128z",
  "M800.4608 304.5376a25.6 25.6 0 1 0-23.1936 45.6704A169.216 169.216 0 0 1 870.4 501.8112a169.216 169.216 0 0 1-93.0304 151.552 25.5488 25.5488 0 1 0 23.1936 45.6192A220.16 220.16 0 0 0 921.6 501.8112a220.3136 220.3136 0 0 0-121.1392-197.2736z"
];

// src/generate/icon/refresh.ts
var refresh_default = "M688 766.272a301.376 301.376 0 0 1-204.8 54.656c-3.392-0.32-6.72-0.896-10.176-1.344-6.528-0.896-13.056-1.728-19.392-3.008a220.672 220.672 0 0 1-11.648-2.688 261.376 261.376 0 0 1-18.496-4.8c-2.88-0.896-5.76-1.92-8.704-2.944a298.176 298.176 0 0 1-25.28-9.728 292.48 292.48 0 0 1-23.36-11.456l-1.024-0.512a311.744 311.744 0 0 1-89.152-74.432c-1.216-1.472-2.368-3.136-3.584-4.672a311.168 311.168 0 0 1-67.264-193.472h71.168a5.12 5.12 0 0 0 4.544-2.752 4.992 4.992 0 0 0-0.256-5.248L161.088 322.24a5.12 5.12 0 0 0-8.64 0L32.896 503.872c-1.024 1.472-1.216 3.52-0.256 5.248s2.688 2.752 4.544 2.752h71.168c0 86.016 26.496 165.696 71.424 231.552 0.576 0.96 0.96 1.92 1.536 2.816 4.672 6.72 9.856 12.992 14.848 19.392 1.856 2.368 3.648 4.864 5.568 7.232 7.36 9.088 15.168 17.472 23.232 25.856l2.24 2.304a397.888 397.888 0 0 0 122.752 84.8l7.424 3.328c8.512 3.584 17.344 6.72 26.112 9.728 4.16 1.408 8.256 2.88 12.48 4.16 7.744 2.304 15.616 4.224 23.552 6.144 5.312 1.28 10.496 2.624 15.936 3.648 2.176 0.512 4.288 1.152 6.528 1.472 7.488 1.344 14.976 2.112 22.528 3.008l8.064 1.152a397.12 397.12 0 0 0 271.104-71.936 49.408 49.408 0 0 0 11.904-68.224 48.064 48.064 0 0 0-67.584-12.032m227.776-254.4a409.856 409.856 0 0 0-71.104-231.04c-0.704-1.152-1.152-2.304-1.792-3.264a428.928 428.928 0 0 0-17.664-23.04l-2.112-2.752a399.68 399.68 0 0 0-150.656-114.624 161.28 161.28 0 0 1-4.8-2.24 502.976 502.976 0 0 0-28.352-10.56c-3.648-1.152-7.04-2.432-10.624-3.456a377.856 377.856 0 0 0-25.344-6.656c-4.672-1.088-9.408-2.304-14.208-3.264-2.368-0.448-4.544-1.152-6.912-1.6-6.4-1.152-12.8-1.6-19.2-2.432-4.352-0.576-8.768-1.28-13.184-1.728a413.568 413.568 0 0 0-32-1.6c-1.92 0-3.84-0.32-5.824-0.32a397.312 397.312 0 0 0-231.488 73.92 49.408 49.408 0 0 0-11.968 68.288 48.128 48.128 0 0 0 67.584 11.968 302.464 302.464 0 0 1 205.12-54.656l8.128 1.152c7.36 0.832 14.592 1.92 21.696 3.328 3.136 0.576 6.272 1.408 9.344 2.112 6.976 1.6 14.016 3.328 20.8 5.376l6.4 2.24c7.808 2.56 15.424 5.312 22.976 8.512l2.368 1.088c45.12 19.648 84.736 49.92 115.648 87.808l0.576 0.768a311.04 311.04 0 0 1 69.696 196.736h-71.104a5.12 5.12 0 0 0-4.288 8l119.616 181.568a5.12 5.12 0 0 0 8.576 0l119.488-181.568a5.12 5.12 0 1 0-4.288-8h-71.104v-0.064z m0 0";

// src/generate/icon/devtools.ts
var devtools_default = [
  "M955.140191 657.686057L482.322585 376.382253c-17.251919-10.262738-28.340465-2.425236-24.684192 17.409508l100.538811 543.990599c3.666506 19.828604 16.083304 22.576181 27.628244 6.077415 0 0 64.233953-92.081185 116.91478-148.294464l101.060697 150.524248c9.646708 14.33652 29.105898 18.077727 43.275619 8.336876l33.92567-23.452132c14.148231-9.760295 17.830087-29.519314 8.207939-43.884486L788.174482 736.668922c67.536162-27.991518 162.961512-51.606355 162.961512-51.606354 19.460214-4.800329 21.261233-17.116843 4.004197-27.376511z",
  "M491.223303 891.487987H219.679793c-49.051159 0-88.897679-38.494733-88.897679-85.863576v-594.520435c0-47.365774 39.84652-85.924975 88.897679-85.924975v0.057305h583.463612c48.995901 0 88.843444 38.556131 88.843444 85.924975v346.19779h65.833381V211.160257c0-83.677794-69.426209-151.757333-154.681942-151.757332h-583.458495c-85.305875 0-154.672732 68.079538-154.672732 151.757332v594.519412c0 83.625606 69.366857 151.702074 154.672732 151.702074h271.542486v-65.893756z"
];

// src/generate/icon/checked.ts
var checked_default = [
  "M512 773.42464c-144.47488 0-261.45024-116.97536-261.45024-261.42464 0-144.31616 116.97536-261.29024 261.45024-261.29024 144.28544 0 261.25952 116.97536 261.25952 261.29024C773.25952 656.45056 656.28544 773.42464 512 773.42464L512 773.42464zM512 119.97952C295.4752 119.97952 119.85536 295.47392 119.85536 512c0 216.49536 175.61984 392.14464 392.14464 392.14464 216.46464 0 391.9552-175.65056 391.9552-392.14464C903.9552 295.47392 728.46464 119.97952 512 119.97952L512 119.97952zM512 969.42976C259.29472 969.42976 54.57024 764.67968 54.57024 512 54.57024 259.4496 259.29472 54.57024 512 54.57024c252.51968 0 457.42976 204.87936 457.42976 457.42976C969.42976 764.67968 764.51968 969.42976 512 969.42976L512 969.42976zM512 969.42976"
];

// src/generate/icon/unchecked.ts
var unchecked_default = [
  "M512.00512 54.57024c-252.71424 0-457.43488 204.87936-457.43488 457.42464 0 252.67968 204.72064 457.43488 457.43488 457.43488 252.51456 0 457.42464-204.7552 457.42464-457.43488C969.42976 259.4496 764.51968 54.57024 512.00512 54.57024L512.00512 54.57024zM512.00512 904.14976c-216.52992 0-392.13952-175.6544-392.13952-392.15488 0-216.51968 175.6096-392.01536 392.13952-392.01536 216.45952 0 391.9552 175.49568 391.9552 392.01536C903.96032 728.49536 728.46464 904.14976 512.00512 904.14976L512.00512 904.14976zM512.00512 904.14976"
];

// src/generate/icon/toggle.ts
var toggle_default = [
  "M677.888 598.528l-254.464 239.616c-15.872 14.848-38.912 18.944-59.392 11.264-20.48-8.192-33.792-26.624-33.792-47.616V322.56c0-20.992 13.312-39.424 33.792-47.616 6.656-2.56 13.824-4.096 20.992-4.096 14.336 0 28.16 5.12 38.4 15.36l254.464 239.616c10.24 9.728 15.872 23.04 15.872 36.352 0.512 13.824-5.632 26.624-15.872 36.352z"
];

// src/generate/icon/clear.ts
var clear_default = [
  "M479.3 863.6L899.9 443c37.4-37.4 37.4-98.3 0-135.8L716.7 124.1C698.5 106 674.4 96 648.7 96c-25.8 0-50.4 10.8-68.6 29l-455 455c-18.2 18.2-29 42.8-29 68.6 0 25.7 9.9 49.9 28.1 68l183.1 183.2c18.1 18.1 42.2 28.1 67.9 28.1 3 0 5.9-0.1 8.8-0.4v0.1h512c17.7 0 32-14.3 32-32s-14.3-32-32-32H479.3z m-126.8-9L169.4 671.5c-6-6-9.4-14.1-9.4-22.6 0-8.5 3.3-16.6 9.4-22.6l104.9-104.9 228.4 228.4-104.9 104.8c-6 6-14.1 9.4-22.6 9.4-8.6 0-16.6-3.3-22.7-9.4z"
];

// src/generate/icon.ts
var import_svg_path_bounds = __toESM(require("svg-path-bounds"));
var lists = {
  clipboard: clipboard_default,
  close: close_default,
  common: common_default,
  copy: copy_default,
  empty: empty_default,
  error: error_default,
  full: full_default,
  github: github_default,
  history: history_default,
  info: info_default,
  location: location_default,
  moon: moon_default,
  question: question_default,
  right: right_default,
  search: search_default,
  selected: selected_default,
  setting: setting_default,
  success: success_default,
  sun: sun_default,
  up: up_default,
  upload: upload_default,
  message: message_default,
  ad: ad_default,
  devtools: devtools_default,
  refresh: refresh_default,
  checked: checked_default,
  unchecked: unchecked_default,
  toggle: toggle_default,
  clear: clear_default
};
var load = (paths) => {
  if (!Array.isArray(paths)) {
    paths = [paths];
  }
  return JSON.stringify({
    box: (0, import_svg_path_bounds.default)(paths.join(" ")).map((item) => Math.floor(item * 100) / 100),
    data: paths
  });
};
var icons = Object.keys(lists);
var buildIcon = () => {
  buildData.append(`export type iconType = "${icons.join('"\n	|"')}"
export const iconData:{[key in iconType]:{box:number[],data:string[]}} = {
    ${icons.map((item) => {
    return `	"${item}":${load(lists[item])},`;
  }).join("\n")}
}`, "icon");
};

// src/generate.ts
var import_fs2 = require("fs");
var import_path2 = require("path");
buildRoute();
buildI18n();
buildKeywords();
buildIcon();
buildAddition.add("i18n", allLocales);
(0, import_fs2.copyFileSync)((0, import_path2.join)(__dirname, "../../../", "README.md"), (0, import_path2.join)(__dirname, "../../../packages/ctool-core/public", "README.md"));
(0, import_fs2.copyFileSync)((0, import_path2.join)(__dirname, "../../../", "LICENSE"), (0, import_path2.join)(__dirname, "../../../packages/ctool-core/public", "LICENSE"));
buildData.write();
buildType.write();
buildAddition.write();
