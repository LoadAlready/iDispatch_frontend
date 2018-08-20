import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List } from 'semantic-ui-react'

import UUID from 'uuid'

import { setCurrentlySelectedJob } from '../actions'


const mapDispatchToProps = (dispatch) => ({
    selectJob: (job) => dispatch(setCurrentlySelectedJob(job))
})

class Schedule extends Component {
    handleItemClick = (job) => {
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
        return sortedFutureAppointments.slice(0, 125).map((job) => {
            let counter = 1000;
            let shortenedDate = new Date(job.schedule_date_year, job.schedule_date_month, job.schedule_date_day);
            return (
                <List.Item key={UUID()}
                    jobid={job.id}
                    onClick={this.handleItemClick.bind(null, job)}
                    className="padding-bottom" id={counter++}
                >
                    <List.Content floated='right' className='jobs-list-right'>
                        <List.Header floated='right'>
                            <strong jobid={job.id}>Client ID: </strong>{job.client_id}
                        </List.Header>
                        <List.Description>
                            <strong jobid={job.id}>Refrence:</strong>  {job.refrence}
                        </List.Description>
                    </List.Content>

                    <List.Icon name='address card outline' size='large' verticalAlign='middle' className='jobs-list-left'/>
                    
                    <List.Content>
                        <List.Header>
                            <strong jobid={job.id} >Job Number: </strong> {job.job_number}
                        </List.Header>
                        <List.Description>
                            {shortenedDate.toDateString()} <br /> <strong jobid={job.id}>Time: {job.schedule_time}</strong>
                        </List.Description>
                    </List.Content>

                </List.Item>
            )
        })
    }

  render() {
    return (
        <div className="column-containers">
            <h3 className="job-detail-title">Upcoming Jobs</h3>
            <div className="upcoming-jobs">
                <List divided>
                    {this.mapUpcomingJobs()}
                </List>
            </div>
        </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(Schedule)