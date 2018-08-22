import React from 'react';
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars';


import JobList from './JobList';
import EmployeeStats from './EmployeeStats';

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
})

const Profile = (props) => {
  if(props.userInfo !== null){
    return (
      <div className="profile">
        <h1>{props.userInfo.userInfo.firstname} {props.userInfo.userInfo.lastname}</h1>
        <h3>{props.userInfo.userInfo.street_address} {props.userInfo.userInfo.city}, {props.userInfo.userInfo.state}.</h3>
          <EmployeeStats />
        <h4>Previously Assigned Jobs</h4>
        <div className='profile-job-list'> 
            <JobList jobs={props.userInfo.userInfo.jobs} />
        </div>

      </div>
    )
  } return (
    <h1>Loading</h1>
  )
}

export default connect(mapStateToProps)(Profile)

