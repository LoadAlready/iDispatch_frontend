import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCurrentlySelectedJob } from '../actions'

import JobDetails from '../components/JobDetails'
import Map from '../components/Map'


const mapStateToProps = (state) => ({
  currentlySelectedJob: state.currentlySelectedJob,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentJob: (job) => dispatch(setCurrentlySelectedJob(job))
})

class SelectedJob extends Component {
  
  render() {
    if(this.props.job !== null){
      return (
        <div className="selected-job">
          <JobDetails job={this.props.currentlySelectedJob}/>
          <Map />
        </div>
      )
    } else return (
            <h1>loading</h1>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedJob)