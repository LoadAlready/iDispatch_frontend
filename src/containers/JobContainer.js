import React, { Component } from 'react'
import { Provider } from 'react-redux'

import SelectedJob from '../containers/SelectedJob'

import PreviousJobsList from '../components/PreviousJobsList'
import Schedule from '../components/Schedule'
import Map from '../components/Map'

export default class JobContainer extends Component {
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
