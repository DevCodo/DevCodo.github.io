const path = require('path');
const copyWebpackPlugin = require('copy-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');

const PATHS = {
    src: path.resolve(__dirname, '../src2'),
    dist: path.resolve(__dirname, '../dist'),
    assets: ''    // 'assets/'
}

module.exports = {
    externals: {                          // чтобы добраться до PATHS из других config                                  
        paths: PATHS
    },

    entry: {
        app: PATHS.src        // './src/index.js' // app = [name]
    },

    output: {
        filename: `${PATHS.assets}js/[name].[chunkhash].js`,         //'[name].js',
        // path: PATHS.dist,                 //path.resolve(__dirname, './dist'),
        publicPath: '/'
    },

    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        },{
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]'
            }
        },{
            test: /\.module\.scss$/,
            exclude: '/node_modules/',
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      hmr: process.env.NODE_ENV === 'development',
                    },
                }, {
                    loader: 'css-loader',
                    options: { 
                        sourceMap: true,
                        modules: true,
                        // localIdentName: "[name]__[local]__[hash:base64:15]"
                        localIdentName: "[local]__[sha1:hash:hex:7]"
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        ident: 'postcss',
                        plugins: (loader) => [
                            require('autoprefixer'),
                            require('css-mqpacker'),
                            require('cssnano')({
                                preset: [
                                    'default', {
                                        discardComments: {
                                        removeAll: true,
                                        }
                                    }
                                ]
                            })
                        ]
                    }
                }, {
                    loader: 'sass-loader',
                    options: { sourceMap: true }
                }
            ]
        },{
            test: /^((?!\.module).)*(scss|css)$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      hmr: process.env.NODE_ENV === 'development',
                    },
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        ident: 'postcss',
                        plugins: (loader) => [
                            require('autoprefixer'),
                            require('css-mqpacker'),
                            require('cssnano')({
                                preset: [
                                    'default', {
                                        discardComments: {
                                        removeAll: true,
                                        }
                                    }
                                ]
                            })
                        ]
                    }
                }, {
                    loader: 'sass-loader',
                    options: { sourceMap: true }
                }
            ]
        }]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].[chunkhash].css`
        }),
        new htmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/index.html`,
            filename: './index.html'
        }),
        new copyWebpackPlugin([
            { from: `${PATHS.src}/img`, to: `${PATHS.assets}img` },
            { from: `${PATHS.src}/static`, to: '' }
        ])
    ],

    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             vendors: {
    //                 name: `chunk-vendors`,
    //                 test: /[\\/]node_modules[\\/]/,
    //                 priority: -10,
    //                 chunks: 'initial'
    //             },
    //             common: {
    //                 name: `chunk-common`,
    //                 minChunks: 2,
    //                 priority: -20,
    //                 chunks: 'initial',
    //                 reuseExistingChunk: true
    //             }
    //         }
    //     }
    // },

    resolve: {
        alias: {
            "~d": PATHS.src
        }
    }
}