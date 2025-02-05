import { RuleSetRule } from "webpack";
import {BuildWebpackOptions} from "../../propsTypes/propsTypes";
import {removeDataTestIdPlugin} from "./removeDataTestIdPlugin";

export function buildBabelLoader  (options: BuildWebpackOptions) : (undefined | null | false | "" | 0 | RuleSetRule | "...") {
    return {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'],
                plugins: [[removeDataTestIdPlugin,
                    {
                        props: ['data-testid']
                    }
                ]]
            }
        }
    }
}