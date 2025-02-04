import {Configuration} from "webpack";
import {BuildWebpackOptions} from "./propsTypes/propsTypes";

export function buildResolvers(options: BuildWebpackOptions): Configuration['resolve'] {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': options.paths.src
        }
    }
}