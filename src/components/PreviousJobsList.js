import React, { Component } from 'react'
import uuid from 'uuid'

//FOR DUMMY DATA
import jobs from '../data'

import PreviousJobItem from './PreviousJobItem'

export default class PreviousJobsList extends Component {

  mapLastFivePreviousJobs = () => {
    let previousAppointments = jobs.filter( job => job.appointment < Date.now()).sort(function (a, b) {
          return a.appointment - b.appointment
      })
    
    return previousAppointments.slice(0, 5).map( (job) => {
      let date = new Date(parseFloat(job.appointment))
      return (<PreviousJobItem key={uuid()}job={job}/>)
    })
  }

  render() {
    return (
      <div className="previous-jobs">
        <h3>Previous Jobs Content</h3>
          <ul>
            {this.mapLastFivePreviousJobs()}
          </ul>
      </div>
    )
  }
}
