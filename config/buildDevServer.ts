import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import {BuildWebpackOptions} from "./propsTypes/propsTypes";

export function buildDevserver (options: BuildWebpackOptions): DevServerConfiguration  {
    return {
        port: options.port ?? 3000,
        open: true,
        historyApiFallback: true
    }
}