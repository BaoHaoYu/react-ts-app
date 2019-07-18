import cn from 'classnames'
import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// @ts-ignore
import s from './style/index.scss'

class PageMain extends React.Component<any> {
  public render () {
    return (
      <div className={cn(s.main)}>
        <p className={cn(s.main__title)}>pageMain</p>
        <div className={cn(s.main__links)}>
          <Link className={cn(s.main__link1)} to={'/page1'}>
            page1
          </Link>
          <Link className={cn(s.main__link2)} to={'/page2'}>
            page2
          </Link>
        </div>
        <div className={cn(s.main__child)}>{this.props.children}</div>
      </div>
    )
  }
}

function mapStateToProps () {
  return {}
}

function mapDispatchToProps (dispatch: any) {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageMain)
