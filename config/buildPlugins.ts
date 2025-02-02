import webpack, {Configuration} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildWebpackOptions} from "./propsTypes/propsTypes";

export function buildPlugins({mode, paths}: BuildWebpackOptions): Configuration['plugins'] {
    const isProd = mode === 'production';

    return [
        new HtmlWebpackPlugin({template: paths.html}),
        isProd && new webpack.ProgressPlugin(),
        isProd && new MiniCssExtractPlugin({filename: 'css/[name].[contenthash].css', chunkFilename: 'css/[name].[contenthash].css'})
    ].filter(Boolean)
}