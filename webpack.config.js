module.exports = {
    entry: './src/jsworks.ts',
    output: {
        filename: 'jsworks.js',
        path: __dirname + '/dist'
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        loaders: [
            { test: /\.ts$/, loader: "awesome-typescript-loader" },
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    }
};