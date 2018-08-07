import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'

import Login from './components/Login'
import Navbar from './components/navbar'

import JobContainer from './containers/JobContainer'




class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Navbar />
        <h1>iDispatch</h1>
        <JobContainer />
      </div>
    );
  }
}

export default connect()(App);
