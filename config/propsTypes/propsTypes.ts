export interface BuildPaths {
    entry: string;
    html: string;
    output: string;
}

export type Environment = 'production' | 'development';

export interface BuildWebpackOptions {
    port: number;
    paths: BuildPaths;
    mode: Environment;
    analyzer?: Boolean;
}

