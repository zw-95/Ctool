declare const _categories: readonly ["encryption", "conversion", "encoder_decoder", "check", "generate", "other"];
declare let _tools: {
    readonly hash: {
        readonly feature: readonly ["hash"];
        readonly parent_directory: "";
    };
    readonly aes: {
        readonly feature: readonly ["encrypt", "decrypt"];
        readonly parent_directory: "encrypt";
    };
    readonly des: {
        readonly feature: readonly ["encrypt", "decrypt"];
        readonly parent_directory: "encrypt";
    };
    readonly tripleDes: {
        readonly feature: readonly ["encrypt", "decrypt"];
        readonly parent_directory: "encrypt";
    };
    readonly rc4: {
        readonly feature: readonly ["encrypt", "decrypt"];
        readonly parent_directory: "encrypt";
    };
    readonly rabbit: {
        readonly feature: readonly ["encrypt", "decrypt"];
        readonly parent_directory: "encrypt";
    };
    readonly sm2: {
        readonly feature: readonly ["encrypt", "decrypt", "sign", "verify"];
        readonly parent_directory: "encrypt";
    };
    readonly sm4: {
        readonly feature: readonly ["encrypt", "decrypt"];
        readonly parent_directory: "encrypt";
    };
    readonly rsa: {
        readonly feature: readonly ["encrypt", "decrypt"];
        readonly parent_directory: "encrypt";
    };
    readonly sign: {
        readonly feature: readonly ["sign"];
        readonly parent_directory: "";
    };
    readonly base64: {
        readonly feature: readonly ["encoder", "decoder"];
        readonly parent_directory: "";
    };
    readonly json: {
        readonly feature: readonly ["json"];
        readonly parent_directory: "";
    };
    readonly url: {
        readonly feature: readonly ["encoder", "decoder"];
        readonly parent_directory: "";
    };
    readonly qrCode: {
        readonly feature: readonly ["generate", "parse"];
        readonly parent_directory: "";
    };
    readonly barcode: {
        readonly feature: readonly ["barcode"];
        readonly parent_directory: "";
    };
    readonly pinyin: {
        readonly feature: readonly ["pinyin"];
        readonly parent_directory: "";
    };
    readonly ip: {
        readonly feature: readonly ["ip"];
        readonly parent_directory: "";
    };
    readonly code: {
        readonly feature: readonly ["code", "run"];
        readonly parent_directory: "";
    };
    readonly unicode: {
        readonly feature: readonly ["encoder", "decoder"];
        readonly parent_directory: "";
    };
    readonly radix: {
        readonly feature: readonly ["radix"];
        readonly parent_directory: "";
    };
    readonly regex: {
        readonly feature: readonly ["regex"];
        readonly parent_directory: "";
    };
    readonly randomString: {
        readonly feature: readonly ["randomString"];
        readonly parent_directory: "";
    };
    readonly serialize: {
        readonly feature: readonly ["serialize"];
        readonly parent_directory: "";
    };
    readonly diffs: {
        readonly feature: readonly ["diffs"];
        readonly parent_directory: "";
    };
    readonly crontab: {
        readonly feature: readonly ["crontab"];
        readonly parent_directory: "";
    };
    readonly websocket: {
        readonly feature: readonly ["websocket"];
        readonly parent_directory: "";
    };
    readonly unit: {
        readonly feature: readonly ["unit"];
        readonly parent_directory: "";
    };
    readonly time: {
        readonly feature: readonly ["timestamp", "timezone", "calculator"];
        readonly parent_directory: "";
    };
    readonly uuid: {
        readonly feature: readonly ["uuid"];
        readonly parent_directory: "";
    };
    readonly ascii: {
        readonly feature: readonly ["ascii"];
        readonly parent_directory: "";
    };
    readonly variableConversion: {
        readonly feature: readonly ["variableConversion"];
        readonly parent_directory: "";
    };
    readonly jwt: {
        readonly feature: readonly ["jwt"];
        readonly parent_directory: "";
    };
    readonly hexString: {
        readonly feature: readonly ["stringToHex", "hexToString"];
        readonly parent_directory: "";
    };
    readonly text: {
        readonly feature: readonly ["text"];
        readonly parent_directory: "";
    };
    readonly html: {
        readonly feature: readonly ["html"];
        readonly parent_directory: "";
    };
    readonly binary: {
        readonly feature: readonly ["binary"];
        readonly parent_directory: "";
    };
    readonly arm: {
        readonly feature: readonly ["armToHex", "hexToArm"];
        readonly parent_directory: "";
    };
    readonly bcrypt: {
        readonly feature: readonly ["bcrypt"];
        readonly parent_directory: "";
    };
    readonly ipcalc: {
        readonly feature: readonly ["ipv4", "ipv6"];
        readonly parent_directory: "";
    };
    readonly sqlFillParameter: {
        readonly feature: readonly ["sqlFillParameter"];
        readonly parent_directory: "";
    };
    readonly httpSnippet: {
        readonly feature: readonly ["httpSnippet"];
        readonly parent_directory: "";
    };
    readonly dataValidation: {
        readonly feature: readonly ["bcc", "crc", "lrc"];
        readonly parent_directory: "";
    };
    readonly color: {
        readonly feature: readonly ["color"];
        readonly parent_directory: "";
    };
    readonly hmac: {
        readonly feature: readonly ["hmac"];
        readonly parent_directory: "";
    };
    readonly gzip: {
        readonly feature: readonly ["encoder", "decoder"];
        readonly parent_directory: "";
    };
    readonly urlParse: {
        readonly feature: readonly ["urlParse"];
        readonly parent_directory: "";
    };
    readonly asn1: {
        readonly feature: readonly ["asn1"];
        readonly parent_directory: "";
    };
    readonly dockerCompose: {
        readonly feature: readonly ["dockerCompose"];
        readonly parent_directory: "";
    };
};
type ToolType$1 = keyof typeof _tools;
type FeatureType$1<T extends ToolType$1 = ToolType$1> = typeof _tools[T]['feature'][number];
type CategoryType$1 = typeof _categories[number];
interface ToolInterface$1<T extends ToolType$1 = ToolType$1> {
    name: T;
    features: FeatureInterface$1<T>[];
    categories: CategoryInterface$1[];
    directory: string;
    root: string;
    parentDirectory: string;
    addFeature(feature: FeatureInterface$1<T>): void;
    addCategory(category: CategoryInterface$1): void;
    inCategory(name: string): name is CategoryType$1;
    existFeature(name: string): name is FeatureType$1<T>;
    getFeature(name: FeatureType$1<T>): FeatureInterface$1<T>;
    firstCategory(): CategoryInterface$1;
    firstFeature(): FeatureInterface$1<T>;
    isSimple(): boolean;
}
interface CategoryInterface$1<T extends CategoryType$1 = CategoryType$1> {
    name: T;
    tools: ToolInterface$1[];
    existTool(name: string): boolean;
    addTool(tool: ToolInterface$1): void;
    firstTool(): ToolInterface$1;
}
interface FeatureInterface$1<T extends ToolType$1 = ToolType$1> {
    name: FeatureType$1<T>;
    tool: ToolInterface$1<T>;
    getRouter(): string;
    getKey(): string;
    getComponentPath(): string;
    getQuery(category?: string, other?: Record<string, any>): Record<string, any>;
}

