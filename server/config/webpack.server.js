const path = require('path');
const merge = require('webpack-merge');
const nodeExternales = require('webpack-node-externals');

const commonConfig = require('./webpack.common.js');

const prodConfig = {
    mode: 'production',

    entry: {
        main: './src/server/app.tsx',
    },

    externals: [nodeExternales()],

    devtool: 'cheap-module-source-map',

    output: {
        // publicPath: '/', // 这里如果是./会导致HMR无法开启
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../build')
    }
}

module.exports = merge(commonConfig, prodConfig)
