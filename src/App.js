import React, { Fragment } from 'react'
import Dashboard from './pages/dashboard/dashboard.component'
import LookAround from './components/look-around/look-around.component'
import {GlobalStyle} from './global.styles'


function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Dashboard />
      <LookAround />
    </Fragment>

  );
}

export default App;
