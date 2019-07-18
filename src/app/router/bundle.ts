export function pageMain () {
  return import(/* webpackChunkName: "page-main" */ 'src/app/routes/page-main')
}

export function page1 () {
  return import(/* webpackChunkName: "page1" */ 'src/app/routes/page1')
}

export function page2 () {
  return import(/* webpackChunkName: "page2" */ 'src/app/routes/page2')
}
