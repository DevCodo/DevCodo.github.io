const path = require('path');
const copyWebpackPlugin = require('copy-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'
}

module.exports = {
    externals: {                          // чтобы добраться до PATHS из других config                                  
        paths: PATHS
    },

    entry: {
        app: PATHS.src        // './src/index.js' // app = [name]
    },

    output: {
        filename: `${PATHS.assets}js/[name].js`,         //'[name].js',
        path: PATHS.dist,                 //path.resolve(__dirname, './dist'),
        publicPath: '/'
    },

    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules'
        },{
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]'
            }
        },{
            test: /\.scss$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: { sourceMap: true }
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
            filename: `${PATHS.assets}css/[name].css`
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
    ]
}