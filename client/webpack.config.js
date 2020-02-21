const webpack = require('webpack');
const path = require('path');

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
            test: /\.css?$/,
            use: [
                "style-loader",
                "css-loader"
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
};