import loader from "@monaco-editor/loader";
import ContextMenu from "./contextMenu";
import lineInfo from "./lineInfo";
import * as monaco from "monaco-editor";
import "./style.css";
loader.config({ paths: { vs: './monaco' } });
const monacoInstance = () => {
    return loader.__getMonacoInstance();
};
export { loader, ContextMenu, monacoInstance, monaco, lineInfo };
