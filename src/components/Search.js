import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setCurrentlySelectedJob, setCurrentDetail } from '../actions'


const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
  searchCategory: state.searchCategory,
});

const mapDispatchToProps = (dispatch) => ({
  selectJob: (job) => dispatch(setCurrentlySelectedJob(job)),
  setDetail: (detailObj) => dispatch(setCurrentDetail(detailObj))
});

class Search extends Component {
  constructor(props){
    super(props)

    this.state = {
      searchQuery: "",
      employeeID:"",
      fetchedJobInfo: {},
      fetchedClientInfo: {},
    }
  }
  

  onChange = (event) => {
    this.setState({
      searchQuery: event.target.value
    })
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.onSubmit()
    }
  }
  
  setCurrentDetailFromFetch = ( detailObject, detailType) => {
    detailObject.detailType = detailType;
    this.props.setDetail(detailObject);
  }

  fetchClientInfo = () => {
    let clientUrl = 'http://localhost:3000/clients/' + this.state.searchQuery;
    fetch(clientUrl).then(r => r.json()).then((clientObj) => { this.setCurrentDetailFromFetch(clientObj, 'client')})
  }


  onSubmit = () => {
    switch (this.props.searchCategory.searchCategory ){
      case 'jobNumber':
        let jobObj = this.props.userInfo.userInfo.jobs.find((job) => { return job.job_number === parseInt(this.state.searchQuery) });
        this.props.selectJob(jobObj);
      break;
      case 'employeeID':
    

      break;
      case 'clientID':
        this.fetchClientInfo()
      break;
    } 

  }

  render() {
    return (
      <div className="ui icon input">
        <input 
          type="text" 
          placeholder="Search..."
          onChange={(event) => this.onChange(event)}
          onKeyPress={ (event) => this.handleKeyPress(event)}
          value={this.state.searchQuery}
        ></input>
        <i 
          className="search link icon"
          onClick={() => this.onSubmit()}
        ></i>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
