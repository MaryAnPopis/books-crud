import React, { Component } from 'react'

import Routes from '../Routes'
import { GlobalStyles } from '../styles/globalStyles'

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyles />
        <Routes />
      </div>
    )
  }
}

export default App
