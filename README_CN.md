* [English version](./README.md)  
## 开发环境
* 操作系统：window 10
* nodejs：10.15.0
* npm：6.9.0
* yarn：1.9.2
* 开发工具：JetBrains WebStorm 2019.1.1 x64
* 浏览器：chrome 74.0.3729.131 stable

## 说明
自搭的框架全部使用ts代码实现，包括webpack和gulp这些打包工具代码，总结就是  
* 技术框架：`ts`+`yarn`+`wepack`+`gulp`+`react`+`redux`+`react-router`+`immutable`+`sass`
* 热加载：特性使用`webpack-dev-server`作为开发服务，并且实现热加载
* 防止缓存：生产环境生成的js和雪碧图都带有hash，防止了重新发布项目的时候浏览器保留之前的缓存
* 标准化sass：在`.stylelintrc.json`使用`stylelint-scss`标准化sass格式
* 标准化ts：在`tslint`使用`tslint-config-standard`使ts代码标准化

## 第一次运行项目
在项目根目录执行`yarn`

## 调试
* `npm run devSprites`：执行打包雪碧图，每次有加入新图片才运行
* `npm run devSrc`：执行编译出index.html，不必多次运行，测试实体文件才用
* `npm run devServer`：启动webpack-dev-server，然后打开 http://localhost:19080  
![](__resource__/3.png)

## 开发
* `npm run sprites`：打包生产环境的雪碧图，雪碧图css文件，图片文件带有hash
* `npm run src`：打包生产环境的js，js文件都带有hash。效果：  
![](__resource__/1.png)  
![](__resource__/2.png)

## 目录说明
* `config-ts/index.ts`：主要webpack和gulp的配置
* `config-ts/tsconfig-commom.json`：通用的ts配置

* `webpack-ts/webpack.server.config.ts`：启动webpack-dev-server的配置文件
* `webpack-ts/webpack.src.config.ts`：编译出实际的文件，分开开发环境编译和生产环境编译

* `webpack-ts/plugins/deleteFiles.ts`：清空某个目录的文件
* `webpack-ts/plugins/insterDataToHtml`：插入webpack生成的js到html文件中，把雪碧图的url插入到html文件中

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
1.css使用BEM规范，参考 https://seesparkbox.com/foundry/bem_by_example  