// src/index.ts
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
export {
  runtime
};
