import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';

import Login from './components/Login'
import Navbar from './components/navbar'
import JobContainer from './containers/JobContainer'

// For testing
import Register from './components/Register'

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
  username: state.username,
})

class App extends Component {
  
  renderLogin = () => {
    //remove bang for production, bang here to bypass login
    if(this.props.loggedIn) {
      return (
        <fragment>
          <Navbar />
          <h1>iDispatch</h1>
          <JobContainer />
        </fragment>
      )} else {
        return (
          <fragment>
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/' component={Login} />
            </Switch>
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
