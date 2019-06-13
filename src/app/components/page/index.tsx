import * as React from 'react'

export interface IAsyncComponent {
  /**
   * 加载函数或者页面组件
   */
  componen: React.ComponentClass<any>,
  /**
   * 子路由
   */
  children?: any,
}

/**
 * 页面组件
 */
export default function page (p: IAsyncComponent) {
  return function MyComponent (): any {
    const PageComponent = p.componen
    return (
      <PageComponent>
        {p.children}
      </PageComponent>
    )
  }
}
