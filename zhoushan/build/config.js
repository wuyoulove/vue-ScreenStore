'use strict'
const pkg = require('../package')

module.exports = {
  title: '舟山市雪亮工程指挥应用平台',
  // Options for webpack-dev-server
  // See https://webpack.js.org/configuration/dev-server
  devServer: {
    host: '0.0.0.0',
    port: 5001,
    proxy: {
      // 代理示例
      '/api': {
        target: 'http://api.tianque.com:8686/api',
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  // when you use electron please set to relative path like ./
  // otherwise only set to absolute path when you're using history mode
  publicPath: '/',
  prodPublicPath: '/static/',
  cssModules: false,
  jsx: true
}
