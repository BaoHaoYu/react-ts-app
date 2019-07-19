import HtmlWebpackPlugin from 'html-webpack-plugin'
import _ from 'lodash'
import path from 'path'
import webpack from 'webpack'
import config from '../../config-ts'
import DeleteFiles from '../plugins/deleteFiles'
import InsterDataToHtml from '../plugins/insterDataToHtml'

export default _.compact([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(
        config.isProduction ? 'production' : 'development',
      ),
    },
  }),
  new HtmlWebpackPlugin({
    template: config.twigPath,
    title: config.htmlTitile,
  }),
  // 如果是生产环境，则删除老的文件
  config.isProduction && new DeleteFiles({ path: config.srcPath }),
  // 插入其他文件链接到html文件里面
  new InsterDataToHtml({
    spriteOutPath: config.spriteOutPath,
    rootPath: config.rootPath,
    twigPath: config.twigPath,
    htmlOutPath: config.htmlOutPath,
    loadSpritePath: config.loadSpritePath,
    htmlName: 'index.html',
  }),
  // @ts-ignore
  !config.isProduction &&
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
      moduleFilenameTemplate(info: any) {
        if (path.extname(info.absoluteResourcePath) === '.scss') {
          return ''
        }
        return 'file:///' + info.absoluteResourcePath.replace(/\\/g, '/')
      },
      exclude: ['verdor.chunk.js'],
    }),
])
