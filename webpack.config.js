const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackUglifyJsPlugin = require('webpack-uglify-js-plugin');
const path = require('path');

const cssExtractTextPlugin = new ExtractTextPlugin("jsworks.css");
const htmlExtractTextPlugin = new ExtractTextPlugin("jsworks.html");

const webpackUglifyJsPlugin = new WebpackUglifyJsPlugin({
    cacheFolder: path.resolve(__dirname, 'dist/cached_uglify/'),

    debug: false,
    minimize: true,
    sourceMap: true,

    output: {
        comments: false
    },

    compressor: {
        warnings: false
    },

    mangle: false,
});


module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: '../release/entry.js',

    output: {
        filename: 'jsworks.js',
        path: `${__dirname}/dist/`
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.js', '.css', '.scss', '.html']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "source-map-loader",
                exclude: /(node_modules|bower_components|spec)/
            },

            {
                test: /\.css$/,
                loader: cssExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})
            },
            {
                test: /\.scss$/,
                loader: cssExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!sass-loader"})
            },

            {
                test: /\.html$/,
                loader: htmlExtractTextPlugin.extract({fallback: "html-loader", use: "html-loader"})
            },
        ],

    },

    plugins: [
        cssExtractTextPlugin, htmlExtractTextPlugin, webpackUglifyJsPlugin
    ],
};