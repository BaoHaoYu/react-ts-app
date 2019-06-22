// 本地工程地址
const serverUrl = 'http://localhost:3000'
const isProduction = process.env.NODE_ENV === 'production'
const branchPathName = isProduction ? 'production' : 'development'

export default {
  // ajax请求链接
  serverUrl: isProduction ? '' : '',
  // 静态文件
  staticUrl: isProduction ? '' : serverUrl,
  // 是否生成环境
  isProduction,
  // 位置名称
  branchPathName,
}
