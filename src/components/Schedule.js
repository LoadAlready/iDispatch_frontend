import React, { Component } from 'react'
import { connect } from 'react-redux'

import UUID from 'uuid'

import { setCurrentlySelectedJob } from '../actions'


const mapDispatchToProps = (dispatch) => ({
    selectJob: (job) => dispatch(setCurrentlySelectedJob(job))
})

class Schedule extends Component {
    handleItemClick = (job) => {
        console.log(job)
        this.props.selectJob(job)
    }

    mapUpcomingJobs = () => {
        //filter jobs based on current date/time, only show upcoming
        let futureAppointments = this.props.jobs.filter((job) => {
            let timeArray = job.schedule_time.split(':');
            var newTime = new Date(String(job.schedule_date_year),
                String(job.schedule_date_month),
                String(job.schedule_date_day),
                timeArray[0],
                timeArray[1]);
            return Date.parse(newTime) > Date.now()
        })
        //sort jobs based on most recent first
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
        // return our list items with only the 5 most recent upcoming jobs
        return sortedFutureAppointments.slice(0, 20).map((job) => {
            let counter = 1000;
            let shortenedDate = new Date(job.schedule_date_year, job.schedule_date_month, job.schedule_date_day);
            return <li  key={UUID()} 
                        jobid={job.id} 
                        onClick={this.handleItemClick.bind(null, job)} 
                        className="padding-bottom" id={counter ++}
                    ><strong jobid={job.id}>Database id:</strong> {job.id}<br /><strong jobid={job.id}>Job Number:</strong> {job.job_number} <br />{shortenedDate.toDateString()} <br /> <strong jobid={job.id}>Time:{job.schedule_time}</strong>
                    </li>
        })
    }

  render() {
    return (
    <div className="upcoming-jobs">
        <h3>Upcoming Jobs</h3>
            <ul>
                {this.mapUpcomingJobs()}
            </ul>
    </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(Schedule)