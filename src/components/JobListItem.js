import React from 'react'

export default (props) => {
  console.log("jli",props)
  let stringDate = `${props.job.schedule_date_year}-${props.job.schedule_date_month}-${props.job.schedule_date_day}`
  let date = new Date(stringDate)
  return (
    <tr>
      <td>{props.job.job_number}</td>
      <td>{props.job.client_id}</td>
      <td>{date.toDateString()}</td>
      <td>{props.job.refrence}</td>
    </tr>
  )
}
