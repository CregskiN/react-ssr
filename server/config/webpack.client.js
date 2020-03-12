const path = require('path');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common.js');

const prodConfig = {


    entry: {
        index: './src/client/index.tsx',
    },

    module: {
        rules: [{
            test: /\.css?$/,
            exclude: /node_modules/,
            use: ['style-loader', {
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

    output: {
        // publicPath: '/', // 这里如果是./会导致HMR无法开启
        filename: '[name].js',
        path: path.resolve(__dirname, '../public')
    }
}

module.exports = merge(commonConfig, prodConfig)
