import React from 'react'
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home'
import Disclaimer from './pages/Disclaimer'
import Copyrights from './pages/Copyrights'

import './css/app.css';
import ScrollToTop from 'react-router-scroll-top'
import Joplin from './pages/Joplin';

export default function App() {
  return (
    <Router>
      <ScrollToTop>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/disclaimer' component={Disclaimer} />
        <Route exact path='/copyrights' component={Copyrights} />
        <Route exact path='/joplin' component={Joplin} />
      </ScrollToTop>
    </Router>
  )
}
