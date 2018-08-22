import React, { Component } from 'react'

import JobListItem from './JobListItem'

class JobList extends Component {
  render() {
    return (
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">
                Job Number
            </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Client ID
            </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
               Date 
            </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Refrence
            </h3>
            </th>
          </tr>
          {this.props.jobs.map(job => { return <JobListItem job={job} /> })}
        </tbody>
      </table>
    )
  }
}
export default JobList