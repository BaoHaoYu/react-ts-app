import webpack from 'webpack'
import config from '../../config-ts'

const resolve: webpack.Resolve = {
  alias: {
    'react-dom': '@hot-loader/react-dom',
    src: config.rootPath,
  },
  extensions: ['.ts', '.tsx', '.js', '.jsx'],
}

export default resolve
