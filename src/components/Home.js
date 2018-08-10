import React, { Component } from 'react'

import SelectedJob from '../containers/SelectedJob'
import PreviousJobsList from '../components/PreviousJobsList'
import Schedule from '../components/Schedule'

export default class Home extends Component {
  render() {
    return (
      <div className="job-container">
        <PreviousJobsList />
        <SelectedJob />
        <Schedule />
      </div>
    )
  }
}