declare const _default: {
    defaultProxyUrl: string;
    is(url: string): boolean;
    getDomains(): string[];
    getManifestPermissions(): string[];
};

type ToolType = ToolType$1;
type CategoryType = CategoryType$1;
type FeatureType<T extends ToolType = ToolType> = FeatureType$1<T>;
type ToolInterface<T extends ToolType = ToolType> = ToolInterface$1<T>;
type CategoryInterface<T extends CategoryType = CategoryType> = CategoryInterface$1<T>;
type FeatureInterface<T extends ToolType = ToolType> = FeatureInterface$1<T>;
declare const tools: ToolInterface[];
declare const categories: CategoryInterface[];
declare const commonTool: ("hash" | "sign" | "json" | "barcode" | "pinyin" | "ip" | "code" | "radix" | "regex" | "randomString" | "serialize" | "diffs" | "crontab" | "websocket" | "unit" | "uuid" | "ascii" | "variableConversion" | "jwt" | "text" | "html" | "binary" | "bcrypt" | "sqlFillParameter" | "httpSnippet" | "color" | "hmac" | "urlParse" | "asn1" | "dockerCompose" | "aes" | "des" | "tripleDes" | "rc4" | "rabbit" | "sm2" | "sm4" | "rsa" | "base64" | "url" | "qrCode" | "unicode" | "time" | "hexString" | "arm" | "ipcalc" | "dataValidation" | "gzip")[];
declare const toolExists: (name: string) => name is "hash" | "sign" | "json" | "barcode" | "pinyin" | "ip" | "code" | "radix" | "regex" | "randomString" | "serialize" | "diffs" | "crontab" | "websocket" | "unit" | "uuid" | "ascii" | "variableConversion" | "jwt" | "text" | "html" | "binary" | "bcrypt" | "sqlFillParameter" | "httpSnippet" | "color" | "hmac" | "urlParse" | "asn1" | "dockerCompose" | "aes" | "des" | "tripleDes" | "rc4" | "rabbit" | "sm2" | "sm4" | "rsa" | "base64" | "url" | "qrCode" | "unicode" | "time" | "hexString" | "arm" | "ipcalc" | "dataValidation" | "gzip";
declare const categoryExists: (name: string) => name is "generate" | "encryption" | "conversion" | "encoder_decoder" | "check" | "other";
declare const getTool: <T extends "hash" | "sign" | "json" | "barcode" | "pinyin" | "ip" | "code" | "radix" | "regex" | "randomString" | "serialize" | "diffs" | "crontab" | "websocket" | "unit" | "uuid" | "ascii" | "variableConversion" | "jwt" | "text" | "html" | "binary" | "bcrypt" | "sqlFillParameter" | "httpSnippet" | "color" | "hmac" | "urlParse" | "asn1" | "dockerCompose" | "aes" | "des" | "tripleDes" | "rc4" | "rabbit" | "sm2" | "sm4" | "rsa" | "base64" | "url" | "qrCode" | "unicode" | "time" | "hexString" | "arm" | "ipcalc" | "dataValidation" | "gzip" = "hash" | "sign" | "json" | "barcode" | "pinyin" | "ip" | "code" | "radix" | "regex" | "randomString" | "serialize" | "diffs" | "crontab" | "websocket" | "unit" | "uuid" | "ascii" | "variableConversion" | "jwt" | "text" | "html" | "binary" | "bcrypt" | "sqlFillParameter" | "httpSnippet" | "color" | "hmac" | "urlParse" | "asn1" | "dockerCompose" | "aes" | "des" | "tripleDes" | "rc4" | "rabbit" | "sm2" | "sm4" | "rsa" | "base64" | "url" | "qrCode" | "unicode" | "time" | "hexString" | "arm" | "ipcalc" | "dataValidation" | "gzip">(name: T) => ToolInterface<T>;
declare const getCategory: <T extends "generate" | "encryption" | "conversion" | "encoder_decoder" | "check" | "other" = "generate" | "encryption" | "conversion" | "encoder_decoder" | "check" | "other">(name: T) => CategoryInterface<T>;
interface StorageDataStructureInterface<T = any> {
    v: T;
    u: string;
    e: number;
    es: string;
}
type StorageDataStructure<T = any> = StorageDataStructureInterface<T> | null;
interface StorageInterface {
    get<T = any>(key: string): StorageDataStructure<T>;
    set<T = any>(key: string, value: StorageDataStructureInterface<T>): void;
    remove(key: string): void;
    clear(): void;
    getAllKey(): string[];
}
type Storage = {
    get<T = any>(key: string, def: T | null, isVersion: boolean | null): T | null;
    set<T = any>(key: string, value: T, expiry: number, isVersion: boolean): void;
    setNoVersion<T = any>(key: string, value: T, expiry: number): void;
};
type Initializer = {
    storage(): Storage;
    push(path: string, query?: Record<string, string | number>): void;
};
interface PlatformRuntime {
    is(): boolean;
    name: string;
    openUrl(url: string): any;
    storage?: () => StorageInterface;
    getLocale?: () => string;
    initialize?: (initializer: Initializer) => void;
    webSecurity?: () => boolean;
}
declare const localesReal: readonly ["zh_CN", "en"];
type LocaleLists = typeof localesReal[number];
declare const locales: readonly ["_default", "zh_CN", "en"];
type Locale = typeof locales[number];
interface LocaleStructure {
    message: string;
    placeholders?: string[];
}
interface LocalListsStructure {
    code: Locale;
    name: string;
}
interface AllLocaleStructure {
    lists: LocalListsStructure[];
    detail: {
        [_k in LocaleLists]: {
            [_k: string]: LocaleStructure;
        };
    };
}
interface HistoryItemStructure<T> {
    t: string;
    v: T;
}
type ToolRouteConfig<T extends ToolType = ToolType> = {
    tool: T;
    feature: FeatureType<T>;
    component: any;
};
type RouteMeta = {
    type: "tool";
    tool: ToolType;
    feature: FeatureType;
} | {
    type: "index" | "other";
};
declare const themes: readonly ["light", "dark", "auto"];
type ThemeType = typeof themes[number];
type ThemeRawType = Exclude<ThemeType, "auto">;

export { AllLocaleStructure, CategoryInterface, CategoryType, FeatureInterface, FeatureType, HistoryItemStructure, Initializer, LocalListsStructure, Locale, LocaleLists, LocaleStructure, PlatformRuntime, RouteMeta, Storage, StorageDataStructure, StorageDataStructureInterface, StorageInterface, ThemeRawType, ThemeType, ToolInterface, ToolRouteConfig, ToolType, categories, categoryExists, commonTool, getCategory, getTool, locales, localesReal, _default as proxy, themes, toolExists, tools };
