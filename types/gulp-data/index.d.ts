/// <reference types="node"/>
declare module 'gulp-data' {
  export default function data<T = any, C = any> (option: (
      file: { contents: string },
      cb: (a: any, r: T) => C) => T | Promise<T> | never | C
  ): NodeJS.ReadWriteStream
}
