const path = require('path');
const nodeExternals = require('webpack-node-externals');
// 导入每次删除文件夹的插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, "./src/index.js"),
    output: {
        path: path.join(__dirname, './lib'),
        filename: 'index.js',
        libraryTarget: 'umd',  //发布组件专用
        library: 'ReactCmp',
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: "babel-loader",
            exclude: /node_modules/
        },
        {
            test: /\.scss$/,
            use: ["style-loader", 'css-loader', 'sass-loader']
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, //
            loader: 'url-loader',
            options: {
                limit: 8192,
                name: '[name].[hash].[ext]'
            }
        }]
    },
    devtool: 'cheap-module-source-map',
    plugins: [new CleanWebpackPlugin()],
    externals: [
        {
            react: 'react' //打包时候排除react
        },
        nodeExternals()]
    ,
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3001,
        contentBase: './dist'
    }
};