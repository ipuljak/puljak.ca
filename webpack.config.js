const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "index.html",
    filename: "./index.html"
});

const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css"
});

module.exports = {
    entry: './app/index.js',
    output: {
        publicPath: "/",
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    },
    resolve: {
        alias: {
            Constants: path.resolve("./app/constants"),
            Core: path.resolve("./app/core"),
            Layout: path.resolve("./app/layout"),
            Pages: path.resolve("./app/pages"),
            Styles: path.resolve("./app/styles")
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                //test: /\.css$/,
                test: /\.scss$/,
                use: [
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        htmlWebpackPlugin,
        miniCssExtractPlugin
    ]
};