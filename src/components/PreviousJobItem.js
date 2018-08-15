import React from 'react'

export default (props) => {

  let timeArray = props.job.schedule_time.split(':');

  var date = new Date(String(props.job.schedule_date_year),
    String(props.job.schedule_date_month),
    String(props.job.schedule_date_day),
    timeArray[0],
    timeArray[1]);
  var newDate = date.toUTCString().split(' ').slice(0,5).join(' ');

  return (
    <li jobid={props.job.id} onClick={props.handleItemClick.bind(null, props)} className="padding-bottom">
      <strong>Job Number:</strong> {props.job.job_number} <br /> {newDate} <br /> {props.job.id}
      <br />
    </li>
  )
}
