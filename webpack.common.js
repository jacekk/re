const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, 'public/js');

module.exports = {
    entry: {
        'basic-usage': './src/js/basic-usage',
    },
    output: {
        filename: '[name].js',
        path: OUTPUT_DIR,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: ['/node_modules'],
                use: [{ loader: 'babel-loader' }],
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [new CleanWebpackPlugin([OUTPUT_DIR])],
};
