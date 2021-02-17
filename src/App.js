import React from 'react'
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Disclaimer from './pages/Disclaimer'
import Copyrights from './pages/Copyrights'

import './css/app.css';
import ScrollToTop from 'react-router-scroll-top'

export default function App() {
  return (
    <div>
      <HashRouter>
        <ScrollToTop>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/disclaimer' component={Disclaimer} />
          <Route exact path='/copyrights' component={Copyrights} />
        </ScrollToTop>


      </HashRouter>
    </div>
  )
}
