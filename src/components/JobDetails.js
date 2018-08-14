import React, { Component } from 'react'
import { connect } from 'react-redux'


const mapStateToProps = (state) => ({
  currentlySelectedJob: state.currentlySelectedJob,
})

class JobDetails extends Component {
  constructor(props){
    super(props)

    this.state = {
      fetchedJobInfo: null,
    }
  }
  componentDidUpdate(prevProps, prevState){
    if(this.props.currentlySelectedJob !== prevProps.currentlySelectedJob){
      
      this.fetchJobInfo()
      
    } 
  }


  fetchJobInfo = () => {
    let JOBURL = `http://localhost:3000/jobs/` + this.props.currentlySelectedJob.id;

    fetch(JOBURL).then(r => r.json()).then(data => this.setState({ fetchedJobInfo: data}))
  }

  mapMaterialItems = () => {
    let materialArray = [...this.state.fetchedJobInfo.material_pos]
    return materialArray.map(function (material) {
      return <li><strong>Material PO:</strong> {material.id} <strong>- Description:</strong> {material.description} </li>
    })
  }

  mapJobCrewItems = () => {
    let counter = 0
    let crewArray = [...this.state.fetchedJobInfo.users]
    return crewArray.map(function (crew) {
      counter ++; 
      return <li><strong>Technician {counter}:</strong> {crew.firstname} {crew.lastname}</li>
    })
  }


  render() {
    if(this.state.fetchedJobInfo !== null){
      console.log("job details", this.state.fetchedJobInfo)
      return (
        <div className="job-details">
          <h2 className="text-center">Job Details</h2>
          <ul>
            <li><strong>Job ID:</strong> {this.state.fetchedJobInfo.id}</li>
            <li><strong>Client Name:</strong> {this.state.fetchedJobInfo.client.name}</li>
            <li><strong>Client Address:</strong> {this.state.fetchedJobInfo.client.street_address}, {this.state.fetchedJobInfo.client.city}. {this.state.fetchedJobInfo.client.state}</li>
            {this.mapJobCrewItems()}
            <li><strong>Job Description:</strong> {this.state.fetchedJobInfo.description}</li>
            <li><strong>Scheduled to arrive:</strong> CREATE HELP TO CONVERT TIME AND USE IN ALL COMPONENTS</li>
            <li><strong>Special Notes:</strong> {this.state.fetchedJobInfo.job_notes}</li>
            {this.mapMaterialItems()}
          </ul>
          <div className="center-content">
            <button>go to current job</button>
          </div>
        </div>
      )
    } else {
      this.fetchJobInfo()
        return (
        <h1>Loading</h1>
    )}
  }
}

export default connect(mapStateToProps)(JobDetails)