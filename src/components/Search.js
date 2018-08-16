import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setCurrentlySelectedJob } from '../actions'


const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
  searchCategory: state.searchCategory,
});

const mapDispatchToProps = (dispatch) => ({
  selectJob: (job) => dispatch(setCurrentlySelectedJob(job))
});

class Search extends Component {
  constructor(props){
    super(props)

    this.state = {
      searchQuery: ""
    }
  }
  onChange = (event) => {
    this.setState({
      searchQuery: event.target.value
    })
  }
  onSubmit = () => {
    // commented out code was search before dropdown. was working fine
    // let jobObj = this.props.userInfo.userInfo.jobs.find((job) => { return job.job_number === parseInt(this.state.searchQuery) })
    // this.props.selectJob(jobObj)
    
    if (this.props.searchCategory.searchCategory === 'jobNumber'){
      let jobObj = this.props.userInfo.userInfo.jobs.find((job) => { return job.job_number === parseInt(this.state.searchQuery) })
      this.props.selectJob(jobObj)
    }

  }
  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.onSubmit()
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
