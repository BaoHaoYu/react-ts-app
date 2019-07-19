import * as React from 'react'
import { connect } from 'react-redux'

class Page2 extends React.Component<{ dispatch: any }> {
  public render() {
    return <div>this is page2</div>
  }
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch: any) {
  return {
    dispatch,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page2)
