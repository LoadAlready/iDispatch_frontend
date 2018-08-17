import React, { Component } from 'react'
import { connect } from 'react-redux'

import UUID from 'uuid'

import { setCurrentDetail } from '../actions'

const mapStateToProps = (state) => ({
  currentlySelectedJob: state.currentlySelectedJob,
  currentDetail: state.currentDetail,
})

const mapDispatchToProps = (dispatch) => ({
  selectDetail: (detail) => dispatch(setCurrentDetail(detail))
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

    fetch(JOBURL).then(r => r.json()).then(data => this.setState({ fetchedJobInfo: data}));
  }

  mapMaterialItems = () => {
    let materialArray = [...this.state.fetchedJobInfo.material_pos];
    return materialArray.map( (material) => {
      return <li key={UUID()}><strong>Material PO:</strong> {material.id} <strong>- Description:</strong> {material.description}
                  <button className="job-detail-button tick"
                    onClick={(event) => this.handleDetailClick(event, material, "material")}> 
                  </button>
            </li>
    })
  }

  mapJobCrewItems = () => {
    let counter = 0
    let crewArray = [...this.state.fetchedJobInfo.users]
    return crewArray.map((crew) => {
      counter ++; 
      return <li key={UUID()}><strong>Technician {counter}:</strong> {crew.firstname} {crew.lastname}              
                  <button
                    className="job-detail-button tick"
                    onClick={(event) => this.handleDetailClick(event, crew, "tech")}> 
                  </button>
              </li>
    })
  }

  handleCurrentJobClick = (event) => {
    document.getElementById("1000").click()
  }

  handleDetailClick = (event, detailObject, detailType) => {
    detailObject.detailType = detailType;
    this.props.selectDetail(detailObject);
  }


  render() {
    if(this.state.fetchedJobInfo !== null){
      return (
        <div className="job-details">
          <ul>
            <li key={UUID()}><strong>Job ID:</strong> {this.state.fetchedJobInfo.id}</li>
            <li key={UUID()}><strong>Client Name:</strong> {this.state.fetchedJobInfo.client.name} 
                <button 
                  className="job-detail-button tick"
                  onClick={(event) => this.handleDetailClick(event, this.state.fetchedJobInfo.client, "client")}> 
               </button>
            </li>
            <li key={UUID()}><strong>Client Address:</strong> {this.state.fetchedJobInfo.client.street_address}, {this.state.fetchedJobInfo.client.city}. {this.state.fetchedJobInfo.client.state}</li>
            {this.mapJobCrewItems()}
            <li key={UUID()}><strong>Job Description:</strong> {this.state.fetchedJobInfo.description}</li>
            <li key={UUID()}><strong>Scheduled to arrive:</strong> CREATE HELP TO CONVERT TIME AND USE IN ALL COMPONENTS</li>
            <li key={UUID()}><strong>Special Notes:</strong> {this.state.fetchedJobInfo.job_notes}</li>
            {this.mapMaterialItems()}
          </ul>
          <div className="center-content">
            <button onClick={ (event) => this.handleCurrentJobClick(event) }>CURRENT JOB</button>
          </div>
        </div>
      )
    }  {
      this.fetchJobInfo()
        return (
        <h1>Loading</h1>
    )}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobDetails)