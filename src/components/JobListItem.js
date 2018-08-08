import React from 'react'

export default (props) => {
  return (
    <tr>
      <td>PROPS</td>
      <td>PROP</td>
      <td>{props.job.clientName}</td>
      <td>PROPS</td>
      <td>{new Date(parseFloat(props.job.appointment)).toLocaleString()}</td>
    </tr>
  )
}