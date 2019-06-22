import { connect } from 'react-redux'

/**
 * 为props加入dispatch，执行dispatch(someActons就可以刷新组件)
 */
export default function addDispatch(target: any): any {
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(target)
}

function mapStateToProps(state: any) {
  return { state }
}

function mapDispatchToProps(dispatch: any): IDispatchProps {
  return {
    dispatch,
  }
}

export interface IDispatchProps {
  dispatch: any
}
