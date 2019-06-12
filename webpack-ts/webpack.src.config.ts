import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import webpack from 'webpack'
import config from '../config-ts'
import optimization from './config/optimization'
import output from './config/output'
import plugins from './config/plugins'
import resolve from './config/resolve'
import rules from './config/rules'

const webpackConfig: webpack.Configuration = {
  entry: {
    main: ['./src/app/index.tsx']
  },
  mode: config.isProduction ? 'production' : 'development',
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: config.tsconfigPath
      })
    ],
    ...resolve
  },
  output,
  devtool: false,
  module: {
    rules: rules(true)
  },
  optimization,
  plugins
}

export default webpackConfig
