/// <reference types="node"/>
declare module 'css-loader' {
  const cssLoader: any

  export interface ICssLoaderOpts {
    modules?: boolean
    sourceMap: boolean
    importLoaders: number
    localIdentName: string
  }

  export default cssLoader
}
