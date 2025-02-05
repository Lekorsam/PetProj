import webpack, {Configuration} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildWebpackOptions} from "./propsTypes/propsTypes";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import path from "path";
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

export function buildPlugins({mode, paths, analyzer, platform}: BuildWebpackOptions): Configuration['plugins'] {
    const isProd = mode === 'production';
    const isDev = mode === 'development';

    return [
        new HtmlWebpackPlugin({template: paths.html, favicon: path.resolve(paths.public, 'favicon.ico')}),
        isProd && new webpack.ProgressPlugin(),
        isProd && new MiniCssExtractPlugin({filename: 'css/[name].[contenthash].css', chunkFilename: 'css/[name].[contenthash].css'}),
        analyzer && new BundleAnalyzerPlugin(),
        new webpack.DefinePlugin({
            __PLATFORM__: JSON.stringify(platform),
        }),
        new ForkTsCheckerWebpackPlugin(),
        isDev && new ReactRefreshWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                { from: path.resolve(paths.public, 'locales'), to: path.resolve(paths.output, 'locales') },
            ],
        }),
    ].filter(Boolean)
}