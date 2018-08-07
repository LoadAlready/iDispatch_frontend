import React, { Component } from 'react'
import uuid from 'uuid'

//FOR DUMMY DATA
import jobs from '../data'

import PreviousJobItem from './PreviousJobItem'

export default class PreviousJobsList extends Component {

  mapLastFivePreviousJobs = () => { 
    return jobs.map( (job) => {
      return (<PreviousJobItem key={uuid()}job={job}/>)
    })
  }

  render() {
    return (
      <div className="previous-jobs">
          Previous Jobs Content
        {this.mapLastFivePreviousJobs()}
      </div>
    )
  }
}
