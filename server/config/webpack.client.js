const path = require('path');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common.js');

const prodConfig = {
    

    entry: {
        index: './src/client/index.tsx',
    },

    

    output: {
        // publicPath: '/', // 这里如果是./会导致HMR无法开启
        filename: '[name].js',
        path: path.resolve(__dirname, '../public')
    }
}

module.exports = merge(commonConfig, prodConfig)
