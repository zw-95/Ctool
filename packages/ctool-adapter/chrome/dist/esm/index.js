// src/index.ts
var runtime = new class {
  name = "chrome";
  is() {
    var _a;
    if (navigator.userAgent.includes("Edg")) {
      return false;
    }
    return navigator.userAgent.includes("Chrome") && !!((_a = window.chrome) == null ? void 0 : _a.tabs);
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
