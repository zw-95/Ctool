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
var _common = ["hash", "json", "base64", "url", "time", "qrCode", "pinyin", "ip", "code", "unicode", "text", "randomString", "diffs"];

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
import { upperFirst } from "lodash";
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
    return `${this.tool.root}/${upperFirst(this.name)}.vue`;
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
import { mapValues } from "lodash";

// src/proxy.ts
var domains = [
  "api.jdoodle.com",
  "armconverter.com"
];
var proxy_default = {
  defaultProxyUrl: "https://ctool.dev/api/proxy",
  is(url) {
    if (url !== "") {
      for (let domain of domains) {
        if (url.includes(domain)) {
          return true;
        }
      }
    }
    return false;
  },
  getDomains() {
    return domains;
  },
  // chrome / edge / firefox 浏览器扩展  manifest.json permissions
  getManifestPermissions() {
    return domains.map((domain) => {
      domain = domain.trim();
      const lists = domain.split(".");
      if (lists.length < 2) {
        return "";
      }
      if (lists.length === 2) {
        return [`*.${domain}`, domain];
      }
      return lists.join(".");
    }).flat().filter((str) => str !== "").map((str) => `*://${str}/*`);
  }
};

// src/index.ts
var toolContainer = mapValues(_tools, (value, name) => {
  const tool = new Tool(name);
  tool.parentDirectory = value.parent_directory;
  for (let feature of value.feature) {
    new Feature(tool, feature);
  }
  return tool;
});
var categoryContainer = mapValues(_categoryTool, (items, name) => {
  const category = new category_default(name);
  for (let item of items) {
    category.addTool(toolContainer[item]);
  }
  return category;
});
var tools = Object.values(toolContainer);
var categories = Object.values(categoryContainer);
var commonTool = _common;
var toolExists = (name) => {
  return name !== "" && name in toolContainer;
};
var categoryExists = (name) => {
  return name !== "" && name in categoryContainer;
};
var getTool = (name) => {
  return toolContainer[name];
};
var getCategory = (name) => {
  return categoryContainer[name];
};
var localesReal = ["zh_CN", "en"];
var locales = ["_default", ...localesReal];
var themes = ["light", "dark", "auto"];
export {
  categories,
  categoryExists,
  commonTool,
  getCategory,
  getTool,
  locales,
  localesReal,
  proxy_default as proxy,
  themes,
  toolExists,
  tools
};
