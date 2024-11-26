import { StorageInterface, Initializer, FeatureInterface } from 'ctool-config';

type FeatureItem = {
    feature: FeatureInterface;
    cmds: string[];
};
declare const runtime: {
    name: string;
    is(): boolean;
    openUrl(url: string): void;
    storage(): StorageInterface;
    getLocale(): string;
    initialize(initializer: Initializer): void;
    getFeatures(): Map<FeatureInterface, string[]>;
    resetFeatures(): void;
    setFeatures(features: FeatureItem[]): void;
};

export { runtime };
