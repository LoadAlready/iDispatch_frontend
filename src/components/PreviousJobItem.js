import React from 'react'
import UUID from 'uuid'
import { List } from 'semantic-ui-react'

export default (props) => {

  let timeArray = props.job.schedule_time.split(':');

  var date = new Date(String(props.job.schedule_date_year),
    String(props.job.schedule_date_month),
    String(props.job.schedule_date_day),
    timeArray[0],
    timeArray[1]);
  var newDate = date.toUTCString().split(' ').slice(0,4).join(' ');

  return (
    <List.Item key={UUID()}
      jobid={props.job.id}
      onClick={props.handleItemClick.bind(null, props)}
      className="padding-bottom"
    >
      <List.Content floated='right' className='jobs-list-right'>
        <List.Header>
            <strong>Date: </strong>{newDate}
        </List.Header>
      </List.Content>

      <List.Icon name='check square outline' size='large' verticalAlign='middle' className='jobs-list-left' />

      <List.Content>
        <List.Header>
          <strong>Job Number:</strong> {props.job.job_number}
        </List.Header>
      </List.Content>
    </List.Item>
  )
}
