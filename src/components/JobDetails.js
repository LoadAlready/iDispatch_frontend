import React, { Component } from 'react'

export default class JobDetails extends Component {
  render() {
    return (
      <div className="job-details">
        <h2 className="text-center">Job Details</h2>
            <ul>
                <li>Client Name: PROPS</li>
                <li>Client Address: PROPS</li>
                <li>Job Description: PROPS</li>
                <li>Scheduled to arrive: PROPS</li>
                <li>Special Notes: PROPS</li>
                <li>Material PO: PROPS</li>
            </ul>
        <div className="center-content">
            <button>go to current job</button>
        </div>
      </div>
    )
  }
}
