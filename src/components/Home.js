import React, { Component } from 'react'
import { connect } from 'react-redux'


import SelectedJob from '../containers/SelectedJob'
import PreviousJobsList from '../components/PreviousJobsList'
import Schedule from '../components/Schedule'

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
})

class Home extends Component {
  constructor(){
    super()

    this.state = {
      currentJob: null,
      sortedJobsArray: [],

    }
  }

  
  render() {
    console.log("xyz",this.props.userInfo)
    if(this.props.userInfo !== null){
      return (
        <div className="job-container">
          <PreviousJobsList jobs={this.props.userInfo.userInfo.jobs}/>
          <SelectedJob />
          <Schedule />
        </div>
      )
    } else {
        return (
          <h1>Loading</h1>
      )
    }

  }
}

export default connect(mapStateToProps)(Home)
