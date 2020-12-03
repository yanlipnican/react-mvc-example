const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "cheap-module-eval-source-map",

    entry: ["react-hot-loader/patch", "./src"],

    output: {
        pathinfo: false,
    },

    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        historyApiFallback: true,
        port: 9000,
    },

    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            "react-dom": "@hot-loader/react-dom",
        },
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            experimentalWatchApi: true,
                        },
                    },
                ],
                include: path.resolve(__dirname, "src"),
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                    "thread-loader",
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
                include: path.resolve(__dirname, "src"),
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [
                    "thread-loader",
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "fonts/",
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
        new webpack.ProgressPlugin({
            profile: true,
        }),
    ],
};
