import React, { Component } from 'react'
import jobs from '../data'

export default class Schedule extends Component {

    mapNextFiveJobs = () => {
        let convertedAppointment = jobs.sort(function (a, b) {
            return new Date(parseFloat(b.appointment)) - new Date(parseFloat(a.appointment))
        })

        return convertedAppointment.slice(0,5).map( (job) => {
            let date = new Date(parseFloat(job.appointment))
            return (
                <li className="padding-bottom">{job.clientName} <br /> {date.toLocaleString()}</li>
            )
        })
    }

  render() {
    return (
    <div className="schedule">
        Schedule content
        <ul>
            {this.mapNextFiveJobs()}
        </ul>
    </div>
    )
  }
}


