import React from 'react'

// export default React.createClass({
//   render() {
//     return <div>John Coty Embry</div>
//   }
// })

// modules/App.js
import { Link } from 'react-router'
import fixheadertable from './fixheadertable.js'

// export default React.createClass({
//   render() {
//     return (
//       <div>
//         <h1>React Router Tutorial</h1>
//         <ul role="nav">
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/repos">Repos</Link></li>
//         </ul>
//       </div>
//     )
//   }
// })

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Ghettohub Issues</h1>
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/repos">Repos</Link></li>
          <li><Link to="/table">Table</Link></li>
        </ul>

        {/* add this */}
        <div>{this.props.children}</div>

      </div>
    )
  }
})