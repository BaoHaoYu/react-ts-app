import * as React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import asyncLoad, { IAsyncComponent } from '../components/async-page'

export interface IRouteItem extends RouteProps {
  /**
   * RouteProps
   */
  route?: RouteProps,
  /**
   * 异步组建
   */
  async: IAsyncComponent
  /**
   * 子路由数据
   */
  children?: IRouteItem[]
}

/**
 * 根据IRouteItem生成路由组件
 * @param {} p
 */
function setConfig (p: IRouteItem[]) {
  // 最为Route的key
  let keyIndex = 0

  // 递归遍历IRouteItem
  function _deep (deepChildren: IRouteItem[]) {
    const _list: any[] = []
    deepChildren.map((item: IRouteItem) => {
      keyIndex = keyIndex + 1
      if (item.route) {
        const component = asyncLoad({
          ...item.async,
          children: item.children && _deep(item.children)
        })
        _list.push(
            <Route
                {...item.route}
                key={keyIndex}
                component={component}
            />
        )
      }
    })
    return _list
  }

  return _deep(p)
}

export default setConfig
