import React from 'react'
import { Form } from 'semantic-ui-react'

const Ticket = () => (
  <Form>
    <Form.Group>
      <Form.Input label='Client Name' placeholder='Client Name' width={4} />
      <Form.Input label='Requested By' placeholder='Requested By' width={4} />
      <Form.Input label='Job Number' placeholder='Job Number' width={2} />
      <Form.Input label='Schedule Date' placeholder='Schedule Date' width={2} />
      <Form.Input label='Technician Name' placeholder='Technician Name' width={4} />
    </Form.Group>
    <Form.Group>
      <Form.Input label='Street Address' placeholder='Street Address' width={6} />
      <Form.Input label='City, State, Zip' placeholder='City, State, Zip' width={6} />
      <Form.Input label='Phone' placeholder='Phone' width={4} />
    </Form.Group>
    <Form.Group>
      <Form.TextArea label='Job Description' placeholder='Description' width={8} />
      <Form.TextArea label='Other Nothes' placeholder='Other Nothes' width={8} />
    </Form.Group>
  </Form>
)

export default Ticket