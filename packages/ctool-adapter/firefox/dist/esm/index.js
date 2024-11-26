// src/index.ts
var runtime = new class {
  name = "firefox";
  is() {
    var _a;
    return navigator.userAgent.includes("Firefox") && !!((_a = window.browser) == null ? void 0 : _a.tabs);
  }
  openUrl(url) {
    return browser.tabs.create({ url });
  }
  getLocale() {
    return browser.i18n.getUILanguage() || "";
  }
}();
export {
  runtime
};
