import React, { Component } from 'react';


import './App.css';

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Login from './components/Login'
import Navbar from './components/navbar'
import JobContainer from './containers/JobContainer'




class App extends Component {
  render() {
    console.log('app', this.props)
    return (
      <div className="App">
        <Navbar />
        <h1>iDispatch</h1>
        <JobContainer />
      </div>
    );
  }
}

export default withRouter(connect()(App))
