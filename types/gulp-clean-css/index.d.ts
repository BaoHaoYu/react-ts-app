/// <reference types="node"/>
declare module 'gulp-clean-css' {
  export default function clearnCss (options: { compatibility: string }): NodeJS.ReadWriteStream
}
