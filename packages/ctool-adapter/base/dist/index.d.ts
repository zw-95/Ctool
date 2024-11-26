declare const getPath: (path?: string) => string;
declare const getCoreDistPath: () => string;
declare const copyCoreDist: (path: string) => void;
declare const release: (path: string, name: string) => Promise<string>;
declare const replaceFileContent: (path: string, search: string, replace: string) => void;
declare const getRootPackageJson: () => Record<string, any>;
declare const getAdditionData: () => Record<string, any>;
declare const version: () => string;

export { copyCoreDist, getAdditionData, getCoreDistPath, getPath, getRootPackageJson, release, replaceFileContent, version };
