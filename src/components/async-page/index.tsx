import { defaultTo } from 'lodash-es'
import * as React from 'react'
import dispatch from 'src/util/decorators/addDispatch'

interface IProps {
  dispatch: any
}

/**
 * 异步方法加载组件
 */
type loadAsync = () => Promise<{ default: React.ComponentType<any> }>

export interface IAsyncComponent {
  /**
   * 加载函数或者页面组件
   */
  load: loadAsync | React.ComponentType<any>,
  /**
   * 子路由
   */
  children?: any,
  /**
   * 是否异步，默认true
   */
  async?: boolean
}

/**
 * 异步加载页面组件
 * @param {IAsyncComponent} p
 */
export default function asyncPage (p: IAsyncComponent) {
  const async = defaultTo(p.async, true)

  class AsyncComponent extends React.Component<IProps> {
    public static displayName?: string = ''

    public state: { Component?: React.ComponentType<any> } = {
      Component: async ? undefined : p.load as React.ComponentType<any>
    }

    public async componentWillMount () {
      const { Component } = this.state
      if (!Component) {
        const PageComponent = await (p.load as loadAsync)()
        if (this && this.setState) {
          AsyncComponent.displayName = PageComponent.default.displayName
          this.setState({ Component: PageComponent.default })
        }
      }
    }

    public render () {
      const { Component } = this.state
      if (!Component) return ''
      return (
          <Component {...this.props} >
            {p.children}
          </Component>
      )
    }
  }

  return dispatch(AsyncComponent)
}
