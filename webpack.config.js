module.exports = {
    entry: './application.js',
    output: {
        filename: 'application.js',
        path: `${__dirname}/dist/`
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.js']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ],

        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            includePaths: ["./**"]
                        }
                    }
                ]
            }
        ]
    }
};