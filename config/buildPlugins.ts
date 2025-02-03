import webpack, {Configuration} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildWebpackOptions} from "./propsTypes/propsTypes";

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

export function buildPlugins({mode, paths, analyzer}: BuildWebpackOptions): Configuration['plugins'] {
    const isProd = mode === 'production';

    return [
        new HtmlWebpackPlugin({template: paths.html}),
        isProd && new webpack.ProgressPlugin(),
        isProd && new MiniCssExtractPlugin({filename: 'css/[name].[contenthash].css', chunkFilename: 'css/[name].[contenthash].css'}),
        analyzer && new BundleAnalyzerPlugin()
    ].filter(Boolean)
}