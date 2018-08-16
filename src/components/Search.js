import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setCurrentlySelectedJob } from '../actions'


const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
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
    let jobObj = this.props.userInfo.userInfo.jobs.find((job) => { return job.job_number === parseInt(this.state.searchQuery) })
    this.props.selectJob(jobObj)
  }

  render() {
    return (
      <div className="ui icon input">
        <input 
          type="text" 
          placeholder="Search Job Number..."
          onChange={(event) => this.onChange(event)}
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
