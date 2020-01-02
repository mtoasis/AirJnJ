import React, { Fragment } from 'react'
import Dashboard from './pages/dashboard/dashboard.component'
import {GlobalStyle} from './global.styles'


function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Dashboard />
    </Fragment>

  );
}

export default App;
