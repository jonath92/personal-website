import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import './css/app.css';


export default function App() {
  return (
    <div>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
      </Router>
    </div>
  )
}
