import React, { Component } from 'react'
import { Provider } from 'react-redux'

import SelectedJob from '../containers/SelectedJob'

import PreviousJobsList from '../components/PreviousJobsList'
import Schedule from '../components/Schedule'
import Map from '../components/Map'

//testing
import TableExamplePagination from '../components/JobList'

export default class JobContainer extends Component {
  render() {
    return (
      <fragment>
      <div className="job-container">
          <PreviousJobsList />
          <SelectedJob />
          <Schedule />
      </div>
      <div>
        <TableExamplePagination />
      </div>
      </fragment>
    )
  }
}
