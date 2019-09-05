const merge = require('webpack-merge');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    
    devtool: 'cheap-module-eval-source-map',
    
    devServer: {
        contentBase: baseWebpackConfig.externals.paths.dist,
        // open: true,
        // open: 'Google Chrome',
        port: 8081,
        historyApiFallback: true,
        overlay: true,               //{warning: true, errors: true}
        // proxy: {
        //     '/reactcourseapi/**': {
        //         terget: 'http://localhost',
        //         secure: false,
        //         changeOrigin: true
        //     }
        // }
    },

    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
})

