import React from 'react'

export default (props) => {

  let timeArray = props.job.schedule_time.split(':');

  var newTime = new Date(String(props.job.schedule_date_year),
    String(props.job.schedule_date_month),
    String(props.job.schedule_date_day),
    timeArray[0],
    timeArray[1]);

  return (
    <li>
      {props.job.job_number} <br /> {String(newTime)}
    </li>
  )
}
