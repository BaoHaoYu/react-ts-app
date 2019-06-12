import * as React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import dispatch, { IDispatchProps } from 'src/app/util/decorators/addDispatch'

interface IAsyncRouteProps {
  load: any
}

@dispatch
class AsyncRoute extends React.Component<IAsyncRouteProps & IDispatchProps & RouteProps> {
  public static displayName?: string = ''
  public state: { Component?: any } = {
    Component: undefined
  }

  public async componentWillMount () {
    const { Component } = this.state
    if (!Component) {
      const PageComponent = await this.props.load()
      if (this && this.setState) {
        AsyncRoute.displayName = PageComponent.default.displayName
        this.setState({ Component: PageComponent.default })
      }
    }
  }

  public renderRoute = () => {
    const { Component } = this.state
    return (
        <Component>
          {this.props.children}
        </Component>
    )
  }

  public render () {
    const { Component } = this.state
    if (!Component) return ''
    return (
        <Route
            sensitive={this.props.sensitive}
            location={this.props.location}
            strict={this.props.strict}
            exact={this.props.exact}
            path={this.props.path}
            render={this.renderRoute}
        />
    )
  }
}

export default (AsyncRoute as React.ComponentClass<IAsyncRouteProps & RouteProps>)
