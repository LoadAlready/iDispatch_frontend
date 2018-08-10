import React from 'react';

import JobList from './JobList';
import EmployeeStats from './EmployeeStats';

export default () => {
  return (
    <div className="profile">
      <h2>props.name</h2>
        <EmployeeStats />
      <h4>Previous Jobs</h4>
        <JobList />
    </div>
  )
}
