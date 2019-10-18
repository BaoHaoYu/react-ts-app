import fs from 'fs'
import fse from 'fs-extra'
import gulp from 'gulp'
import cleanCss from 'gulp-clean-css'
import debug from 'gulp-debug'
import spritesmith, { ISpritesStream } from 'gulp.spritesmith'
import merge from 'merge-stream'
import nunjucks from 'nunjucks'
import uuid from 'uuid'
import config from '../../config-ts'

// 输出目录
const out = config.spriteOutPath
// 图表目录
const src = ['src/assets/images/icon/*.png']

/**
 * 雪碧图
 */
const sprite: gulp.TaskFunction = () => {
  // 生成随机字符
  const hash = uuid.v1()

  // 清空目录
  fse.emptyDirSync(config.spriteOutPath)
  const imgName = config.addHashToFile ? `sprite.${hash}.png` : 'sprite.png'
  const spriteData = gulp.src(src).pipe(
    spritesmith({
      imgName,
      cssName: config.addHashToFile ? `sprite.${hash}.css` : 'sprite.css',
      url: config.loadSpritePath,
      cssTemplate: (spritesData) => {
        // 使用twig模板
        const twig = fs.readFileSync(
          './gulp-ts/cssTemplate/spriteCssTemplate.twig',
          'utf-8',
        )
        return nunjucks.renderString(twig, {
          sprites: spritesData.sprites,
          url: config.loadSpritePath + '/' + imgName,
        })
      },
    }),
  ) as ISpritesStream

  const imgStream = spriteData.img
    .pipe(debug({ title: '输出图片:' }))
    .pipe(gulp.dest(out))

  const cssStream = spriteData.css
    .pipe(debug({ title: '编译css:' }))
    .pipe(cleanCss({ compatibility: 'ie8' }))
    .pipe(gulp.dest(out))

  return merge(imgStream, cssStream)
}

export default sprite
