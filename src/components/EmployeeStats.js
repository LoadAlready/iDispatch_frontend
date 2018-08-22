import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    userInfo: state.userInfo,
})

const EmployeeStats = (props) => {
    console.log("emp", props.userInfo)
  return (
    <div>
      <table className="ui celled striped padded table">
        <tbody>
            <tr>
            <th>
                <h3 className="ui center aligned header">
                    Total Jobs Assigned
                </h3>
            </th>
            <th>
                <h3 className="ui center aligned header">
                Specialty
                </h3>
            </th>
            <th>
                <h3 className="ui center aligned header">
                Remaining Vacation Days
                </h3>
            </th>
             <th>
                <h3 className="ui center aligned header">
                Van Number
                </h3>
            </th>
            </tr>
            <tr>
                <td className="text-center">{props.userInfo.userInfo.jobs.length}</td>
                <td className="text-center">{props.userInfo.userInfo.specialty}</td>
                <td className="text-center">{props.userInfo.userInfo.vacation_days}</td>
                <td className="text-center">{props.userInfo.userInfo.van_number}</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default connect(mapStateToProps)(EmployeeStats)
