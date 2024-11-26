// src/index.ts
var runtime = new class {
  name = "edge";
  is() {
    var _a;
    return navigator.userAgent.includes("Edg") && !!((_a = window.chrome) == null ? void 0 : _a.tabs);
  }
  openUrl(url) {
    return chrome.tabs.create({ url });
  }
  getLocale() {
    return chrome.i18n.getUILanguage() || "";
  }
}();
export {
  runtime
};
