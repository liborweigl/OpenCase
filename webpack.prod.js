const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        'app': './app/app.module.browser'
    },
    devtool: 'cheap-module-eval-source-map',
    performance: {
        hints: false
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    output: {
        path: path.join(__dirname, 'wwwroot'),
        filename: 'js/[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'awesome-typescript-loader',
                    'angular-router-loader',
                    'angular2-template-loader',
                    'source-map-loader',
                    'tslint-loader'
                ]
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(png|jpg|gif|ico|woff|woff2|ttf|svg|eot)$/,
                use: 'file-loader?name=assets/[name].[ext]',
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, "angularApp"),
                use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "angularApp"),
                use: 'raw-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/[name].bundle.css'),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new CleanWebpackPlugin(
            [
                './wwwroot/js/',
                './wwwroot/css/',
                './wwwroot/assets/',
                './wwwroot/index.html'
            ]
        ),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, '../src')
        ),
        // inject in index.html
        new HtmlWebpackPlugin({
            template: './angularApp/index.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ],
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
};