import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'


class Ticket extends Component {
  constructor(props){
    super(props)

    this.state = {
      clientName: "",
      requestedBy: "",
      jobNumber: "",
      month: "",
      day: "",
      year: "",
      leadTech: "",
      timeIn: "",
      timeOut: "",
      secondaryTechs: "",
      materialPos: "",
      suppliers: "",
      jobDescription: "",
      jobNotes: "",
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    let URL = 'http://localhost3000/jobs/';
    let postConfig = {
      method: 'post',
    }
    fetch(URL, postConfig)
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Form onSubmit={(event) => this.handleSubmit(event)}>
        <Form.Group>
          <Form.Input
            onChange={this.handleInputChange} 
            name="clientName"
            label='Client Name' 
            placeholder='Client Name' 
            width={4}
            value={this.state.clientName} 
          />
          <Form.Input
            onChange={this.handleInputChange} 
            name="requestedBy"
            label='Requested By' 
            placeholder='Requested By' 
            width={3}
            value={this.state.requestedBy} 
          />
          <Form.Input
            onChange={this.handleInputChange} 
            name="jobNumber"
            label='Job Number' 
            placeholder='Job Number' 
            width={2}
            value={this.state.jobNumber} 
          />
          <Form.Input
            onChange={this.handleInputChange} 
            name="month"
            label='Month' 
            placeholder='Month' 
            width={1}
            value={this.state.month} 
          />
          <Form.Input
            onChange={this.handleInputChange} 
            name="day"
            label='Day' 
            placeholder='Day' 
            width={1}
            value={this.state.day} 
          />
          <Form.Input
            onChange={this.handleInputChange} 
            name="year"
            label='Year' 
            placeholder='Year' 
            width={1}
            value={this.state.year} 
          />
          <Form.Input
            onChange={this.handleInputChange} 
            name="leadTech"
            label='Lead Technician' 
            placeholder='Lead Technician' 
            width={4}
            value={this.state.leadTech} 
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            onChange={this.handleInputChange} 
            name="timeIn"
            label='Time In' 
            placeholder='Time In' 
            width={2}
            value={this.state.timeIn} 
          />
          <Form.Input
            onChange={this.handleInputChange} 
            name="timeOut"
            label='Time Out' 
            placeholder='Time Out' 
            width={2}
            value={this.state.timeOut} 
          />
          <Form.Input
            onChange={this.handleInputChange} 
            name="secondaryTechs"
            label='Addional Techs' 
            placeholder='Addional Techs' 
            width={4}
            value={this.state.secondaryTechs} 
          />
          <Form.Input
            onChange={this.handleInputChange} 
            name="materialPos"
            label='Material POs' 
            placeholder='Material POs' 
            width={4}
            value={this.state.materialPos} 
          />
          <Form.Input
            onChange={this.handleInputChange} 
            name="suppliers"
            label='Supplier ID' 
            placeholder='Supplier ID' 
            width={4}
            value={this.state.suppliers} 
          />
        </Form.Group>
        <Form.Group>
          <Form.TextArea label='Job Description' placeholder='Description' width={8} />
          <Form.TextArea label='Other Nothes' placeholder='Other Nothes' width={8} />
        </Form.Group>
        <Form.Button type="submit" >Submit</Form.Button>
      </Form>
    )
  }
}

export default Ticket
