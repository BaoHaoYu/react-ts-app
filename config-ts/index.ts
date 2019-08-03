import path from 'path'

// 不变：项目目录
const rootPath = path.join(__dirname, '../')

// 不变：node环境
const nodeEnv = process.env.NODE_ENV

// 不变：是否生产环境
const isProduction = nodeEnv === 'production'

// 不变：分支目录
const branchPathName = isProduction ? 'production' : 'development'

// 不变：编译目录的根
const buildPath = path.join(rootPath, '__build__')

// ！！变化：是否需要为文件添加唯一标识符
const addHashToFile = isProduction

// ！！变化：webpac-dev-server的端口
const port = 19080

// 不变：webpac-dev-server的contentBase，绝对路径
const contentBase = path.join(buildPath, branchPathName)

// ！！变化：index.html的输出目录
const htmlOutPath = contentBase

// ！！变化：生产环境的时候，所有的src，静态文件的请求地址
const rootUrl = isProduction ? '' : ''

// 不变：webpack编译输出目录
const outPath = path.join(buildPath, branchPathName, 'src')

// 不变：webpack out 的 publicPath，浏览器会加载 outPublicPath/main.js , outPublicPath/chunk.js
const outPublicPath = `${rootUrl}/src/`

// 不变：加载雪碧图的url路径
const loadSpritePath = `${rootUrl}/sprites`

// 不变：雪碧图输出路径
const spriteOutPath = path.join(buildPath, branchPathName, 'sprites')

// 不变：webpac-dev-server的publicPath
const serverPublicPath = outPublicPath

// 不变：生产环境的页面文件的输出目录
const srcPath = outPath

// 不变：twig模板的名字
const twigName = isProduction ? 'index.twig' : 'index.dev.twig'

// 不变：输出的html名字
const htmlName = isProduction ? 'index.html' : 'index.dev.html'

// 不变：模板页的路径
const twigPath = './src/' + twigName

// html的title
const htmlTitile = ''

// 不变：tsconfig文件路径
const tsconfigPath = path.join(rootPath, 'tsconfig.app.json')

export default {
  addHashToFile,
  buildPath,
  contentBase,
  htmlName,
  htmlOutPath,
  htmlTitile,
  isProduction,
  loadSpritePath,
  nodeEnv,
  outPath,
  outPublicPath,
  port,
  rootPath,
  rootUrl,
  serverPublicPath,
  spriteOutPath,
  srcPath,
  tsconfigPath,
  twigName,
  twigPath,
}
