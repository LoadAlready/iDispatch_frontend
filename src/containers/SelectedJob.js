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
        <div className="selected-job">
          <JobDetails job={this.props.currentlySelectedJob}/>
          <AdditionalInfo />
        </div>
      )
    } return (
        <h1>loading</h1>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedJob)