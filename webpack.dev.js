const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: './public',
        host: 'localhost',
        port: 3000,
        publicPath: '/js/',
    },
});
