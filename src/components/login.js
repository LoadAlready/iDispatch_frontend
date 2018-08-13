import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { toggleLoginAction } from '../actions'

const AUTH_URL = 'http://localhost:3000/auth';
const GET_TOKEN_URL = 'http://localhost:3000/user_token/';

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
})

const mapDispatchToProps = (dispatch) => ({
  loginToggle: () => dispatch( toggleLoginAction() )
})



class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: null,
      username: null,
      password: null,
    }
  }

  getToken = () => {
    if (this.state.email && this.state.password) {
      const email = this.state.email.toLowerCase();
      const password = this.state.password;
      const postConfig = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          auth: {
            email: email,
            password: password
          }
        })
      };
      return fetch(GET_TOKEN_URL, postConfig)
        .then((r) => r.json())
        .then((response) => {
          this.testTokenAndSignIn(response.jwt);
        });
    }
  };

  testTokenAndSignIn = (token) => {
    const getConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };
    return fetch(AUTH_URL, getConfig)
      .then((r) => r.json())
      .then((res) => this.handleLoggingIn(res.status, res.username));
  };

  handleLoggingIn = (statusCode) => {
    if (statusCode === 200){
      this.props.loginToggle();
      console.log(this.props)
    }
  };

  handleLoginFormClick = () => {
    this.getToken();
  };

  handleEmailInputChange = (event) => {
    this.setState({
      email: event.target.value
    });
  };

  handlePasswordInputChange = (event) => {
    this.setState({
      password: event.target.value
    });
  };

  render() {
    console.log('login', this.state)
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
              Log-in to your account
        </Header>
            <Form size='large' onSubmit={this.handleLoginFormClick}>
              <Segment stacked>
                <Form.Input 
                  fluid icon='user' 
                  iconPosition='left' 
                  name="email" 
                  placeholder='E-mail address' 
                  onChange={(event) =>
                    this.handleEmailInputChange(event)
                  }
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={(event) =>
                    this.handlePasswordInputChange(event)
                  }
                />

                <Button 
                  type="submit" 
                  color='teal' 
                  fluid size='large'
                  onClick={this.handleRegisterFormClick}
                >
                      Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Link to='register'>Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))