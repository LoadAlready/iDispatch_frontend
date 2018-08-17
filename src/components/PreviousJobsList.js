import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List } from 'semantic-ui-react'

import uuid from 'uuid'

import { setCurrentlySelectedJob } from '../actions'
import PreviousJobItem from './PreviousJobItem'

const mapDispatchToProps = (dispatch) => ({
  selectJob: (job) => dispatch(setCurrentlySelectedJob(job))
})

class PreviousJobsList extends Component {
  handleItemClick = (props) => {
    this.props.selectJob(props.job);
  }

  mapLastFivePreviousJobs = () => {
    let previousAppointments = this.props.jobs.filter((job) => {
      let timeArray = job.schedule_time.split(':');
      var newTime = new Date(String(job.schedule_date_year), 
                             String(job.schedule_date_month), 
                             String(job.schedule_date_day), 
                             timeArray[0], 
                             timeArray[1]);   
      return Date.parse(newTime) < Date.now();
    })
    let sortedpreviousAppointments = previousAppointments.sort((a, b) => {
      let aTimeArray = a.schedule_time.split(':');
      let bTimeArray = b.schedule_time.split(':');
      
      let bDate = new Date(String(b.schedule_date_year),
                            String(b.schedule_date_month),
                            String(b.schedule_date_day),
                            bTimeArray[0],
                            bTimeArray[1]);
      let aDate = new Date(String(a.schedule_date_year),
                            String(a.schedule_date_month),
                            String(a.schedule_date_day),
                            aTimeArray[0],
                            aTimeArray[1]);
      return  bDate - aDate;
    });
    return sortedpreviousAppointments.slice(0, 20).map( (job) => {
      return  <PreviousJobItem handleItemClick={this.handleItemClick} key={uuid()} job={job} />;
    })
  }

  render() {
    return (
      <div>
        <h3 className="job-detail-title">Completed Jobs</h3>
        <div className="previous-jobs">
          <List divided>
              {this.mapLastFivePreviousJobs()}
          </List>
        </div>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(PreviousJobsList)