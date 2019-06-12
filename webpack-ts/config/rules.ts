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
            cacheDirectory: true
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
