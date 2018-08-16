import React from 'react';
import { connect } from 'react-redux'


import JobList from './JobList';
import EmployeeStats from './EmployeeStats';

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
})

const Profile = (props) => {
  if(props.userInfo !== null){
    return (
      <div className="profile">
        <h2>{props.userInfo.userInfo.firstname} {props.userInfo.userInfo.lastname}</h2>
        <EmployeeStats />
        <h4>Previous Jobs</h4>
        <div className='job-list'> 
          <JobList jobs={props.userInfo.userInfo.jobs} />
        </div>
      </div>
    )
  } return (
    <h1>Loading</h1>
  )
}

export default connect(mapStateToProps)(Profile)

