# 高效app脚手架
`react@16.8.6` + `redux@4.0.0` + `react-router@5.0.1` + `immutable@3.8.1` + +`webpack@4.20.2` + `typescript@3.0.3` + `sass` 

<!-- toc -->
- [高效app脚手架](#%E9%AB%98%E6%95%88app%E8%84%9A%E6%89%8B%E6%9E%B6)
  - [开发环境](#%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83)
  - [特性](#%E7%89%B9%E6%80%A7)
  - [第一次运行项目](#%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%BF%90%E8%A1%8C%E9%A1%B9%E7%9B%AE)
  - [调试](#%E8%B0%83%E8%AF%95)
  - [开发](#%E5%BC%80%E5%8F%91)
  - [目录说明](#%E7%9B%AE%E5%BD%95%E8%AF%B4%E6%98%8E)
  - [修改css-loader](#%E4%BF%AE%E6%94%B9css-loader)
  - [其他建议](#%E5%85%B6%E4%BB%96%E5%BB%BA%E8%AE%AE)
<!-- tocstop -->

- [English version](./README.md)  
## 开发环境
- 操作系统：window 10
- nodejs：10.15.0
- npm：6.9.0
- yarn：1.9.2
- 开发工具：JetBrains WebStorm 2019.1.1 x64
- 浏览器：chrome 74.0.3729.131 stable

## 特性
- immutablejs
- sass
- redux
- react-router
- code split
- hot load
- no cache
- stylelint
- tslint
- husky
- lint-staged

## 第一次运行项目
在项目根目录执行`yarn`

## 调试
- `npm run devSprites`：执行打包雪碧图，每次有加入新图片才运行
- `npm run devServer`：启动webpack-dev-server，然后打开 http://localhost:19080  
![](__resource__/3.png)

## 开发
- `npm run sprites`：打包生产环境的雪碧图，雪碧图css文件，图片文件带有hash
- `npm run src`：打包生产环境的js，js文件都带有hash。效果：  
![](__resource__/1.png)  
![](__resource__/2.png)

## 目录说明
- `config-ts/index.ts`：主要webpack和gulp的配置
- `config-ts/tsconfig-commom.json`：通用的ts配置

- `webpack-ts/webpack.server.config.ts`：启动webpack-dev-server的配置文件
- `webpack-ts/webpack.src.config.ts`：编译出实际的文件，分开开发环境编译和生产环境编译

- `webpack-ts/plugins/deleteFiles.ts`：清空某个目录的文件
- `webpack-ts/plugins/insterDataToHtml`：插入webpack生成的js到html文件中，把雪碧图的url插入到html文件中

## 修改css-loader
说明这是为了方便定位css文件，以便在浏览器中修改  
进入node_modules/css-loader/dist/index.js  
注释掉如下代码  
```javascript
const moduleCode = `// Module\nexports.push([module.id, ${cssAsString}, ""${result.map ? `,${result.map}` : ''}]);\n\n`;
```

添加如下代码到对应的  
```javascript
let map = null
if (result.map) {
  map = result.map.toJSON()
  map.sources = map.sources.map((src) => 'file:///' + src.replace(/\\/g,'/'))
}
const moduleCode = `// Module\nexports.push([module.id, ${cssAsString}, ""${result.map ? `,${JSON.stringify(map)}` : ''}]);\n\n`;
```

通过chrome修改定位css，然后修改文件，这个修改会保存到本地  
![](__resource__/sass.gif)

## 其他建议
1.css使用BEM规范，[参考链接](https://seesparkbox.com/foundry/bem_by_example)