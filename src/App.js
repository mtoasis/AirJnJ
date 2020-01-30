import React, { Fragment } from 'react'
import Dashboard from './pages/dashboard/dashboard.component'
import LookAround from './components/look-around/look-around.component'
import PlusPlaces from './components/plus-places/plus-places.component'
import AdventureIntro from './components/adventure-intro/adventure-intro.component'

import {GlobalStyle} from './global.styles'


function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Dashboard />
      <LookAround />
      <PlusPlaces />
      <AdventureIntro />
    </Fragment>

  );
}

export default App;
