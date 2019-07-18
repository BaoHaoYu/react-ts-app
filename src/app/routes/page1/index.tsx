import * as React from 'react'
import { connect } from 'react-redux'
class Page1 extends React.Component<{ dispatch: any }> {
  public render () {
    return <div>this is page1</div>
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
)(Page1)
