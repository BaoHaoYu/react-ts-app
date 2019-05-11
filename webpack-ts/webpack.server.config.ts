import path from 'path'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import webpack from 'webpack'
import * as devserver from 'webpack-dev-server'
import config from '../config-ts'
import optimization from './config/optimization'
import output from './config/output'
import plugins from './config/plugins'
import resolve from './config/resolve'
import rules from './config/rules'

const webpackConfig: webpack.Configuration & { devServer: devserver.Configuration } = {
  entry: {
    main: ['./src/index']
  },

  devServer: {
    // 公共文件夹，可以通过浏览器请求获得里面的资源
    contentBase: config.contentBase,

    // *.hot-update.json 所在目录
    publicPath: config.serverPublicPath,

    // 端口
    port: config.port,

    // 域名
    host: '0.0.0.0'
  },
  output,
  devtool: false,
  mode: 'development',
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.join(config.rootPath, 'tsconfig-main.json')
      })
    ],
    ...resolve
  },
  module: {
    rules: rules(true)
  },
  optimization,
  plugins
}

export default webpackConfig
