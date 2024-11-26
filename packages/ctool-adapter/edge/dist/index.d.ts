declare const runtime: {
    name: string;
    is(): boolean;
    openUrl(url: string): Promise<chrome.tabs.Tab>;
    getLocale(): string;
};

export { runtime };
