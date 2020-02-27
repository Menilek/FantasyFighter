const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    },
    entry: path.resolve(__dirname, './src/app.js'),
    module: {
        rules: [
        {
            test: /\.js?$/,
            use: "babel-loader"
        },
        {
            test: /\.(sa|sc|c)ss?$/,
            use: [
                process.env.NODE_ENV !== 'production'
                ? "style-loader"
                : MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader',
            ]
        }
        ],
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        })
    ]
};