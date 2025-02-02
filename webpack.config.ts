import webpack from 'webpack';
import {buildWebpack} from "./config/buildWebpack";
import {BuildPaths, Environment} from "./config/propsTypes/propsTypes";
import path from 'path';

interface EnvVariable {
    mode: Environment,
    port: number
}

export default (env: EnvVariable) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }
    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths
    });
    return config;
};
