import { ICssLoaderOpts } from 'css-loader'
import precss from 'precss'
import webpack from 'webpack'

/**
 * 快速生成不同css预编译的css模块处理
 * @return {*[]}
 * @param p
 */
export default function cssModules(p: {
  loader: string
  sourceMap: boolean
}): webpack.RuleSetUse {
  return [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
      options: {
        modules: true,
        sourceMap: p.sourceMap,
        importLoaders: 1,
        localIdentName: '[local]__[hash:base64:5]',
      } as ICssLoaderOpts,
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: p.sourceMap,
        plugins() {
          return [precss]
        },
      },
    },
    {
      loader: p.loader,
      options: {
        sourceMap: p.sourceMap,
      },
    },
  ]
}
