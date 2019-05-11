/// <reference types="node"/>
declare module 'gulp-changed-in-place' {
  interface IChanged {
    firstPass?: boolean,
    cache?: Record<string, string>,
    howToDetermineDifference?: 'hash' | 'modification-time',
    basePath?: string
  }

  export default function changed (options?: IChanged): NodeJS.ReadWriteStream
}
