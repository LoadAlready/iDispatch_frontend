import React, { Component } from 'react';


import './App.css';

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Login from './components/Login'
import Navbar from './components/navbar'
import JobContainer from './containers/JobContainer'

// For testing
import Register from './components/Register'

const mapStateToProps = (state) => ({
  logged_in: state.logged_in,
})

class App extends Component {
  
  renderLogin = () => {
    //remove bang for production, bang here to bypass login
    if(!this.props.logged_in) {
      return (
        <fragment>
          <Navbar />
          <h1>iDispatch</h1>
          <JobContainer />
        </fragment>
      )} else {
        return (
          <fragment>
            <h1 className="loginscreen">iDispatch</h1>
            <Login />
          </fragment>
        )}
  }

  render() {
    console.log('app', this.props)
    return (
      <div className="App">
        {this.renderLogin()}
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(App))
