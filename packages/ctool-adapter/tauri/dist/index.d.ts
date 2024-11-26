declare global {
    interface Window {
        __TAURI__: {
            shell: {
                open: (url: string) => void;
            };
            invoke: (command: string, option?: Record<string, any>) => any;
        };
    }
}
declare const runtime: {
    name: string;
    is(): boolean;
    openUrl(url: string): void;
    toggleDevTools(): any;
};

export { runtime };
