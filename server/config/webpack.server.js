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

    module: {
        rules: [{
            test: /\.css?$/,
            exclude: /node_modules/,
            use: ['isomorphic-style-loader', {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                    modules: {
                        localIdentName: '[name]_[local]-[hash:base64:5]',
                    }
                }
            }, 'postcss-loader']
        }]
    },

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
