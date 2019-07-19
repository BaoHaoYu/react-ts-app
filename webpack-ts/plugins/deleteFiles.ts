import fs from 'fs-extra'
import { Tapable } from 'tapable'
import webpack from 'webpack'

interface IOpts {
  path: string
}

/**
 * 删除文件
 */
export default class DeleteFiles implements Tapable.Plugin {
  public opts: {
    path: string
  }

  constructor(opts: IOpts) {
    this.opts = opts
  }

  public apply(compiler: webpack.Compiler): void {
    compiler.hooks.compile.tap('deleteFiles compile', () => {
      fs.emptyDir(this.opts.path)
    })
    compiler.hooks.compilation.tap('deleteFiles compilation', () => {
      return
    })
    compiler.hooks.compilation.tap('deleteFiles emit', () => {
      return
    })
    return
  }
}
