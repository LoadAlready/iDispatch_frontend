import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCurrentlySelectedJob } from '../actions'


import SelectedJob from '../containers/SelectedJob'
import PreviousJobsList from '../components/PreviousJobsList'
import Schedule from '../components/Schedule'
import Map from '../components/Map'

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
  currentlySelectedJob: state.currentlySelectedJob,
})

const mapDispatchToProps = (dispatch) => ({
  currentJobSet: (job) => dispatch(setCurrentlySelectedJob(job))
})

class Home extends Component {


  mapAndSortUpcomingJobs = () => {
    //filter jobs based on current date/time, only show upcoming
    let futureAppointments = this.props.userInfo.userInfo.jobs.filter((job) => {
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
    return sortedFutureAppointments[0]
  }

  setInitialCurrentJob = () => {
    if(this.props.currentlySelectedJob ===  null){
      this.props.currentJobSet(this.mapAndSortUpcomingJobs())
    }
  }

  
  render() {
    if(this.props.userInfo !== null){
      {this.setInitialCurrentJob()}
      return (
        <div className="job-container">
          <div className="column-containers">
            <PreviousJobsList jobs={this.props.userInfo.userInfo.jobs}/>
            <Map />
          </div>
          <SelectedJob />
          <Schedule jobs={this.props.userInfo.userInfo.jobs}/>
        </div>
      )
    } else {
        return (
          <h1>Loading</h1>
      )
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
