/// <reference types="node"/>
declare module 'gulp.spritesmith' {
  export interface Ispritesmith {
    imgName: string
    cssName: string
    url: string
    cssTemplate: string | ((data: { sprites: string }) => string)
  }

  export interface ISpritesStream extends NodeJS.ReadWriteStream {
    img: NodeJS.ReadWriteStream,
    css: NodeJS.ReadWriteStream
  }

  export default function spritesmith (options: Ispritesmith): NodeJS.ReadWriteStream
}
