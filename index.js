import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
// render(<App/>, document.getElementById('app'))

import { Router, Route, hashHistory } from 'react-router'

// render((
//   <Router history={hashHistory}>
//     <Route path="/" component={App}/>
//   </Router>
// ), document.getElementById('app'))


import About from './modules/About'
import Repos from './modules/Repos'
import Table from './modules/Table'

// render((
//   <Router history={hashHistory}>
//     <Route path="/" component={App}/>
//     {/* add the routes here */}
//     <Route path="/repos" component={Repos}/>
//     <Route path="/about" component={About}/>
//   </Router>
// ), document.getElementById('app'))


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      {/* make them children of `App` */}
      <Route path="/repos" component={Repos}/>
      <Route path="/about" component={About}/>
      <Route path="/table" component={Table}/>
    </Route>
  </Router>
), document.getElementById('app'))