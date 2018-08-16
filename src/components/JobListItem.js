import React from 'react'

export default (props) => {
  return (
    <tr>
      <td>{props.job.job_number}</td>
      <td>{props.job.job_number}</td>
      <td>{props.job.clientName}</td>
      <td>PROPS</td>
      <td>{new Date(parseFloat(props.job.appointment)).toLocaleString()}</td>
    </tr>
  )
}
