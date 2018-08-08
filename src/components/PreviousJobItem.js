import React from 'react'

export default (props) => {
  return (
    <li>
      {props.job.clientName} <br />{new Date(parseFloat(props.job.appointment)).toLocaleString()}
    </li>
  )
}
