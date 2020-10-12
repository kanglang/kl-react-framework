/*
 * @Author: kanglang
 * @Date: 2020-07-12 10:20:29
 * @LastEditors: kanglang
 * @LastEditTime: 2020-10-12 11:18:44
 * @Description: dev环境调试配置
 */

const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 导入每次删除文件夹的插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, "../src/index.js"),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../build'),
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: "babel-loader",
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: ["style-loader", 'css-loader']
        },
        {
            test: /\.scss$/,
            use: ["style-loader", 'css-loader', 'sass-loader']
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader'
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: "projectjs",
            template: path.join(__dirname, "../src/index.html"),
            meta: {
                'viewport': 'width=device-width, user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,viewport-fit=cover'
            }
        })
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        // open:true,//自动打开浏览器 这里在package.json中配置 默认打开谷歌浏览器
        contentBase: './build',
        port: 3001, //默认3001
        host: "127.0.0.1",
        hot:true,//启用热更新 第一步
        // proxy: {                    //代理属性
        //     "/api": {
        //         target: 'https://api-server.com',
        //         pathRewrite: { "^/api": "" }, // 如果你不想始终传递 /api ，则需要重写路径
        //         /* 因为在 ajax 的 url 中加了前缀 '/api'，而原本的接口是没有这个前缀的
        //         所以需要通过 pathRewrite 来重写地址，将前缀 '/api' 转为 '' */
        //         secure: false  //默认情况下，不接受运行在 HTTPS 上，且使用了无效证书的后端服务器
        //     }
        // }
    }
}