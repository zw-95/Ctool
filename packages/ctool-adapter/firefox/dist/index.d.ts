declare const runtime: {
    name: string;
    is(): boolean;
    openUrl(url: string): Promise<browser.tabs.Tab>;
    getLocale(): string;
};

export { runtime };
