import React, { Component } from 'react'
import uuid from 'uuid'


import PreviousJobItem from './PreviousJobItem'

export default class PreviousJobsList extends Component {

  mapLastFivePreviousJobs = () => {
    let previousAppointments = this.props.jobs.filter((job) => {
      let timeArray = job.schedule_time.split(':');
      var newTime = new Date(String(job.schedule_date_year), 
                             String(job.schedule_date_month), 
                             String(job.schedule_date_day), 
                             timeArray[0], 
                             timeArray[1]);   
      return Date.parse(newTime) < Date.now()
    })
    
    return previousAppointments.slice(0, 5).map( (job) => {
      return (<PreviousJobItem key={uuid()}job={job}/>)
    })
  }

  render() {
    return (
      <div className="previous-jobs">
        <h3>Recent Jobs</h3>
          <ul>
            {this.mapLastFivePreviousJobs()}
          </ul>
      </div>
    )
  }
}

