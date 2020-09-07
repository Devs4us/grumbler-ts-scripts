import { ReleaseType } from "semver";
import webpack from "webpack";
export declare function getCurrentVersion(pkg: {
    version: string | null;
}): string | null;
export declare function getNextVersion(pkg: {
    version: string;
}, level?: ReleaseType): string | null;
declare type WebPackEntry = string | string[] | webpack.Entry | webpack.EntryFunc;
export declare type WebpackConfigOptions = {
    context?: string;
    entry?: WebPackEntry;
    filename?: string;
    modulename?: string;
    minify?: boolean;
    test?: boolean;
    options?: webpack.Configuration;
    vars?: object;
    alias?: {
        [key: string]: string;
    };
    libraryTarget?: webpack.LibraryTarget;
    web?: boolean;
    debug?: boolean;
    env?: string;
    path?: string;
    sourcemaps?: boolean;
    cache?: boolean;
    analyze?: boolean;
    dynamic?: boolean;
    babelConfig?: string;
    optimize?: boolean;
    srcPath?: string[];
};
export declare function getWebPackVariants(configs: WebpackConfigOptions[], BaseConfig?: WebpackConfigOptions): any;
export {};
