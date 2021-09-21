// commonjs
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const json5 = require("json5");

module.exports = {
    mode: "development",
    entry: "./main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.json5$/i,
                type: "json",
                parser: {
                    parse: json5.parse, 
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "output",
        }),
    ],
};