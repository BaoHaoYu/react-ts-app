import webpack from 'webpack'
import config from '../../config-ts'

const output: webpack.Output = {
  // 输出文件名
  filename: config.addHashToFile ? '[name].[chunkhash:8].js' : '[name].js',

  // 输出目录
  path: config.srcPath,

  // 单个chunk文件名
  chunkFilename: config.addHashToFile
    ? '[id].[chunkhash:8].chunk.js'
    : '[id].chunk.js',

  // chunks 目录
  publicPath: config.outPublicPath,

  // 配置sourceMap
  devtoolModuleFilenameTemplate(info) {
    return 'file:///' + info.absoluteResourcePath.replace(/\\/g, '/')
  },
}

export default output
