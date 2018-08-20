import React, { Component } from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

class RegisterForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: "",
      email: "",
      firstname: "",
      lastname: "",
      street_address: "",
      city: "", 
      state: "",
      zip: "",
      phone: "",
      password: "",
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleSubmit = (event) => {
    let URL = 'http://localhost:3000/users/create'
    let postConfig = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: this.state.username,
          email: this.state.email,
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          street_address:  this.state.street_address,
          city: this.state.city,
          state: this.state.state,
          zip: this.state.zip,
          phone: this.state.phone,
          password: this.state.password
        }
      })
    }
    fetch(URL, postConfig)
    document.location.href = "/";
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
      <div className='login-form'>
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }`
        }</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Register your account
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input 
                  fluid icon='mail' 
                  iconPosition='left' 
                  placeholder='E-mail address'
                  name="email"
                  onChange={this.handleInputChange}
                  value={this.state.email}
                />

                <Form.Input 
                  fluid icon='user' 
                  iconPosition='left' 
                  placeholder='Username' 
                  name="username"
                  onChange={this.handleInputChange}
                  value={this.state.username}
                />

                <Form.Input
                  fluid icon='user'
                  iconPosition='left'
                  placeholder='Firstname'
                  name="firstname"
                  onChange={this.handleInputChange}
                  value={this.state.firstname}
                />

                <Form.Input
                  fluid icon='user'
                  iconPosition='left'
                  placeholder='Lastname'
                  name='lastname'
                  onChange={this.handleInputChange}
                  value={this.state.lastname}
                />

                <Form.Input
                  fluid icon='address card'
                  iconPosition='left'
                  placeholder='Street Address'
                  name="street_address"
                  onChange={this.handleInputChange}
                  value={this.state.street_address}
                />

                <Form.Input
                  fluid icon='address card'
                  iconPosition='left'
                  placeholder='City'
                  name="city"
                  onChange={this.handleInputChange}
                  value={this.state.city}
                />

                <Form.Input
                  fluid icon='address card'
                  iconPosition='left'
                  placeholder='State'
                  name= "state"
                  onChange={this.handleInputChange}
                  value={this.state.state}
                />

                <Form.Input
                  fluid icon='address card'
                  iconPosition='left'
                  placeholder='zip'
                  name= "zip"
                  onChange={this.handleInputChange}
                  value={this.state.zip}
                />

                <Form.Input
                  fluid icon='phone'
                  iconPosition='left'
                  placeholder='Phone'
                  name= "phone"
                  onChange={this.handleInputChange}
                  value={this.state.phone}
                />

                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  name='password'
                  onChange={this.handleInputChange}
                  value={this.state.password}
                />

                <Button color='teal' fluid size='large' onClick={this.handleSubmit}>
                  Register
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
  )}
}


export default RegisterForm