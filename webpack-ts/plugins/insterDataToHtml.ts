import fs from 'fs-extra'
import globby from 'globby'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import nunjucks from 'nunjucks'
import path from 'path'
import { Tapable } from 'tapable'
import webpack from 'webpack'

interface IOpts {
  loadSpritePath: string
  htmlName: string
  spriteOutPath: string
  rootPath: string
  twigPath: string
  htmlOutPath: string
}

function getSpriteCssName (spriteOutPath: string) {
  const pathList = globby.sync([path.join(spriteOutPath, '*.css')])

  return pathList[0] ? path.basename(pathList[0]) : null
}

/**
 * 参考：https://github.com/jantimon/html-webpack-harddisk-plugin
 */
class InsterDataToHtml implements Tapable.Plugin {
  public opts: IOpts

  constructor (opts: IOpts) {
    this.opts = opts
  }

  public apply (compiler: webpack.Compiler): void {
    compiler.hooks.compilation.tap(
        'HtmlHashHook compilation',
        (compilation) => {
          const hooks = compilation.hooks as HtmlWebpackPlugin.Hooks
          hooks.htmlWebpackPluginAfterHtmlProcessing.tap('htmlWebpackPluginAfterHtmlProcessing',
              ((htmlPluginData) => {
                const spriteCssName = getSpriteCssName(this.opts.spriteOutPath)
                // 使用nunjucks模板
                htmlPluginData.html = nunjucks.renderString(htmlPluginData.html, {
                  spriteCssName,
                  loadSpritePath: this.opts.loadSpritePath
                })

                // 创建index.html文件
                fs.createFileSync(
                    path.join(this.opts.htmlOutPath, this.opts.htmlName)
                )
                // 拷贝到指定目录
                fs.writeFileSync(
                    path.join(this.opts.htmlOutPath, this.opts.htmlName),
                    htmlPluginData.html,
                    { encoding: 'utf8' }
                )

                return htmlPluginData
              }))

          return
        })
    return
  }
}

export default InsterDataToHtml
