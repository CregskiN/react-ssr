const path = require('path');
const merge = require('webpack-merge');
const nodeExternales = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const commonConfig = require('./webpack.common.js');

const prodConfig = {
    

    entry: {
        main: './src/server/index.ts',
    },

    externals: [nodeExternales()],

    

    plugins: [
        new CleanWebpackPlugin({
            verbose: true, // 打印删除信息
            // cleanOnceBeforeBuildPatterns: ['build']
        })
    ],

    output: {
        // publicPath: '/', // 这里如果是./会导致HMR无法开启
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../build')
    }
}

module.exports = merge(commonConfig, prodConfig)
