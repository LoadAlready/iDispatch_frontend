import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Button, Form } from 'semantic-ui-react'
import { Scrollbars } from 'react-custom-scrollbars';

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
      editCurrentJobInfo: true,
      editedDescription: "",
      editedJob_notes: "",
      clocked_in: false,
    }
  }
  
  componentDidUpdate(prevProps, prevState){
    if(this.props.currentlySelectedJob !== prevProps.currentlySelectedJob){
      this.fetchJobInfo()
    } 
  }

  fetchJobInfo = () => {
    let JOBURL = `http://localhost:3000/jobs/` + this.props.currentlySelectedJob.id;

    fetch(JOBURL).then(r => r.json()).then(data => this.setState({ fetchedJobInfo: data }));
  }

  renderClockInOrOutButton = () => {
    if(this.state.clocked_in) {
      return < Button onClick={(event) => this.handleClockOut(event)}> CLOCK OUT</Button >
    }else if (!this.state.clocked_in) {
      return < Button onClick={(event) => this.handleClockIn(event)}> CLOCK IN</Button >
    }
  }

  mapMaterialItems = () => {
    let materialArray = [...this.state.fetchedJobInfo.material_pos];
    return materialArray.map( (material) => {
      return (
        <List.Item className='short-padding-top short-padding-bottom' key={UUID()}>
          <List.Content floated='right' className='jobs-list-right'>
            <List.Header floated='right'>
              <button className="job-detail-button tick"
                onClick={(event) => this.handleDetailClick(event, material, "material")}>
              </button>
            </List.Header>
          </List.Content>

          <List.Content className='jobs-list-left'>
            <List.Header>
              Material PO: {material.id}
            </List.Header>
            <List.Description>
              Description:{material.description}
            </List.Description>
          </List.Content>
        </List.Item>
      )
    })
  }

  mapJobCrewItems = () => {
    let counter = 0
    let crewArray = [...this.state.fetchedJobInfo.users]
    return crewArray.map((crew) => {
      counter ++; 
      return (
        <List.Item key={UUID()}>
          <List.Content floated='right' className='jobs-list-right'>
            <List.Header floated='right'>
              <button
                className="job-detail-button tick"
                onClick={(event) => this.handleDetailClick(event, crew, "tech")}>
              </button>
            </List.Header>
          </List.Content>

          <List.Content className='jobs-list-left'>
            <List.Content className='short-padding-top'>
              <strong>Technician {counter}:</strong> {crew.firstname} {crew.lastname}
            </List.Content>
          </List.Content>
        </List.Item>
      )
    })
  }

  handleCurrentJobClick = (event) => {
    document.getElementById("1000").click()
  }

  handleDetailClick = (event, detailObject, detailType) => {
    detailObject.detailType = detailType;
    this.props.selectDetail(detailObject);
  }

  handleEditButtonClick = event => {
    this.setState({
      editCurrentJobInfo: !this.state.editCurrentJobInfo
    })
  }

  handleSaveJobInfoClick = () => {
    let JOBURL = `http://localhost:3000/jobs/` + this.props.currentlySelectedJob.id;
    let postConfig = {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        job: {
          update: 'jobDetails',
          editedDescription: this.state.editedDescription,
          editedJobNotes: this.state.editedJob_notes
        }
      })
    }

    fetch(JOBURL, postConfig).then((res) => res.json()).then(obj => { this.setState({ fetchedJobInfo: obj }) }).then(() => { this.setState({ editCurrentJobInfo: !this.state.editCurrentJobInfo })})

  }

  handleDescriptionInputChange = (event) => {
    this.setState({
      editedDescription: event.target.value
    })
  }
  handleJobNotesInputChange = (event) => {
    this.setState({
      editedJob_notes: event.target.value
    })
  }
  handleClockIn = (event) => {
    let date = new Date()
    let time = `${date.getHours()}:${date.getMinutes()}`

    let JOBURL = `http://localhost:3000/jobs/` + this.props.currentlySelectedJob.id;
    let postConfig = {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        job: {
          update: 'timeIn',
          time_arrived: time
        }
      })
    }

    fetch(JOBURL, postConfig)

    this.setState({
      clocked_in: !this.state.clocked_in
    })
  }
  handleClockOut = (event) => {
    let date = new Date()
    let time = `${date.getHours()}:${date.getMinutes()}`

    let JOBURL = `http://localhost:3000/jobs/` + this.props.currentlySelectedJob.id;
    let postConfig = {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        job: {
          update: 'timeOut',
          time_completed: time
        }
      })
    }

    fetch(JOBURL, postConfig)

    this.setState({
      clocked_in: !this.state.clocked_in
    })
  }

  render() {
    if(this.state.fetchedJobInfo !== null){
      if(this.state.editCurrentJobInfo === true){
        return (
          <div className="job-details">
            <Scrollbars className="scroll">
            <br />
            <div className="center-content">
              <Button onClick={(event) => this.handleCurrentJobClick(event)}>RETURN TO CURRENT JOB</Button>
              {this.renderClockInOrOutButton()}
            </div>
              <List divided>
                <List.Item> 
                  <List.Content floated='right' className='jobs-list-right'>
                    <List.Header floated='right'>
                      Job Number: {this.state.fetchedJobInfo.job_number}
                    </List.Header>
                  </List.Content>

                  <List.Content className='jobs-list-left'>
                    <List.Header>
                      Job ID:  {this.state.fetchedJobInfo.id}
                    </List.Header>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Content floated='right' className='jobs-list-right'>
                    <button
                      className="job-detail-button tick"
                      onClick={(event) => this.handleDetailClick(event, this.state.fetchedJobInfo.client, "client")}>
                    </button>
                  </List.Content>
                  <List.Content className='jobs-list-left'>
                    <List.Content className='short-padding-top'>
                      <strong>Client Name: </strong> {this.state.fetchedJobInfo.client.name}
                    </List.Content>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Content className='jobs-list-left short-padding-top short-padding-bottom'>
                    <strong>Client Address:</strong> {this.state.fetchedJobInfo.client.street_address}, {this.state.fetchedJobInfo.client.city}. {this.state.fetchedJobInfo.client.state}
                  </List.Content>
                </List.Item>

                {this.mapJobCrewItems()}

                <List.Item>
                  <List.Content>
                    <strong className='jobs-list-left short-padding-top short-padding-bottom'>Job Description:</strong> {this.state.fetchedJobInfo.description}
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Content className='jobs-list-left short-padding-top short-padding-bottom'>
                    <strong>Scheduled to arrive:</strong> CREATE HELP TO CONVERT TIME AND USE IN ALL Components
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Content className='jobs-list-left short-padding-top short-padding-bottom'>
                    <strong>Special Notes:</strong> {this.state.fetchedJobInfo.job_notes}
                  </List.Content>
                </List.Item>
                {this.mapMaterialItems()}
                <br />
                <div className="center-content">
                  <Button onClick={(event) => this.handleEditButtonClick(event)}>EDIT THIS JOB</Button>
                </div>
              </List>
            <br />
            </Scrollbars>
          </div>
        )
      } else return (
        <div className="job-details">
          <br />
          <Scrollbars className="scroll">

          <div className="center-content">
            <Button fluid onClick={(event) => this.handleSaveJobInfoClick(event)}>SAVE JOB INFO</Button>
          </div>
          <List divided>
            <List.Item>
              <List.Content floated='right' className='jobs-list-right'>
                <List.Header floated='right'>
                  Job Number: {this.state.fetchedJobInfo.job_number}
                </List.Header>
              </List.Content>

              <List.Content className='jobs-list-left'>
                <List.Header>
                  Job ID:  {this.state.fetchedJobInfo.id}
                </List.Header>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Content floated='right' className='jobs-list-right'>
                <button
                  className="job-detail-button tick"
                  onClick={(event) => this.handleDetailClick(event, this.state.fetchedJobInfo.client, "client")}>
                </button>
              </List.Content>
              <List.Content className='jobs-list-left'>
                <List.Content className='short-padding-top'>
                  <strong>Client Name: </strong> {this.state.fetchedJobInfo.client.name}
                </List.Content>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Content className='jobs-list-left short-padding-top short-padding-bottom'>
                <strong>Client Address:</strong> {this.state.fetchedJobInfo.client.street_address}, {this.state.fetchedJobInfo.client.city}. {this.state.fetchedJobInfo.client.state}
              </List.Content>
            </List.Item>

            {this.mapJobCrewItems()}

            <List.Item>
              <Form>
                <Form.Input
                  onChange={(event) => { this.handleDescriptionInputChange(event) }} 
                  placeholder={this.state.fetchedJobInfo.description} 
                  name='description'
                  value={this.state.editedDescription}
                />
              </Form>
            </List.Item>

            <List.Item>
              <List.Content className='jobs-list-left short-padding-top short-padding-bottom'>
                <strong>Scheduled to arrive:</strong> CREATE HELP TO CONVERT TIME AND USE IN ALL Components
                </List.Content>
            </List.Item>

            <Form>
              <Form.Input
                onChange={(event) => { this.handleJobNotesInputChange(event) }}
                placeholder={this.state.fetchedJobInfo.job_notes}
                name='job_notes'
                value={this.state.editedJob_notes}
              />
            </Form>

            {this.mapMaterialItems()}
          </List>
          <br />
          </Scrollbars>
        </div>
      )
    } else {
      this.fetchJobInfo()
        return (
        <h1>Loading</h1>
    )}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobDetails)