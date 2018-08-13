import React from 'react';
import { connect } from 'react-redux'


import JobList from './JobList';
import EmployeeStats from './EmployeeStats';

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
})

const Profile = (props) => {
  return (
    <div className="profile">
      <h2>{props.userInfo.userInfo.firstname} {props.userInfo.userInfo.lastname}</h2>
        <EmployeeStats />
      <h4>Previous Jobs</h4>
        <JobList />
    </div>
  )
}

export default connect(mapStateToProps)(Profile)

