import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCurrentlySelectedJob } from '../actions'

import JobDetails from '../components/JobDetails'
import AdditionalInfo from '../components/AdditionalInfo'


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
        <div className="column-cointainers">
          <div className="selected-job">
            <h2 className="text-center job-detail-title">Job Details</h2>
            <JobDetails job={this.props.currentlySelectedJob}/>
            <AdditionalInfo />
          </div>
        </div>
      )
    } return (
        <h1>loading</h1>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedJob)