/// <reference types="node"/>
declare module 'css-loader' {
  const cssLoader: any

  export interface ICssLoaderOpts {
    modules?:
      | boolean
      | {
          mode?: string
          localIdentName?: string
          context?: string
          hashPrefix?: string
        }
    sourceMap: boolean
    importLoaders?: number
    localsConvention?:
      | 'asIs'
      | 'camelCase'
      | 'camelCaseOnly'
      | 'dashes'
      | 'dashesOnly'
    onlyLocals?: boolean
  }

  export default cssLoader
}
