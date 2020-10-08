const path = require("path");
const {VueLoaderPlugin} = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/client/index.ts",
    output: {
        path: path.resolve(__dirname, "./dist/templates"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            appendTsSuffixTo: [/\.vue$/],
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpg|png)$/,
                loaders: 'url-loader',
            },
        ],
    },
    resolve: {
        extensions: [".js", ".ts", ".vue", ".json"],
        alias: {
            "vue": "@vue/runtime-dom",
            "@client": path.resolve(__dirname, "src/client"),
            "@server": path.resolve(__dirname, "src/server"),
        },
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/client/index.html",
        }),
    ],
};
