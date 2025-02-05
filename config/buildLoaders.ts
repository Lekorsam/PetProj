import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildWebpackOptions} from "./propsTypes/propsTypes";
import ReactRefreshTypeScript from 'react-refresh-typescript';

export function buildLoaders(options: BuildWebpackOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development';

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:5]'
                    },
                },
            },
            "sass-loader",
        ],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: {
            loader: 'ts-loader',
            options: {
                getCustomTransformers: () => ({
                    before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                }),
                transpileOnly: isDev,
            },
        },
        exclude: /node_modules/,
    }

    const assetsLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
    }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    return [
        cssLoader,
        tsLoader,
        assetsLoader,
        svgLoader
    ]
}