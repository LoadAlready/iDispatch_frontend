import React from 'react'

export default () => {
  return (
    <div className="ui secondary  menu">
      <a className="item">
        Home
      </a>
      <a className="item">
        Create new ticket
      </a>
      <a className="item">
        Profile
      </a>
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
