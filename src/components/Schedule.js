import React, { Component } from 'react'
import UUID from 'uuid'
import { debug } from 'util';

export default class Schedule extends Component {

    mapNextFiveJobs = () => {
        let futureAppointments = this.props.jobs.filter((job) => {
            let timeArray = job.schedule_time.split(':');
            var newTime = new Date(String(job.schedule_date_year),
                String(job.schedule_date_month),
                String(job.schedule_date_day),
                timeArray[0],
                timeArray[1]);
            return Date.parse(newTime) > Date.now()
        })
        let sortedFutureAppointments = futureAppointments.sort((a, b) => {
            let aTimeArray = a.schedule_time.split(':');
            let bTimeArray = b.schedule_time.split(':');

            let aDate = new Date(String(a.schedule_date_year),
                String(a.schedule_date_month),
                String(a.schedule_date_day),
                aTimeArray[0],
                aTimeArray[1]);
            let bDate = new Date(String(b.schedule_date_year),
                String(b.schedule_date_month),
                String(b.schedule_date_day),
                bTimeArray[0],
                bTimeArray[1]);    
            return aDate - bDate
        });

        return sortedFutureAppointments.slice(0, 5).map((job) => {
            let shortenedDate = new Date(job.schedule_date_year, job.schedule_date_month, job.schedule_date_day);
            return <li key={UUID()} className="padding-bottom"><strong>Job Number:</strong> {job.job_number} <br />{shortenedDate.toDateString()}</li>
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