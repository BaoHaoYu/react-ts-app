import webpack from 'webpack'
import cssModules from './useCssModules'

export default function (sourceMap: boolean): webpack.RuleSetRule[] {
  return [
    {
      test: /\.(tsx|jsx|ts)?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              [
                '@babel/preset-env',
                { targets: { browsers: 'last 2 versions' } } // or whatever your project requires
              ],
              '@babel/preset-typescript',
              '@babel/preset-react'
            ],
            plugins: [
              // plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              ['@babel/plugin-syntax-dynamic-import'],
              'react-hot-loader/babel'
            ]
          }
        },
        {
          loader: 'react-docgen-typescript-loader'
        }
      ]
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.scss/,
      use: cssModules({ loader: 'sass-loader', sourceMap })
    },
    {
      test: /\.(png|jpg|svg)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      ]
    },
    {
      test: /\.json$/,
      type: 'javascript/auto',
      use: [
        {
          loader: 'file-loader'
        }
      ]
    }
  ]
}
