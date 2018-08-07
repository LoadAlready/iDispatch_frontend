import React from 'react'

export default () => {
  return (
    <div class="ui secondary  menu">
      <a class="item">
        Home
      </a>
      <a class="item">
        Create new ticket
      </a>
      <a class="item">
        Profile
      </a>
      <div class="right menu">
        <div class="item">
          <div class="ui icon input">
            <input type="text" placeholder="Search..."></input>
            <i class="search link icon"></i>
          </div>
        </div>
        <a class="ui item active">
          Logout
        </a>
      </div>
    </div>
  )
}
