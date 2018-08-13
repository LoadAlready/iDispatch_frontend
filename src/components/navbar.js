import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends Component {
  render (){
  return (
    <div className="ui secondary  menu">
      <Link to="/" className="item">
        Home
      </Link>
      <Link to="/ticket" className="item">
        Create new ticket
      </Link>
      <Link to="/profile" className="item">
        Profile
      </Link>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <input type="text" placeholder="Search..."></input>
            <i className="search link icon"></i>
          </div>
        </div>
        <a className="ui item active">
          Logout
        </a>
      </div>
    </div>
  )
}
}
export default withRouter(Navbar)

