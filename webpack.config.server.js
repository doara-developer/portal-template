const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    mode: "development",
    entry: "./src/server/app.ts",
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "app.js",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
            },
        ],
    },
    resolve: {
        extensions: [".js", ".ts"],
        alias: {
            "@client": path.resolve(__dirname, "src/client"),
            "@server": path.resolve(__dirname, "src/server"),
        },
    },
    plugins: [],
};
