import React, { Component } from 'react'

import Profile from '../components/Profile'
import Schedule from '../components/Schedule';

export default class ProfileContainer extends Component {
  render() {
    return (
      <div className="profile-container">
        <Profile />
      </div>
    )
  }
}
