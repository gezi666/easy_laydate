const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "production",
  entry: {
    index: './src/index.js'
  },
  devServer: {
    contentBase: '/dist',
    compress: true,
    port: 8888,
    hot: true,
    clientLogLevel: 'none'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    library: 'easy-laydate', // 指定类库名,主要用于直接引用的方式(比如使用script 标签)
    libraryExport: 'default', // 对外暴露default属性，就可以直接调用default里的属性
    globalObject: 'this', // 定义全局变量,兼容node和浏览器运行，避免出现"window is not defined"的情况
    libraryTarget: 'umd' // 定义打包方式Universal Module Definition,同时支持在CommonJS、AMD和全局变量使用
  }
};
