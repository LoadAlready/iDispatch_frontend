import React from 'react'

import JobListItem from './JobListItem'
import Jobs from '../data'
import jobs from '../data';

const JobList = () => {
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
              technician
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Client
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Material PO
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Date
            </h3>
          </th>
        </tr>
        {jobs.map( job => {return <JobListItem job={job}/>})}
      </tbody>
    </table>
  )
}

export default JobList
