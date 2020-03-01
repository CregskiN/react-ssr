
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {

    target: 'node',

    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [
                'babel-loader'
            ],
        }]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },

    plugins: [
        new CleanWebpackPlugin({
            verbose: true, // 打印删除信息
            // cleanOnceBeforeBuildPatterns: ['build']
        })
    ],

    // optimization: {
    //     splitChunks: {
    //         chunks: 'all', // 针对异步导入分割 // 'all' @全部(按cacheGroups.defaultVendors配置进行) // 'initial' 针对同步代码分割
    //         minSize: 30000, // 引入模块大于minSize才进行代码分割 30000b = 30kb // 一般自写模块不会超过这个大小
    //         // minRemainingSize: 0,
    //         maxSize: 0, // 代码分割，每个库最大不超过maxSize bytes
    //         minChunks: 1, // 一个模块被使用至少minChunks次才代码分割
    //         maxAsyncRequests: 6, // 限制同时加载库数量  做法：前maxAsyncRequests个库代码分割，其他不管
    //         maxInitialRequests: 4, // 入口文件做代码分割，最多有maxInitialRequests个
    //         automaticNameDelimiter: '~', // 文件生成 文件名连接符
    //         automaticNameMaxLength: 30,
    //         cacheGroups: { // 缓存组 对下边条件分别代码分割
    //             defaultVendors: {
    //                 test: /[\\/]node_modules[\\/]/, // 针对从node_modules导入的模块
    //                 priority: -10, // 打包绝对优先级 // 优先级高于test筛选
    //                 // filename: 'vendors.js' // 打包成的文件名
    //             },
    //             default: {
    //                 // minChunks: 1,
    //                 priority: -20, // 打包绝对优先级
    //                 reuseExistingChunk: true, // 复用打包模块 // 如编译a.js b.js都导入c模块，c只被打包一次
    //                 filename: 'common.js'
    //             }
    //         }
    //     }
    // },

    
}