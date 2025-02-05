export interface BuildPaths {
    entry: string;
    html: string;
    output: string;
    src: string;
}

export type Environment = 'production' | 'development';

export type BuildPlatform = 'desktop' | 'mobile';

export interface BuildWebpackOptions {
    port: number;
    paths: BuildPaths;
    mode: Environment;
    analyzer?: Boolean;
    platform: BuildPlatform;
}

