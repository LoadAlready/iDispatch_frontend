import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import Search from './Search'
import MenuDropdown from './MenuDropdown'

class Navbar extends Component {
  render (){
    return (
        <div className="ui secondary  menu ">
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
            <MenuDropdown />
            <div className="item">
              <Search />
            </div>
          <a href="/" className="ui item active">
              Logout
            </a>
          </div>
        </div>
    )
  }
}
export default withRouter(Navbar)
