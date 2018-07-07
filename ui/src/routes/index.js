import React from 'react'
import {Link } from 'react-router-dom'

import ShowReport from './ShowReport.js';
class App extends React.Component {
  ...

  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <button onClick={() => this.nextPath('/the/path') }>
        change path
      </button>
    );
  }
}

export default withRouter(App);
