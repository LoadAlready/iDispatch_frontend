import React, { Component } from 'react'

import JobDetails from '../components/JobDetails'
import Map from '../components/Map'

export default class SelectedJob extends Component {
  render() {
    return (
      <div className="selected-job">
        <JobDetails />
        <Map />
      </div>
    )
  }
}
