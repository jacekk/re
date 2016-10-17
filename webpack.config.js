var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './public',
        port: 4000,
    },
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    entry: {
        'basic-usage': './src/js/basic-usage',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                exclude: /node_modules/,
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            },
        ],
    },
    output: {
        path: 'public',
        filename: 'js/[name].min.js',
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
    ],
};
