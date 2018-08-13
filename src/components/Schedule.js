import React, { Component } from 'react'
import UUID from 'uuid'

export default class Schedule extends Component {

    mapNextFiveJobs = () => {
        let newDate = null;
        let futureAppointments = this.props.jobs.filter((job) => {
            let timeArray = job.schedule_time.split(':');
            var newTime = new Date(String(job.schedule_date_year),
                String(job.schedule_date_month),
                String(job.schedule_date_day),
                timeArray[0],
                timeArray[1]);
            newDate = newTime.toUTCString().split(' ').slice(0, 5).join(' ');
            return Date.parse(newTime) > Date.now()
        })


        return futureAppointments.slice(0, 5).map((job) => {
            return <li key={UUID()} className="padding-bottom"><strong>Job Number:</strong> {job.job_number} <br /> {newDate}</li>
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