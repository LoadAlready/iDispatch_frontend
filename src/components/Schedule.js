import React, { Component } from 'react'
import UUID from 'uuid'

import jobs from '../data'

export default class Schedule extends Component {

    mapNextFiveJobs = () => {
        //filter jobs that are scheduled after the current time then sort the array based on next scheduled
        let futureAppointments = jobs.filter( job => job.appointment >= Date.now()).sort(function (a, b) {
            return a.appointment - b.appointment
        })
        //Converts milliseconds to date, creates LI
        return futureAppointments.slice(0,5).map( (job) => {
            let date = new Date(parseFloat(job.appointment))
            return (
                <li key={UUID()} className="padding-bottom">{job.clientName} <br /> {date.toLocaleString()}</li>
            )
        })
    }

  render() {
    return (
    <div className="upcoming-jobs">
        <h3>Upcoming Jobs</h3>
            <ul>
                {this.mapNextFiveJobs()}
            </ul>
    </div>
    )
  }
}