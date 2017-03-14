//const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const cssExtractTextPlugin = new ExtractTextPlugin("jsworks.css");
const htmlExtractTextPlugin = new ExtractTextPlugin("jsworks.html");


module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: '../release/jsworks.js',

    output: {
        filename: 'jsworks.js',
        path: `${__dirname}/dist/`
    },

    devtool: 'source-map',

    /*resolve: {
        plugins: [
            new TsConfigPathsPlugin({
                configFileName: './../tsconfig.json'
            })
        ]
    },*/

    module: {
        loaders: [
            /*{
                test: /\.ts$/,
                loader: "ts-loader",//"awesome-typescript-loader",
                exclude: /(node_modules|bower_components|spec)/
            },*/
            {
                test: /\.js$/,
                loader: "source-map-loader",
                exclude: /(node_modules|bower_components|spec)/
            },

            {
                test: /\.css$/,
                loader: cssExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"}),
                exclude: /(node_modules|bower_components|spec)/
            },
            {
                test: /\.scss$/,
                loader: cssExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!sass-loader"}),
                exclude: /(node_modules|bower_components|spec)/
            },

            {
                test: /\.html$/,
                loader: htmlExtractTextPlugin.extract({fallback: "html-loader", use: "html-loader"}),
                exclude: /(node_modules|bower_components|spec)/
            },
        ],

    },

    plugins: [
        cssExtractTextPlugin, htmlExtractTextPlugin
    ],
};